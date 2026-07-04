import type { Metadata } from "next";
import ToolPage from "@/components/ToolPage";
import { TOOLS } from "@/lib/tools";
import Calculator from "./Calculator";

const tool = TOOLS.find((t) => t.slug === "percent")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.description,
  alternates: { canonical: "/percent" },
};

export default function Page() {
  return (
    <ToolPage slug="percent">
      <Calculator />

      <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-600">
        <h2 className="text-base font-bold text-slate-800">計算式のおさらい</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>AのB% = A × B ÷ 100（例: 3,980円の20%オフ → 3,980 × 20 ÷ 100 = 796円引き）</li>
          <li>AはBの何% = A ÷ B × 100（例: 45点は60点満点の75%）</li>
          <li>増減率 = (後 − 前) ÷ 前 × 100（例: 80 → 100 は +25%）</li>
        </ul>
        <p>割引額・達成率・前年比などの計算にどうぞ。入力した数字はブラウザ内だけで処理されます。</p>
      </section>
    </ToolPage>
  );
}
