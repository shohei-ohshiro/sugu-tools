import type { Metadata } from "next";
import ToolPage from "@/components/ToolPage";
import { TOOLS } from "@/lib/tools";
import AgeCalc from "./AgeCalc";

const tool = TOOLS.find((t) => t.slug === "nenrei")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.description,
  alternates: { canonical: "/nenrei" },
};

export default function Page() {
  return (
    <ToolPage slug="nenrei">
      <AgeCalc />

      <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-600">
        <h2 className="text-base font-bold text-slate-800">満年齢の数え方</h2>
        <p>
          満年齢は「誕生日が来るたびに1歳増える」数え方で、書類のほとんどはこの満年齢を記入します。
          このツールは今日時点の満年齢を計算します。なお法律上は誕生日の前日に加齢しますが、
          ここでは一般的な「誕生日当日に1歳増える」数え方で表示しています。
        </p>
      </section>
    </ToolPage>
  );
}
