import type { Metadata } from "next";
import ToolPage from "@/components/ToolPage";
import { TOOLS } from "@/lib/tools";
import DayCalc from "./DayCalc";

const tool = TOOLS.find((t) => t.slug === "nissu")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.description,
  alternates: { canonical: "/nissu" },
};

export default function Page() {
  return (
    <ToolPage slug="nissu">
      <DayCalc />

      <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-600">
        <h2 className="text-base font-bold text-slate-800">「初日を含む」とは？</h2>
        <p>
          日数の数え方には2通りあります。7月1日から7月3日までは、単純な差なら2日ですが、
          初日を数えに入れると3日間です。宿泊数は「差」（2泊）、イベントの開催日数や薬の服用日数は
          「初日を含む」（3日間）で数えるのが一般的です。両方を表示しているので用途に合わせてお使いください。
        </p>
      </section>
    </ToolPage>
  );
}
