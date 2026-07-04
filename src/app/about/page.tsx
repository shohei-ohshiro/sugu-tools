import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "運営者情報・お問い合わせ",
  description: "すぐツールの運営者情報とお問い合わせ先です。",
  alternates: { canonical: "/about" },
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
        <h1 className="text-xl font-bold text-slate-900">運営者情報</h1>

        <section>
          <h2 className="mb-1 font-bold text-slate-800">このサイトについて</h2>
          <p>
            「すぐツール」は、開いた瞬間に使えることを大切にした無料Webツール集です。
            登録もインストールも不要、入力したデータはブラウザの中だけで処理され、
            サーバーに送信されません。日常のちょっとした計算や確認を、最短の手数で終わらせることを目指しています。
          </p>
        </section>

        <section>
          <h2 className="mb-1 font-bold text-slate-800">運営者</h2>
          <p>
            しょうぺい（個人開発者）。ITエンジニアとして働きながら、暮らしに役立つ小さなWebツールを開発・運営しています。
          </p>
        </section>

        <section>
          <h2 className="mb-1 font-bold text-slate-800">お問い合わせ</h2>
          <p>
            ツールの不具合報告・追加してほしいツールのリクエスト・その他のご連絡は、
            <a
              href="https://github.com/shohei-ohshiro/sugu-tools/issues"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline"
            >
              GitHubリポジトリのIssue
            </a>
            からお寄せください。
          </p>
        </section>

        <section>
          <h2 className="mb-1 font-bold text-slate-800">関連ページ</h2>
          <p>
            <Link href="/privacy" className="text-blue-600 underline">
              プライバシーポリシー
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}
