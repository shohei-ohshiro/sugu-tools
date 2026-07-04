import type { Metadata } from "next";
import ToolPage from "@/components/ToolPage";
import { TOOLS } from "@/lib/tools";
import Converter from "./Converter";

const tool = TOOLS.find((t) => t.slug === "wareki")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.description,
  alternates: { canonical: "/wareki" },
};

export default function Page() {
  return (
    <ToolPage slug="wareki">
      <Converter />

      <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-600">
        <h2 className="text-base font-bold text-slate-800">元号の早見表</h2>
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-xs text-slate-500">
              <th className="py-1.5 pr-4">元号</th>
              <th className="py-1.5 pr-4">期間</th>
              <th className="py-1.5">西暦への変換</th>
            </tr>
          </thead>
          <tbody className="text-slate-700">
            <tr className="border-b border-slate-100">
              <td className="py-1.5 pr-4">令和</td>
              <td className="py-1.5 pr-4">2019年5月1日〜</td>
              <td className="py-1.5">令和の年 + 2018</td>
            </tr>
            <tr className="border-b border-slate-100">
              <td className="py-1.5 pr-4">平成</td>
              <td className="py-1.5 pr-4">1989年1月8日〜2019年4月30日</td>
              <td className="py-1.5">平成の年 + 1988</td>
            </tr>
            <tr className="border-b border-slate-100">
              <td className="py-1.5 pr-4">昭和</td>
              <td className="py-1.5 pr-4">1926年12月25日〜1989年1月7日</td>
              <td className="py-1.5">昭和の年 + 1925</td>
            </tr>
            <tr className="border-b border-slate-100">
              <td className="py-1.5 pr-4">大正</td>
              <td className="py-1.5 pr-4">1912年7月30日〜1926年12月24日</td>
              <td className="py-1.5">大正の年 + 1911</td>
            </tr>
            <tr>
              <td className="py-1.5 pr-4">明治</td>
              <td className="py-1.5 pr-4">1868年10月23日〜1912年7月29日</td>
              <td className="py-1.5">明治の年 + 1867</td>
            </tr>
          </tbody>
        </table>
        <p>
          改元をまたぐ年（1912・1926・1989・2019年）は、月日によって元号が変わるため両方を表示しています。
        </p>
      </section>
    </ToolPage>
  );
}
