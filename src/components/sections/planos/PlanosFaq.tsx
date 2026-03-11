"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type FaqItem = {
  question: string;
  answer: string;
};

export function PlanosFaq({ items }: { items: readonly FaqItem[] }) {
  const [openId, setOpenId] = useState<number | null>(0);

  return (
    <ul className="mt-8 space-y-2">
      {items.map((item, i) => (
        <li key={item.question}>
          <button
            type="button"
            onClick={() => setOpenId(openId === i ? null : i)}
            className={cn(
              "flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-4 text-left font-medium text-gray-900 transition-colors hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-brand",
              openId === i && "border-brand/50"
            )}
            aria-expanded={openId === i}
            aria-controls={`faq-answer-${i}`}
            id={`faq-question-${i}`}
          >
            {item.question}
            <span className="ml-2 shrink-0 text-brand" aria-hidden>
              {openId === i ? "−" : "+"}
            </span>
          </button>
          <div
            id={`faq-answer-${i}`}
            role="region"
            aria-labelledby={`faq-question-${i}`}
            className={cn(
              "overflow-hidden rounded-b-lg border border-t-0 border-gray-200 bg-white transition-all",
              openId === i ? "block" : "hidden"
            )}
          >
            <p className="border-t border-gray-100 px-4 py-4 text-gray-600">{item.answer}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
