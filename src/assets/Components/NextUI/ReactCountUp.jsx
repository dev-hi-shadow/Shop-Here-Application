/* eslint-disable react/prop-types */
import CountUp from "react-countup";

const ReactCountUp = ({
  number,
  duration = 0.1,
  inrSeprator = false,
  prefix = "",
  useGrouping = false,
  useEasing = false,
  separator = false,
  decimal = "0",
  className = "",
}) => {
  return (
    <CountUp
      className={className}
      decimal={decimal}
      separator={separator}
      useEasing={useEasing}
      useGrouping={useGrouping}
      end={number}
      duration={duration}
      prefix={prefix}
      useIndianSeparators={inrSeprator}
    />
  );
};

export default ReactCountUp;
