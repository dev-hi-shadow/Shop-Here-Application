/* eslint-disable react/prop-types */
import { Switch } from "@nextui-org/react";

const NextSwitch = ({
  defaultSelected,
  size = "md",
  color = "primary",
  startContent,
  isSelected = false,
  endContent,
  onChange = () => console.log("please add onChange"),
  ...rest
}) => {
  return (
    <Switch
      defaultSelected={defaultSelected}
      size={size}
      color={color}
      startContent={startContent}
      endContent={endContent}
      isSelected={isSelected}
      onChange={onChange}
      {...rest}
    >
      Dark mode
    </Switch>
  );
};

export default NextSwitch;
