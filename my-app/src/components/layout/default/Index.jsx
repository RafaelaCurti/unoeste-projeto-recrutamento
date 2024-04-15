import React from "react";
import HeaderPartial from "./header/Index";
import FooterPartial from "./footer/Index";

const LayoutDefault = ({ children }) => {
  return (
    <>
      <HeaderPartial />
      {children}
      <FooterPartial />
    </>
  );
};

export default LayoutDefault;
