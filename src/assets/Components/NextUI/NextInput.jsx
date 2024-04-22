/* eslint-disable react/prop-types */
import { Input } from "@nextui-org/react";
import { capitalize } from "lodash";

const NextInput = ({
  className = "",
  onChange = () => console.log("please add onChange"),
  onBlur = () => console.log("please add onBlur"),
  value = "",
  name = "",
  type = "text",
  isRequired = true,
  placeholder = "",
  touched = {},
  errors = {},
  label = "",
  startContent = "",
  endContent = "",
  helperText = "",
  errorMessage = "",
  isInvalid = "",
  isLabelEnabled = true,
  ...rest
}) => {
  return (
    <Input
      className={`my-2 ${className}`}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      // variant={variant}
      label={
        isLabelEnabled ? label || capitalize(name.split("_").join(" ")) : null
      }
      name={name}
      startContent={startContent}
      endContent={endContent}
      type={type}
      helperText={helperText}
      isRequired={isRequired || true}
      placeholder={placeholder}
      isInvalid={isInvalid || (touched[name] && errors[name])}
      errorMessage={errorMessage || (touched[name] && errors[name])}
      {...rest}
    />
  );
};

export default NextInput;
