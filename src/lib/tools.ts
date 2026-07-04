export type Tool = {
  slug: string;
  emoji: string;
  title: string;
  short: string;
  description: string;
};

export const TOOLS: Tool[] = [
  {
    slug: "mojisu",
    emoji: "🔢",
    title: "文字数カウント",
    short: "貼り付けるだけで文字数・行数・原稿用紙換算",
    description:
      "テキストを貼り付けるだけで文字数（空白・改行の除外も同時表示）、行数、原稿用紙換算、UTF-8バイト数を瞬時にカウントする無料ツールです。",
  },
  {
    slug: "wareki",
    emoji: "🗓",
    title: "西暦・和暦変換",
    short: "西暦⇄令和・平成・昭和・大正・明治を一発変換",
    description:
      "西暦から和暦（令和・平成・昭和・大正・明治）、和暦から西暦を一発変換する無料ツールです。改元の境目の年は両方の元号を表示します。",
  },
  {
    slug: "percent",
    emoji: "％",
    title: "パーセント計算",
    short: "「AのB%は？」「何%増えた？」を入力するだけ",
    description:
      "「AのB%はいくつ？」「AはBの何%？」「AからBで何%増減？」の3つのパーセント計算を、数字を入れるだけで瞬時に行う無料ツールです。",
  },
];
