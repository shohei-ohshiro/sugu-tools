import type { Metadata } from "next";
import ToolPage from "@/components/ToolPage";
import { TOOLS } from "@/lib/tools";
import SpeechTime from "./SpeechTime";

const tool = TOOLS.find((t) => t.slug === "yomiage")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.description,
  alternates: { canonical: "/yomiage" },
};

export default function Page() {
  return (
    <ToolPage slug="yomiage">
      <SpeechTime />

      <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-600">
        <h2 className="text-base font-bold text-slate-800">スピーチの文字数の目安</h2>
        <p>
          日本語の読み上げ速度は、聞き取りやすいアナウンスで1分あたり約300字、
          ふつうの速さで約350字、早口で約400字と言われています（NHKのアナウンスは1分300字が目安）。
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>1分スピーチ: 約300字</li>
          <li>3分スピーチ: 約900字</li>
          <li>5分スピーチ: 約1,500字</li>
          <li>10分プレゼン: 約3,000字</li>
        </ul>
        <p>
          本番では緊張で早口になりがちです。練習では「ゆっくり（300字/分）」の時間に収まるように
          原稿を作ると、当日ちょうどよい長さになります。
        </p>
      </section>
    </ToolPage>
  );
}
