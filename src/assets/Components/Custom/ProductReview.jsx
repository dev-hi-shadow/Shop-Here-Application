/* eslint-disable react/prop-types */
import { Accordion, AccordionItem } from "@nextui-org/react";
import _ from "lodash";
import NextUser from "../NextUI/NextUser";
import moment from "moment";
import { IconStarFilled } from "@tabler/icons-react";
 
const ProductReview = ({ reviews = [], variant = "light" }) => {
   return (
    <>
      <Accordion variant={variant}>
        {_.map(reviews, (review) => {
          return (
            <AccordionItem
              className="py-0 my-1"
              classNames={{
                trigger: ["py-1 flex items-center"],
                content: ["flex items-center-"],
              }}
              startContent={
                <div className="h-full flex items-center">
                  <NextUser
                    src={review.rating_by.profile_picture}
                    name={review.rating_by.display_name}
                    description={moment(review.created_at).fromNow()}
                  />
                </div>
              }
              indicator={<IconStarFilled className="text-orange-500" />}
              key={review.id}
              aria-label={`Accordion${review.id}`}
              title={
                <div className="flex justify-end">
                  <span className="font-semibold">{review.rating}</span>
                </div>
              }
            >
              <span className="h-fit text-ellipsis overflow-hidden">
                {review.comment}
              </span>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
};

export default ProductReview;
