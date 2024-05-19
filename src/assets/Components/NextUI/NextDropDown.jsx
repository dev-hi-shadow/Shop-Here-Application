/* eslint-disable react/prop-types */
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import _ from "lodash";
 
const NextDropDown = ({
  childArray = [],
  childKey = "id",
  childValue = "name",
  childStartContent = "",
  childEndContent = "",
  className = "",
  childClassName = "",
  selectedKeys = "",
  defaultSelectedKeys = "",
  closeOnSelect = true,
  //   onBlur = () => console.log("please add onBlur"),
  onChange = () => console.log("please add onChange"),
  variant = "flat",
  disallowEmptySelection = false,
  selectionMode = "single",
  isButtonIconOnly = false,
  buttonText = "",
}) => {
  return (
    <>
      <Dropdown closeOnSelect={closeOnSelect}>
        <DropdownTrigger>
          <Button className="min-w-unit-sm" isIconOnly={isButtonIconOnly} variant={variant}>
            {buttonText}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          className={className}
          aria-label="Static Actions"
          selectedKeys={selectedKeys}
          defaultSelectedKeys={defaultSelectedKeys}
          variant={variant}
          selectionMode={selectionMode}
          onSelectionChange={onChange}
          disallowEmptySelection={disallowEmptySelection}
        >
          {_.map(childArray, (item , index) => {
            return (
              <DropdownItem
                className={childClassName}
                startContent={childStartContent}
                endContent={childEndContent}
                key={item["key"] || item[childKey] || index }
              >
                {item["value"] || item[childValue]}
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default NextDropDown;
