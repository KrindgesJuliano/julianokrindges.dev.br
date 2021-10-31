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
    <div className={"relative"}>
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        shouldExcludeTitleSuffix
      ></SEO>
      <Header />
      <div className={"mx-auto"}>{children}</div>
    </div>
  );
};

export default Layout;
