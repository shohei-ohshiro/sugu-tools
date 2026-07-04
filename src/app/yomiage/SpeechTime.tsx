"use client";

import { useMemo, useState } from "react";

/** 読み上げ対象の文字数（空白・改行を除く） */
function countChars(text: string): number {
  return Array.from(text).filter((c) => !/\s/.test(c) && c !== "　").length;
}

function fmtTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.round(seconds % 60);
  return m > 0 ? `${m}分${String(s).padStart(2, "0")}秒` : `${s}秒`;
}

const SPEEDS = [
  { label: "ゆっくり（アナウンス）", cpm: 300 },
  { label: "ふつう", cpm: 350 },
  { label: "早口", cpm: 400 },
];

export default function SpeechTime() {
  const [text, setText] = useState("");
  const chars = useMemo(() => countChars(text), [text]);

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="スピーチやナレーションの原稿をここに貼り付け"
        rows={8}
        autoFocus
        className="w-full rounded-2xl border border-slate-300 bg-white p-4 text-base leading-relaxed outline-none focus:border-blue-500"
      />

      <div className="mt-3 rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-600">
        読み上げる文字数（空白・改行除く）:{" "}
        <span className="text-lg font-bold tabular-nums text-slate-900">{chars.toLocaleString()}</span> 字
      </div>

      <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3">
        {SPEEDS.map((s) => (
          <div key={s.cpm} className="rounded-xl bg-blue-50 p-3">
            <div className="text-xs text-slate-500">
              {s.label}
              <span className="ml-1 text-slate-400">{s.cpm}字/分</span>
            </div>
            <div className="mt-0.5 text-xl font-bold tabular-nums text-blue-700">
              {chars === 0 ? "—" : fmtTime((chars / s.cpm) * 60)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
