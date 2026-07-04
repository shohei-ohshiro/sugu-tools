"use client";

import { useState } from "react";

const ETO = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
const DAY = 86400000;

function parse(s: string): Date | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return null;
  const d = new Date(`${s}T00:00:00`);
  return Number.isNaN(d.getTime()) ? null : d;
}

function startOfToday(): Date {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

export default function AgeCalc() {
  const [birth, setBirth] = useState("");

  const b = parse(birth);
  const today = startOfToday();
  const valid = b !== null && b.getTime() <= today.getTime();

  let age = 0;
  let livedDays = 0;
  let untilBirthday = 0;
  let eto = "";
  if (valid && b) {
    age = today.getFullYear() - b.getFullYear();
    const hadBirthday =
      today.getMonth() > b.getMonth() ||
      (today.getMonth() === b.getMonth() && today.getDate() >= b.getDate());
    if (!hadBirthday) age -= 1;

    livedDays = Math.round((today.getTime() - b.getTime()) / DAY);

    // 次の誕生日（2/29生まれは平年3/1扱い）
    let next = new Date(today.getFullYear(), b.getMonth(), b.getDate());
    if (next.getTime() <= today.getTime()) {
      next = new Date(today.getFullYear() + 1, b.getMonth(), b.getDate());
    }
    untilBirthday = Math.round((next.getTime() - today.getTime()) / DAY);

    // 子年=1900年基準（1900年は子）
    eto = ETO[(((b.getFullYear() - 1900) % 12) + 12) % 12];
  }

  return (
    <div>
      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <label className="text-sm font-bold text-slate-700">生年月日</label>
        <div className="mt-2">
          <input
            type="date"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
            max={new Date().toISOString().slice(0, 10)}
            className="rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-base outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {birth !== "" && !valid && (
        <p className="mt-3 text-sm text-rose-600">未来の日付は指定できません。</p>
      )}

      {valid && (
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-blue-50 p-3">
            <div className="text-xs text-slate-500">満年齢（今日時点）</div>
            <div className="text-2xl font-bold tabular-nums text-blue-700">{age}歳</div>
          </div>
          <div className="rounded-xl bg-blue-50 p-3">
            <div className="text-xs text-slate-500">生まれてから</div>
            <div className="text-2xl font-bold tabular-nums text-blue-700">
              {livedDays.toLocaleString()}
              <span className="text-sm font-normal">日</span>
            </div>
          </div>
          <div className="rounded-xl bg-blue-50 p-3">
            <div className="text-xs text-slate-500">次の誕生日まで</div>
            <div className="text-2xl font-bold tabular-nums text-blue-700">
              {untilBirthday.toLocaleString()}
              <span className="text-sm font-normal">日</span>
            </div>
          </div>
          <div className="rounded-xl bg-blue-50 p-3">
            <div className="text-xs text-slate-500">干支</div>
            <div className="text-2xl font-bold text-blue-700">{eto}年</div>
          </div>
        </div>
      )}
    </div>
  );
}
