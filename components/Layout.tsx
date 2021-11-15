import React from "react";

import Header from "./Header";
import SEO from "./SEO";
interface Props {
  title: string;
  keywords?: string;
  description?: string;
  children: React.ReactNode;
}

const Layout = ({ title, keywords, description, children }: Props) => {
  return (
    <React.Fragment>
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        shouldExcludeTitleSuffix
      ></SEO>
      <Header />
      <main className="">{children}</main>
    </React.Fragment>
  );
};

export default Layout;
