"use client";

import { useState } from "react";

type Era = { name: string; start: number; end: number; offset: number; boundary?: string };

// offset: 西暦 = 元号の年 + offset
const ERAS: Era[] = [
  { name: "令和", start: 2019, end: 9999, offset: 2018, boundary: "5月1日から" },
  { name: "平成", start: 1989, end: 2019, offset: 1988, boundary: "1月8日から" },
  { name: "昭和", start: 1926, end: 1989, offset: 1925, boundary: "12月25日から" },
  { name: "大正", start: 1912, end: 1926, offset: 1911, boundary: "7月30日から" },
  { name: "明治", start: 1868, end: 1912, offset: 1867, boundary: "10月23日から" },
];

function toWareki(year: number): string[] {
  const out: string[] = [];
  for (const e of ERAS) {
    if (year >= e.start && year <= e.end) {
      const n = year - e.offset;
      const label = `${e.name}${n === 1 ? "元" : n}年`;
      out.push(year === e.start && e.boundary ? `${label}（${e.boundary}）` : label);
    }
  }
  return out;
}

const inputCls =
  "w-24 rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-center text-lg font-semibold tabular-nums outline-none focus:border-blue-500";

export default function Converter() {
  const [seireki, setSeireki] = useState("");
  const [eraName, setEraName] = useState("令和");
  const [eraYear, setEraYear] = useState("");

  const year = parseInt(seireki, 10);
  const warekiResults = !Number.isNaN(year) && year >= 1868 && year <= 2100 ? toWareki(year) : null;

  const era = ERAS.find((e) => e.name === eraName)!;
  const ny = parseInt(eraYear, 10);
  const maxEraYear = era.end - era.offset;
  const seirekiResult = !Number.isNaN(ny) && ny >= 1 && ny <= maxEraYear ? ny + era.offset : null;

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <h2 className="text-sm font-bold text-slate-700">西暦 → 和暦</h2>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <input
            inputMode="numeric"
            value={seireki}
            onChange={(e) => setSeireki(e.target.value.replace(/[^0-9]/g, ""))}
            placeholder="1990"
            maxLength={4}
            autoFocus
            className={inputCls}
          />
          <span className="text-slate-600">年 は</span>
          <span className="min-w-28 text-lg font-bold text-blue-700">
            {warekiResults === null
              ? seireki === ""
                ? "—"
                : "1868〜2100年で入力"
              : warekiResults.join(" ／ ")}
          </span>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <h2 className="text-sm font-bold text-slate-700">和暦 → 西暦</h2>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <select
            value={eraName}
            onChange={(e) => setEraName(e.target.value)}
            className="rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-base"
          >
            {ERAS.map((e) => (
              <option key={e.name}>{e.name}</option>
            ))}
          </select>
          <input
            inputMode="numeric"
            value={eraYear}
            onChange={(e) => setEraYear(e.target.value.replace(/[^0-9]/g, ""))}
            placeholder="2"
            maxLength={3}
            className={inputCls}
          />
          <span className="text-slate-600">年 は</span>
          <span className="min-w-24 text-lg font-bold text-blue-700">
            {seirekiResult === null
              ? eraYear === ""
                ? "—"
                : `${eraName}は${maxEraYear}年まで`
              : `西暦${seirekiResult}年`}
          </span>
        </div>
      </div>
    </div>
  );
}
