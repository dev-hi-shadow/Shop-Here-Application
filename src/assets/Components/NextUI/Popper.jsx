/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import { createPopper } from "@popperjs/core";
import { IconX } from "@tabler/icons-react";
import NextScrollShadow from "./NextScrollShadow";

const Popper = ({ children, tooltipContent = false }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const buttonRef = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current && tooltipRef.current) {
      const popperInstance = createPopper(
        buttonRef.current,
        tooltipRef.current,
        {
          placement: "bottom",
        }
      );

      // Cleanup function to remove the Popper instance on unmount
      return () => popperInstance.destroy();
    }
  }, [showTooltip]);

  return (
    <>
      <span ref={buttonRef} onMouseEnter={() => setShowTooltip(true)}>
        {children}
      </span>
      {showTooltip && (
        <div
          ref={tooltipRef}
          className={`w-[30rem] absolute z-10 p-0 text-sm bg-gray-950 text-white rounded shadow-lg `}
          role="tooltip"
        >
          <div className="flex justify-end mt-0 pt-0">
            <IconX
              className="text-red-500 cursor-pointer"
              onClick={() => setShowTooltip(false)}
            />
          </div>
          <div className="p-2 pt-0">
            <NextScrollShadow hideScrollBar className="w-full h-[300px]">
              {tooltipContent}
            </NextScrollShadow>
          </div>
        </div>
      )}
    </>
  );
};

export default Popper;
