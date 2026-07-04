"use client";

import { useState } from "react";

function todayStr(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function parse(s: string): Date | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return null;
  const d = new Date(`${s}T00:00:00`);
  return Number.isNaN(d.getTime()) ? null : d;
}

function fmt(d: Date): string {
  const youbi = ["日", "月", "火", "水", "木", "金", "土"][d.getDay()];
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日（${youbi}）`;
}

const DAY = 86400000;

const dateCls =
  "rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-base outline-none focus:border-blue-500";

export default function DayCalc() {
  const [from, setFrom] = useState(todayStr());
  const [to, setTo] = useState(todayStr());
  const [base, setBase] = useState(todayStr());
  const [offset, setOffset] = useState("");
  const [dir, setDir] = useState<"after" | "before">("after");

  const dFrom = parse(from);
  const dTo = parse(to);
  const diff = dFrom && dTo ? Math.round((dTo.getTime() - dFrom.getTime()) / DAY) : null;

  const dBase = parse(base);
  const n = parseInt(offset, 10);
  const target =
    dBase && !Number.isNaN(n)
      ? new Date(dBase.getTime() + (dir === "after" ? n : -n) * DAY)
      : null;

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <h2 className="text-sm font-bold text-slate-700">日付のあいだの日数</h2>
        <div className="mt-2 flex flex-wrap items-center gap-2 text-slate-600">
          <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} className={dateCls} />
          <span>から</span>
          <input type="date" value={to} onChange={(e) => setTo(e.target.value)} className={dateCls} />
          <span>まで</span>
        </div>
        {diff !== null && (
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded-xl bg-blue-50 p-3">
              <div className="text-xs text-slate-500">差（初日を含まない）</div>
              <div className="text-xl font-bold tabular-nums text-blue-700">
                {Math.abs(diff).toLocaleString()}日{diff < 0 && <span className="text-sm font-normal">（過去方向）</span>}
              </div>
            </div>
            <div className="rounded-xl bg-blue-50 p-3">
              <div className="text-xs text-slate-500">初日を含む</div>
              <div className="text-xl font-bold tabular-nums text-blue-700">
                {(Math.abs(diff) + 1).toLocaleString()}日間
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <h2 className="text-sm font-bold text-slate-700">○日後・○日前の日付</h2>
        <div className="mt-2 flex flex-wrap items-center gap-2 text-slate-600">
          <input type="date" value={base} onChange={(e) => setBase(e.target.value)} className={dateCls} />
          <span>の</span>
          <input
            inputMode="numeric"
            value={offset}
            onChange={(e) => setOffset(e.target.value.replace(/[^0-9]/g, ""))}
            placeholder="30"
            className="w-24 rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-center text-lg font-semibold tabular-nums outline-none focus:border-blue-500"
          />
          <select
            value={dir}
            onChange={(e) => setDir(e.target.value as "after" | "before")}
            className="rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-base"
          >
            <option value="after">日後</option>
            <option value="before">日前</option>
          </select>
          <span>は</span>
          <span className="text-lg font-bold text-blue-700">{target ? fmt(target) : "—"}</span>
        </div>
      </div>
    </div>
  );
}
