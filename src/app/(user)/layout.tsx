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

  return (
    <Fragment>
      {children}
    </Fragment>
  );
}
