import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "すぐツールのプライバシーポリシー。入力データの扱い、Cookie、広告配信について説明します。",
  alternates: { canonical: "/privacy" },
};

export default function Page() {
  return (
    <div className="safe-top safe-bottom mx-auto min-h-dvh max-w-2xl px-4 pb-10">
      <header className="flex items-center justify-between py-4">
        <Link href="/" className="text-sm font-bold text-slate-800 hover:text-blue-600">
          🧰 すぐツール
        </Link>
        <Link href="/" className="text-xs text-slate-500 hover:text-blue-600">
          ツール一覧 →
        </Link>
      </header>

      <main className="space-y-5 text-sm leading-relaxed text-slate-700">
        <h1 className="text-xl font-bold text-slate-900">プライバシーポリシー</h1>

        <section>
          <h2 className="mb-1 font-bold text-slate-800">入力データの扱い</h2>
          <p>
            当サイトの各ツールに入力されたテキストや数値は、すべてお使いのブラウザ内で処理され、
            当サイトのサーバーへ送信・保存されることはありません。
          </p>
        </section>

        <section>
          <h2 className="mb-1 font-bold text-slate-800">アクセス解析について</h2>
          <p>
            当サイトは、サイト改善のためにアクセス解析ツールを利用する場合があります。
            解析ツールはトラフィックデータの収集のためにCookieを使用することがありますが、
            このデータは匿名で収集されており、個人を特定するものではありません。
          </p>
        </section>

        <section>
          <h2 className="mb-1 font-bold text-slate-800">広告配信について</h2>
          <p>
            当サイトは、第三者配信の広告サービス（Google AdSense等）を利用する場合があります。
            広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookieを使用することがあります。
            Cookieを無効にする方法や、Googleによる情報の取り扱いの詳細は
            「広告 – ポリシーと規約 – Google」をご確認ください。
          </p>
        </section>

        <section>
          <h2 className="mb-1 font-bold text-slate-800">免責事項</h2>
          <p>
            各ツールの計算結果の正確性には万全を期していますが、その内容を保証するものではありません。
            当サイトの利用によって生じたいかなる損害についても、運営者は責任を負いかねます。
            重要な手続き等には公的な情報のご確認をお願いします。
          </p>
        </section>

        <section>
          <h2 className="mb-1 font-bold text-slate-800">お問い合わせ</h2>
          <p>
            当サイトへのご意見・不具合報告は
            <a
              href="https://github.com/shohei-ohshiro/sugu-tools/issues"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline"
            >
              GitHubリポジトリのIssue
            </a>
            までお寄せください。
          </p>
        </section>

        <p className="text-xs text-slate-400">制定日: 2026年7月4日</p>
      </main>
    </div>
  );
}
