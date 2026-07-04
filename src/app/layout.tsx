import type { Metadata, Viewport } from "next";
import "./globals.css";

const TITLE = "すぐツール — 開いた瞬間つかえる無料ツール集";
const DESC =
  "文字数カウント・西暦和暦変換・パーセント計算など、開いた瞬間つかえる無料Webツール集。登録不要、データはブラウザ内で処理されます。";

export const metadata: Metadata = {
  metadataBase: new URL("https://sugu-tools.vercel.app"),
  title: { default: TITLE, template: "%s | すぐツール" },
  description: DESC,
  applicationName: TITLE,
  openGraph: {
    title: TITLE,
    description: DESC,
    type: "website",
    locale: "ja_JP",
    siteName: TITLE,
  },
  twitter: { card: "summary", title: TITLE, description: DESC },
  appleWebApp: { capable: true, title: TITLE, statusBarStyle: "default" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className="bg-slate-50 antialiased">{children}</body>
    </html>
  );
}
