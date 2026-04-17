import Image from "next/image";
import type { ContentBlock } from "@/app/lms-course/data/modules/module1/chapter1";

type CalloutVariant = "info" | "warning" | "danger";
type ImageLayout = "quarter" | "half" | "full";
type ImageAlign = "left" | "center" | "right";
type TableSize = "default" | "large";

const calloutStyles: Record<CalloutVariant, string> = {
  info: "lms-callout-info",
  warning: "lms-callout-warning",
  danger: "lms-callout-danger",
};

const calloutLabels: Record<CalloutVariant, string> = {
  info: "Note",
  warning: "Important",
  danger: "Critical",
};

const imageLayoutClasses: Record<ImageLayout, string> = {
  quarter: "w-full lg:w-1/4",
  half: "w-full lg:w-1/2",
  full: "w-full",
};

const imageAlignClasses: Record<ImageAlign, string> = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
};

function getImageAlignClass(align?: ImageAlign): string {
  return imageAlignClasses[align ?? "center"];
}

const tableShellClasses: Record<TableSize, string> = {
  default: "max-w-[72ch]",
  large: "max-w-[92ch]",
};

const tableTextClasses: Record<TableSize, string> = {
  default: "text-sm sm:text-base",
  large: "text-sm sm:text-base lg:text-lg",
};

const tableCellClasses: Record<TableSize, string> = {
  default: "px-4 py-2",
  large: "px-4 py-2 lg:px-5 lg:py-3",
};

function getTableSize(size?: TableSize): TableSize {
  return size ?? "default";
}

export function LessonView({ content }: { content: ContentBlock[] }) {
  return (
    <div className="lms-reading space-y-5 pt-3 text-base leading-7 sm:pt-4 sm:text-lg">
      {content.map((block, idx) => {
        if (block.type === "text") {
          return (
            <p key={idx} className="max-w-[72ch] text-balance">
              {block.value}
            </p>
          );
        }

        if (block.type === "heading") {
          return (
            <h2 key={idx} className="pt-2 text-xl font-semibold leading-tight sm:text-2xl">
              {block.value}
            </h2>
          );
        }

        if (block.type === "list") {
          return (
            <ul
              key={idx}
              className="lms-reading-list max-w-[72ch] list-disc space-y-1 pl-5"
            >
              {block.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          );
        }

        if (block.type === "image") {
          const layout = block.layout ?? "half";
          const alignClass = getImageAlignClass(block.align);

          return (
            <div key={idx} className={`my-6 flex w-full ${alignClass}`}>
              <figure
                className={`lms-image-frame overflow-hidden rounded-2xl border p-2 ${imageLayoutClasses[layout]}`}
              >
                <Image
                  src={block.src}
                  alt={block.alt}
                  width={960}
                  height={640}
                  className="h-auto w-full rounded-xl object-cover"
                  priority={idx === 0}
                />
              </figure>
            </div>
          );
        }

        if (block.type === "imagePlaceholder") {
          const layout = block.layout ?? "half";

          return (
            <figure
              key={idx}
              className={`lms-image-frame my-6 overflow-hidden rounded-2xl border p-2 ${imageLayoutClasses[layout]}`}
            >
              <div className="flex min-h-44 flex-col items-center justify-center gap-3 rounded-xl border border-dashed px-5 py-8 text-center sm:min-h-52">
                <p className="lms-muted text-xs font-semibold uppercase tracking-wide">
                  Image Placeholder
                </p>
                <p className="max-w-[60ch] text-sm leading-6 sm:text-base">
                  {block.prompt}
                </p>
              </div>
            </figure>
          );
        }

        if (block.type === "table") {
          const tableSize = getTableSize(block.size);

          return (
            <div
              key={idx}
              className={`lms-table-shell my-6 overflow-x-auto rounded-2xl border ${tableShellClasses[tableSize]}`}
            >
              <table className={`w-full border-collapse text-left ${tableTextClasses[tableSize]}`}>
                <thead>
                  <tr className="lms-table-head-row border-b">
                    {block.headers.map((header, i) => (
                      <th
                        key={i}
                        className={`lms-table-head-cell font-semibold ${tableCellClasses[tableSize]}`}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {block.rows.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className="lms-table-row border-b last:border-b-0"
                    >
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className={`${tableCellClasses[tableSize]} align-top ${
                            cellIndex === 0
                              ? "lms-table-cell-strong font-medium"
                              : "lms-table-cell"
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        if (block.type === "callout") {
          const variant: CalloutVariant = block.variant ?? "info";

          return (
            <div
              key={idx}
              className={`lms-callout ${calloutStyles[variant]} border px-4 py-2.5 sm:px-5 sm:py-3`}
            >
              <p className="text-sm font-semibold uppercase tracking-wide">
                {calloutLabels[variant]}
              </p>
              <p className="mt-1 text-base leading-6">{block.value}</p>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
