import React, { Fragment } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import flatListToHierarchical from "../../lib/utils/flat";
import "../../../faust.config";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const res = await fetch("https://ranafrica.org/api/footer");
  // const resLay = await fetch("https://ranafrica.org/api/layouts");
  // const navs = await res.json();
  // const lay = await resLay.json();
  // const footNav = navs?.data?.menuItems?.nodes;
  // const topNav = navs?.data?.topNav?.nodes;
  // const menuFoot = flatListToHierarchical(footNav);
  // const menuHeader = flatListToHierarchical(topNav);
  // const sign = lay?.signup;
  // console.log(sign);
  return (
    <Fragment>
      {/* <Header navs={menuHeader} sign={sign} /> */}
      {children}
      {/* <Footer navs={menuFoot} /> */}
    </Fragment>
  );
}
