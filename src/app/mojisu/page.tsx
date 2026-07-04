import type { Metadata } from "next";
import ToolPage from "@/components/ToolPage";
import { TOOLS } from "@/lib/tools";
import Counter from "./Counter";

const tool = TOOLS.find((t) => t.slug === "mojisu")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.description,
  alternates: { canonical: "/mojisu" },
};

export default function Page() {
  return (
    <ToolPage slug="mojisu">
      <Counter />

      <section className="mt-8 space-y-3 text-sm leading-relaxed text-slate-600">
        <h2 className="text-base font-bold text-slate-800">このツールについて</h2>
        <p>
          テキストボックスに文字を入力または貼り付けると、その場で文字数を数えます。
          レポートの文字数制限、SNSの投稿、エントリーシート、ブログ記事の長さ確認などにどうぞ。
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>「空白を除く」は半角・全角スペースとタブを除いた数です。</li>
          <li>「原稿用紙」は400字詰め換算の目安です（改行は考慮しません）。</li>
          <li>絵文字など一部の文字は、サービスによって2文字と数えられることがあります。</li>
          <li>入力した文章はブラウザ内だけで処理され、サーバーには送信されません。</li>
        </ul>
      </section>
    </ToolPage>
  );
}
