"use client";

import { useState } from "react";

const inputCls =
  "w-28 rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-center text-lg font-semibold tabular-nums outline-none focus:border-blue-500";

function num(s: string): number | null {
  if (s.trim() === "") return null;
  const v = Number(s);
  return Number.isFinite(v) ? v : null;
}

function fmt(v: number): string {
  return Number(v.toFixed(4)).toLocaleString(undefined, { maximumFractionDigits: 4 });
}

function NumInput({
  value,
  onChange,
  placeholder,
  autoFocus,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  autoFocus?: boolean;
}) {
  return (
    <input
      inputMode="decimal"
      value={value}
      onChange={(e) => onChange(e.target.value.replace(/[^0-9.\-]/g, ""))}
      placeholder={placeholder}
      autoFocus={autoFocus}
      className={inputCls}
    />
  );
}

function Result({ children }: { children: React.ReactNode }) {
  return <span className="text-lg font-bold text-blue-700">{children}</span>;
}

export default function Calculator() {
  const [a1, setA1] = useState("");
  const [b1, setB1] = useState("");
  const [a2, setA2] = useState("");
  const [b2, setB2] = useState("");
  const [before, setBefore] = useState("");
  const [after, setAfter] = useState("");

  const va1 = num(a1);
  const vb1 = num(b1);
  const r1 = va1 !== null && vb1 !== null ? (va1 * vb1) / 100 : null;

  const va2 = num(a2);
  const vb2 = num(b2);
  const r2 = va2 !== null && vb2 !== null && vb2 !== 0 ? (va2 / vb2) * 100 : null;

  const vBefore = num(before);
  const vAfter = num(after);
  const r3 =
    vBefore !== null && vAfter !== null && vBefore !== 0
      ? ((vAfter - vBefore) / vBefore) * 100
      : null;

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <h2 className="text-sm font-bold text-slate-700">① AのB%はいくつ？</h2>
        <div className="mt-2 flex flex-wrap items-center gap-2 text-slate-600">
          <NumInput value={a1} onChange={setA1} placeholder="3980" autoFocus />
          <span>の</span>
          <NumInput value={b1} onChange={setB1} placeholder="20" />
          <span>% は</span>
          <Result>{r1 === null ? "—" : fmt(r1)}</Result>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <h2 className="text-sm font-bold text-slate-700">② AはBの何%？</h2>
        <div className="mt-2 flex flex-wrap items-center gap-2 text-slate-600">
          <NumInput value={a2} onChange={setA2} placeholder="45" />
          <span>は</span>
          <NumInput value={b2} onChange={setB2} placeholder="60" />
          <span>の</span>
          <Result>{r2 === null ? "—" : `${fmt(r2)}%`}</Result>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <h2 className="text-sm font-bold text-slate-700">③ 前から後へ、何%増減した？</h2>
        <div className="mt-2 flex flex-wrap items-center gap-2 text-slate-600">
          <span>前</span>
          <NumInput value={before} onChange={setBefore} placeholder="80" />
          <span>→ 後</span>
          <NumInput value={after} onChange={setAfter} placeholder="100" />
          <span>は</span>
          <Result>
            {r3 === null ? "—" : `${r3 > 0 ? "+" : ""}${fmt(r3)}%`}
          </Result>
        </div>
      </div>
    </div>
  );
}
