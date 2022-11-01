import React from "react";

function PageLayout({ children }) {
  return <div className="text-center p-4 d-flex flex-column">{children}</div>;
}

export default PageLayout;
