/* eslint-disable react/prop-types */
import { Accordion, AccordionItem } from "@nextui-org/react";
import _ from "lodash";

const NextAccordion = ({
  variant = "",
  key = "",
  childArray = [],
  title = "",
  children,
}) => {
  return (
    <Accordion variant={variant || "splitted"}>
      {Array.isArray(childArray) &&
        _.map(childArray, (child, index) => {
          return (
            <AccordionItem
              key={child[key] || index}
              aria-label={`Accordion-${index}`}
              title={
                child[title] ||
                (!children && "please provide a title as a prop")
              }
            >
              {children}
            </AccordionItem>
          );
        })}
    </Accordion>
  );
};

export default NextAccordion;
