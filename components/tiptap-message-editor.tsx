"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { Mark, mergeAttributes } from "@tiptap/core";
import { Plugin, PluginKey } from "@tiptap/pm/state";
import { useEffect, useRef, useCallback } from "react";

// ---------------------------------------------------------------------------
// Custom Mark: templateToken
// Renders a <span> with a subtle highlight around bracketed placeholders.
// `inclusive: false` prevents the mark from extending when typing at edges.
// A ProseMirror plugin removes the mark when the user edits inside it.
// ---------------------------------------------------------------------------

const TemplateToken = Mark.create({
  name: "templateToken",
  inclusive: false,

  parseHTML() {
    return [{ tag: 'span[data-template-token]' }];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "span",
      mergeAttributes(HTMLAttributes, {
        "data-template-token": "",
        class:
          "bg-[#DBEAFE] text-[#1E3A8A] font-medium rounded px-0.5 py-px",
      }),
      0,
    ];
  },

  addProseMirrorPlugins() {
    const markType = this.type;

    return [
      new Plugin({
        key: new PluginKey("templateTokenRemoval"),

        // On every transaction that changes the document, check if any
        // templateToken marks now cover text that no longer matches the
        // original bracket pattern. If so, remove the mark from that range.
        appendTransaction(transactions, _oldState, newState) {
          const docChanged = transactions.some((tr) => tr.docChanged);
          if (!docChanged) return null;

          const { tr, doc } = newState;
          let modified = false;

          doc.descendants((node, pos) => {
            if (!node.isText) return;

            const tokenMark = node.marks.find((m) => m.type === markType);
            if (!tokenMark) return;

            // The text under a templateToken mark should match [some/content].
            // If the user has edited it so it no longer matches, strip the mark.
            const text = node.text ?? "";
            const isStillTemplate = /^\[[^\]]+\]$/.test(text);

            if (!isStillTemplate) {
              tr.removeMark(pos, pos + node.nodeSize, markType);
              modified = true;
            }
          });

          return modified ? tr : null;
        },
      }),
    ];
  },
});

// ---------------------------------------------------------------------------
// Character-limit plugin
// Prevents insertions that would cause the document plain-text length to
// exceed `maxChars`. Deletions always pass through.
// ---------------------------------------------------------------------------

function createCharLimitPlugin(maxChars: number) {
  return new Plugin({
    key: new PluginKey("charLimit"),
    filterTransaction(tr, state) {
      // Always allow non-document-changing transactions (selection, etc.)
      if (!tr.docChanged) return true;

      const newLen = tr.doc.textContent.length;
      const oldLen = state.doc.textContent.length;

      // Always allow deletions / same-length replacements
      if (newLen <= oldLen) return true;

      // Block if new length exceeds limit
      if (newLen > maxChars) return false;

      return true;
    },
  });
}

// ---------------------------------------------------------------------------
// Helpers: convert plain text with bracket tokens → Tiptap JSON content
// ---------------------------------------------------------------------------

const TEMPLATE_PATTERN = /\[[^\]]+\]/g;

interface TiptapTextNode {
  type: "text";
  text: string;
  marks?: { type: string }[];
}

function textToTiptapContent(text: string): Record<string, unknown> {
  if (!text) {
    return {
      type: "doc",
      content: [{ type: "paragraph" }],
    };
  }

  const nodes: TiptapTextNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(TEMPLATE_PATTERN)) {
    const matchStart = match.index;

    // Plain text before match
    if (matchStart > lastIndex) {
      nodes.push({ type: "text", text: text.slice(lastIndex, matchStart) });
    }

    // Template token
    nodes.push({
      type: "text",
      text: match[0],
      marks: [{ type: "templateToken" }],
    });

    lastIndex = matchStart + match[0].length;
  }

  // Trailing plain text
  if (lastIndex < text.length) {
    nodes.push({ type: "text", text: text.slice(lastIndex) });
  }

  return {
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: nodes.length > 0 ? nodes : undefined,
      },
    ],
  };
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const MAX_CHARS = 500;

interface TiptapMessageEditorProps {
  /** External template text. When this changes, editor is re-initialised. */
  defaultMessage: string;
  /** Called with plain-text on every edit. */
  onChange: (plainText: string) => void;
  /** Placeholder shown when editor is empty. */
  placeholder?: string;
}

export default function TiptapMessageEditor({
  defaultMessage,
  onChange,
  placeholder = "Any questions or specific requirements?",
}: TiptapMessageEditorProps) {
  // Track the last defaultMessage we applied so we don't loop.
  const appliedRef = useRef<string>(defaultMessage);
  // Keep a ref to onChange so the onCreate closure always has the latest
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  const handleUpdate = useCallback(
    ({ editor }: { editor: ReturnType<typeof useEditor> extends infer E ? NonNullable<E> : never }) => {
      const text = editor.getText();
      onChangeRef.current(text);
    },
    []
  );

  const editor = useEditor({
    // Required for Next.js SSR — editor is created on client after mount
    immediatelyRender: false,

    extensions: [
      StarterKit.configure({
        // Disable features we don't need — keep only Document, Paragraph,
        // Text, and History (undo/redo).
        heading: false,
        bold: false,
        italic: false,
        strike: false,
        code: false,
        codeBlock: false,
        blockquote: false,
        bulletList: false,
        orderedList: false,
        listItem: false,
        horizontalRule: false,
        hardBreak: false,
        dropcursor: false,
        gapcursor: false,
      }),
      TemplateToken,
      Placeholder.configure({ placeholder }),
    ],

    content: textToTiptapContent(defaultMessage),

    editorProps: {
      attributes: {
        class:
          "prose-none outline-none min-h-[120px] sm:min-h-[142px] text-sm text-slate-900 leading-relaxed",
        "aria-label": "Message",
        role: "textbox",
        "aria-multiline": "true",
      },

      // Strip formatting from pasted content — accept only plain text.
      handlePaste(view, event) {
        const text = event.clipboardData?.getData("text/plain");
        if (text) {
          event.preventDefault();
          const { state, dispatch } = view;
          const tr = state.tr.insertText(text);
          dispatch(tr);
          return true;
        }
        return false;
      },
    },

    // Register the char-limit plugin via `onCreate` so it runs after
    // StarterKit's plugins are initialised.
    onCreate({ editor: e }) {
      e.registerPlugin(createCharLimitPlugin(MAX_CHARS));
      // Fire initial onChange so messageDraft is in sync (use ref for latest)
      onChangeRef.current(e.getText());
    },

    onUpdate: handleUpdate,
  });

  // ---- Sync external defaultMessage changes into the editor ----
  useEffect(() => {
    if (!editor || editor.isDestroyed) return;
    if (defaultMessage === appliedRef.current) return;

    appliedRef.current = defaultMessage;

    const content = textToTiptapContent(defaultMessage);
    editor.commands.setContent(content);

    // Fire onChange with the new plain text
    onChangeRef.current(editor.getText());
  }, [defaultMessage, editor]);

  return (
    <EditorContent
      editor={editor}
      className="w-full overflow-y-auto rounded-xl border border-slate-300 pl-11 pr-16 py-3 transition-all focus-within:border-[#2563eb] focus-within:ring-2 focus-within:ring-[#2563eb]/20 sm:min-h-[150px] max-h-[200px]"
    />
  );
}
