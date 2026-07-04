import Link from "next/link";
import { TOOLS } from "@/lib/tools";

export default function Home() {
  return (
    <div className="safe-top safe-bottom mx-auto min-h-dvh max-w-2xl px-4 pb-10">
      <main className="pt-10">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">🧰 すぐツール</h1>
        <p className="mt-2 text-sm text-slate-600">
          開いた瞬間つかえる無料Webツール集。登録不要・すべてブラウザ内で完結（入力したデータはサーバーに送信されません）。
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {TOOLS.map((t) => (
            <Link
              key={t.slug}
              href={`/${t.slug}`}
              className="rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-blue-400 hover:shadow-sm"
            >
              <span className="text-lg font-bold text-slate-900">
                {t.emoji} {t.title}
              </span>
              <span className="mt-1 block text-sm text-slate-500">{t.short}</span>
            </Link>
          ))}
        </div>
      </main>

      <footer className="mt-12 space-y-1 border-t border-slate-100 pt-4 text-center text-xs text-slate-400">
        <p>すぐツール — ツールは少しずつ増えていきます。</p>
        <p>
          <Link href="/privacy" className="hover:text-blue-600">プライバシーポリシー</Link>
        </p>
      </footer>
    </div>
  );
}
