/* eslint-disable react/prop-types */
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
// import image from "/public/dist/img/not-found/image.jpg";
export const PrWithDesc = ({ data }) => {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <Image
          alt="Card background"
          className="object-cover rounded-xl opacity-100"
          src={data.main_image || `https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/34.png`}
          width={270}
        />
      </CardHeader>

      <CardBody className="overflow-visible  px-4">
        <small className="text-default-500 uppercase mt-2">{data?.category?.name}</small>
        {/* <small className="text-default-500">12 Tracks</small> */}
        <h4 className="font-bold text-large">
          {data.name.toLowerCase().includes(data.brand.name.toLowerCase())
            ? data?.name
            : `${data?.brand?.name} ${data.name}`}
        </h4>
      </CardBody>
    </Card>
  );
};
