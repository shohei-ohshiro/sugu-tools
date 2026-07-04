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
    slug: "yomiage",
    emoji: "🎤",
    title: "読み上げ時間計算",
    short: "スピーチ・ナレーション原稿が何分かかるか",
    description:
      "原稿を貼り付けるだけで、読み上げにかかる時間を計算する無料ツールです。1分スピーチ・3分スピーチに必要な文字数の目安も表示。朝礼・結婚式・プレゼン・YouTube台本の準備にどうぞ。",
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
    slug: "nissu",
    emoji: "📅",
    title: "日数計算",
    short: "2つの日付のあいだの日数・○日後の日付",
    description:
      "開始日と終了日のあいだの日数（初日を含む/含まない両方）と、指定日から○日後・○日前の日付を瞬時に計算する無料ツールです。締め切りや宿泊数、支払いサイトの計算にどうぞ。",
  },
  {
    slug: "nenrei",
    emoji: "🎂",
    title: "年齢計算",
    short: "生年月日から満年齢・生まれてからの日数",
    description:
      "生年月日を入れるだけで、今日時点の満年齢、生まれてからの日数、次の誕生日までの日数、干支を計算する無料ツールです。書類記入や年齢確認にどうぞ。",
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
