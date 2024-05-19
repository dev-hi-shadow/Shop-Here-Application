/* eslint-disable react/prop-types */
import { User } from "@nextui-org/react";

const NextUser = ({
  className = "",
  alt = "Image not found",
  src,
  name = "",
  description = "",
  ...rest
}) => {
  return (
    <>
      <User
        className={className}
        name={name}
        description={description}
        avatarProps={{
          src: src,
          alt: alt,
          className: "opacity-100",
          classNames: {
            base: "custom-user-compoenent",
          },
          isBordered: true,
        }}
        {...rest}
      />
    </>
  );
};

export default NextUser;
