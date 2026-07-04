import Link from "next/link";
import { TOOLS } from "@/lib/tools";

/** 全ツール共通の枠: ヘッダー・タイトル・本体・関連ツール・フッター */
export default function ToolPage({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  const tool = TOOLS.find((t) => t.slug === slug)!;
  const others = TOOLS.filter((t) => t.slug !== slug);

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

      <main>
        <h1 className="text-xl font-bold text-slate-900 sm:text-2xl">
          {tool.emoji} {tool.title}
        </h1>
        <p className="mt-1 text-sm text-slate-600">{tool.description}</p>
        <div className="mt-5">{children}</div>

        {/* AdSense枠（申請承認後にコードを差し込む） */}

        <section className="mt-10">
          <h2 className="text-sm font-bold text-slate-700">ほかのツール</h2>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {others.map((t) => (
              <Link
                key={t.slug}
                href={`/${t.slug}`}
                className="rounded-xl border border-slate-200 bg-white p-3 text-sm hover:border-blue-400"
              >
                <span className="font-semibold text-slate-800">
                  {t.emoji} {t.title}
                </span>
                <span className="mt-0.5 block text-xs text-slate-500">{t.short}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-10 space-y-1 border-t border-slate-100 pt-4 text-center text-xs text-slate-400">
        <p>すぐツール — 開いた瞬間つかえる無料ツール集。登録不要・データはブラウザ内で処理されサーバーに送信されません。</p>
        <p>
          <Link href="/privacy" className="hover:text-blue-600">プライバシーポリシー</Link>
        </p>
      </footer>
    </div>
  );
}
