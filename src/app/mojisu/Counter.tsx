"use client";

import { useMemo, useState } from "react";

function count(text: string) {
  const chars = Array.from(text);
  const noNewline = chars.filter((c) => c !== "\n" && c !== "\r");
  const noSpace = noNewline.filter((c) => c !== " " && c !== "　" && c !== "\t");
  const lines = text === "" ? 0 : text.split(/\r?\n/).length;
  const paragraphs = text.trim() === "" ? 0 : text.split(/\r?\n\s*\r?\n/).filter((p) => p.trim() !== "").length;
  const bytes = new TextEncoder().encode(text).length;
  const genkoyoshi = Math.ceil(noNewline.length / 400);
  return {
    all: chars.length,
    noNewline: noNewline.length,
    noSpace: noSpace.length,
    lines,
    paragraphs,
    bytes,
    genkoyoshi,
  };
}

const stats: { key: keyof ReturnType<typeof count>; label: string; note?: string }[] = [
  { key: "all", label: "文字数（改行込み）" },
  { key: "noNewline", label: "文字数（改行除く）" },
  { key: "noSpace", label: "文字数（空白・改行除く）" },
  { key: "lines", label: "行数" },
  { key: "paragraphs", label: "段落数" },
  { key: "bytes", label: "バイト数（UTF-8）" },
  { key: "genkoyoshi", label: "原稿用紙（400字換算）", note: "枚" },
];

export default function Counter() {
  const [text, setText] = useState("");
  const c = useMemo(() => count(text), [text]);

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="ここに文章を入力または貼り付け"
        rows={8}
        autoFocus
        className="w-full rounded-2xl border border-slate-300 bg-white p-4 text-base leading-relaxed outline-none focus:border-blue-500"
      />
      <div className="mt-2 flex justify-end">
        <button
          onClick={() => setText("")}
          disabled={text === ""}
          className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-600 hover:border-rose-400 disabled:opacity-40"
        >
          クリア
        </button>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.key} className="rounded-xl border border-slate-200 bg-white p-3">
            <div className="text-xs text-slate-500">{s.label}</div>
            <div className="mt-0.5 text-xl font-bold tabular-nums text-slate-900">
              {c[s.key].toLocaleString()}
              {s.note && <span className="ml-0.5 text-sm font-normal text-slate-500">{s.note}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
