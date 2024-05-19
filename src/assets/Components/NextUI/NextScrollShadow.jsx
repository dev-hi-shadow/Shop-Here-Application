/* eslint-disable react/prop-types */
import { ScrollShadow } from "@nextui-org/react";

const NextScrollShadow = ({ hideScrollBar, className, children }) => {
  return (
    <ScrollShadow hideScrollBar={hideScrollBar} className={className}>
      {children}
    </ScrollShadow>
  );
};

export default NextScrollShadow;
