import Image from "next/image";
import type { ContentBlock } from "@/app/lms-course/data/modules/module1/chapter1";

type CalloutVariant = "info" | "warning" | "danger";

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

export function LessonView({ content }: { content: ContentBlock[] }) {
  return (
    <div className="lms-reading space-y-7 text-base leading-8 sm:text-lg">
      {content.map((block, idx) => {
        if (block.type === "text") {
          return (
            <p key={idx} className="max-w-[72ch] text-balance">
              {block.value}
            </p>
          );
        }

        if (block.type === "list") {
          return (
            <ul
              key={idx}
              className="lms-reading-list max-w-[72ch] list-disc space-y-2 pl-6"
            >
              {block.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          );
        }

        if (block.type === "image") {
          return (
            <figure
              key={idx}
              className="lms-image-frame my-8 overflow-hidden rounded-2xl border p-2"
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
          );
        }

        if (block.type === "table") {
          return (
            <div
              key={idx}
              className="my-8 max-w-[72ch] overflow-x-auto rounded-2xl border"
            >
              <table className="w-full border-collapse text-left text-sm sm:text-base">
                <thead>
                  <tr className="border-b bg-white/5">
                    {block.headers.map((header, i) => (
                      <th
                        key={i}
                        className="px-4 py-3 font-semibold text-zinc-100"
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
                      className="border-b last:border-b-0 hover:bg-white/5"
                    >
                      {row.map((cell, cellIndex) => (
<td
  key={cellIndex}
  className={`px-4 py-3 align-top ${
    cellIndex === 0 ? "font-medium text-zinc-200" : "text-zinc-300"
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
              className={`lms-callout ${calloutStyles[variant]} border px-4 py-3 sm:px-5 sm:py-4`}
            >
              <p className="text-sm font-semibold uppercase tracking-wide">
                {calloutLabels[variant]}
              </p>
              <p className="mt-1 text-base leading-7">{block.value}</p>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}