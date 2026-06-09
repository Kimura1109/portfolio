import { Cormorant_Garamond, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata = {
  title: "Rumisense | ルミセンス",
  description: "制作費無料・月額9,800円のWeb制作。修正最短24時間対応。",
  metadataBase: new URL("https://www.rumisense.com"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={`${cormorant.variable} ${notoSansJP.variable} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
