import type { Metadata } from "next";
import { Geist_Mono, Gowun_Dodum, Jua, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { ProgressProvider } from "@/lib/progress";
import StarField from "@/components/StarField";
import TopBar from "@/components/TopBar";
import EasterEggs from "@/components/EasterEggs";
import { themeInitScript } from "@/components/ThemeToggle";

// 한글 폰트는 서브셋 목록에 korean 이 없어서 preload 를 끈다
const display = Jua({ weight: "400", variable: "--font-jua", preload: false });
const body = Gowun_Dodum({ weight: "400", variable: "--font-gowun", preload: false });
// 문제 푸는 화면용 읽기 편한 고딕
const plain = Noto_Sans_KR({ weight: ["400", "700"], variable: "--font-noto", preload: false });
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "응응글리쉬 | 영어로 물어보면? 응응!",
  description: "너 영어 할 수 있어? 응! 물론이지 글리쉬. 별을 모으며 영작하는 은하수 영어 공부 공간.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${display.variable} ${body.variable} ${plain.variable} ${mono.variable} h-full antialiased`}
      // 테마 스크립트가 data-theme 을 먼저 바꾸므로 경고 무시
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <ProgressProvider>
          <StarField />
          <TopBar />
          <main className="flex flex-1 flex-col">{children}</main>
          <EasterEggs />
        </ProgressProvider>
      </body>
    </html>
  );
}
