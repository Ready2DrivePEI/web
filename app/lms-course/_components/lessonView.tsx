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

const imageLayoutClasses: Record<"quarter" | "half", string> = {
  quarter: "w-full lg:w-1/4",
  half: "w-full lg:w-1/2",
};

export function LessonView({ content }: { content: ContentBlock[] }) {
  return (
    <div className="lms-reading space-y-5 text-base leading-7 sm:text-lg">
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

          return (
            <figure
              key={idx}
              className={`lms-image-frame my-6 mx-auto overflow-hidden rounded-2xl border p-2 ${imageLayoutClasses[layout]}`}
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
              className="lms-table-shell my-6 max-w-[72ch] overflow-x-auto rounded-2xl border"
            >
              <table className="w-full border-collapse text-left text-sm sm:text-base">
                <thead>
                  <tr className="lms-table-head-row border-b">
                    {block.headers.map((header, i) => (
                      <th
                        key={i}
                        className="lms-table-head-cell px-4 py-2 font-semibold"
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
                          className={`px-4 py-2 align-top ${
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
