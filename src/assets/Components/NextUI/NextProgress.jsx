/* eslint-disable react/prop-types */
import { Progress } from "@nextui-org/react";

const NextProgress = ({ className = "", value=0  , color = "primary", rest }) => {
  return (
    <Progress
      {...rest}
      color={color}
      aria-label={"progress"} 
      value={value}
      className={className || "max-w-md"}
    />
  );
};

export default NextProgress;
