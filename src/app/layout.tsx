import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Script from "next/script";
import { Open_Sans, Varela_Round } from "next/font/google";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../../faust.config";
import flatListToHierarchical from "../lib/utils/flat";
import { SpeedInsights } from "@vercel/speed-insights/next";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--rana-opensans",
});
const varelaRound = Varela_Round({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--rana-varela",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const res = await fetch(`${process.env.BASE_URL}/api/footer`, {
  //   next: { revalidate: 60 },
  // });
  // const resLay = await fetch(`${process.env.BASE_URL}/api/layouts`, {
  //   next: { revalidate: 60 },
  // });
  // const navs = await res.json();
  // const lay = await resLay.json();
  // const footNav = navs?.data?.menuItems?.nodes;
  // const topNav = navs?.data?.topNav?.nodes;
  // const menuFoot = flatListToHierarchical(footNav);
  // const menuHeader = flatListToHierarchical(topNav);
  // const sign = lay?.signup;
  return (
    <html>
      <body
        lang="en"
        className={`${openSans.variable} ${varelaRound.variable} sans-serif [&_p]:font-rsans [&_li]:font-rsans`}
      >
        <div id="siteTrans">
          <SpeedInsights />

          {/* <Header navs={menuHeader} sign={sign} /> */}
          {children}

          {/* <Footer navs={menuFoot} /> */}
        </div>
        <Script
          src="/assets/scripts/translation.js"
          strategy="beforeInteractive"
          async={true}
        />
        {process.env.GOOGLE_TRANSLATION_CONFIG && (
          <Script
            src="https://translate.google.com/translate_a/element.js?cb=TranslateInit"
            strategy="afterInteractive"
            async={true}
          />
        )}
      </body>
    </html>
  );
}
