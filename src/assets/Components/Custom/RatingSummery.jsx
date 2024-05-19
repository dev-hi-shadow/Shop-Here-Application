/* eslint-disable react/prop-types */
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import NextProgress from "../NextUI/NextProgress";
import _ from "lodash";

const RatingSummery = ({ reviews = [] }) => {
  return (
    <>
      <Card className="bg-transparent">
        <CardHeader className="pb-0 bg- flex gap-1  items-center ">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              className="text-orange-500 iconify iconify--solar"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M9.153 5.408C10.42 3.136 11.053 2 12 2c.947 0 1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182c.28.213.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347 0-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941 1.523-1.22 3.983-1.776l.636-.144c.699-.158 1.048-.237 1.329-.45c.28-.213.46-.536.82-1.182z"
              ></path>
            </svg>
            <span className="text-large font-semibold">4.4</span>
            <span className="text-default-500">• (Based on 139 reviews)</span>
          </div>
        </CardHeader>
        <CardBody className="gap-y-3">
          {_.map([5, 4, 3, 2, 1], (rating) => (
            <div className="flex flex-col">
              <div className="flex justify-between">
                <span>{rating} star</span>
                <span>{_.filter(reviews, { rating }).length}</span>
              </div>
              <div>
                <NextProgress
                  value={Number(
                    (_.filter(reviews, { rating }).length / reviews.length) *
                      100
                  )}
                  className="max-w-full "
                  color="warning"
                />
              </div>
            </div>
          ))}
        </CardBody>
      </Card>
    </>
  );
};

export default RatingSummery;
