import NextImage from "../Components/NextUI/NextImage";
import NextScrollShadow from "../Components/NextUI/NextScrollShadow";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useGetProductQuery } from "../../Services/API/Products";
import { IconChevronDown, IconStarFilled } from "@tabler/icons-react";
import _ from "lodash";
import { useState } from "react";
import { useEffect } from "react";
import { FETCH_PRODUCT_DATA } from "../Helpers";
import ReactCountUp from "../Components/NextUI/ReactCountUp";
import { useGetOffersQuery } from "../../Services/API/Offers";
import Popper from "../Components/NextUI/Popper";
import { Button, ButtonGroup, Tab, Tabs } from "@nextui-org/react";
import NextDropDown from "../Components/NextUI/NextDropDown";
import { REVIEWS_FILTER, SEARCH_QUERY } from "../Constants";
import ProductReview from "../Components/Custom/ProductReview";
import RatingSummery from "../Components/Custom/RatingSummery";
import NextButton from "../Components/NextUI/NextButton";

export default function ProductOverview() {
  const { id } = useParams();
  const Location = useLocation();
  const Navigate = useNavigate();
  const searchParams = new URLSearchParams(Location.search);
  const v = searchParams.get("v");
  const reviewFilter = searchParams.get(SEARCH_QUERY.REVIEWS_FILTER);

  const [Variations, setVariations] = useState();
  const [Reviews, setReviews] = useState();
  const [activeVariation, setActiveVariation] = useState();
   const [Picture, setPicture] = useState({
    file_name: null,
    index: 0,
  });
  const [selectedVariationTab, setSelectedVariationTab] = useState({});

  let { data: product } = useGetProductQuery({
    id,
    type: FETCH_PRODUCT_DATA.OVERVIEW,
  });
  let { data: offers, isSuccess: OfferSuccess } = useGetOffersQuery();

  const getUniqueAttributes = (array, { id, name }) => {
    return _.uniq(
      array?.flatMap((variation) =>
        variation.variation_attributes
          .filter(
            (attr) =>
              attr.attributes.attribute.name === name &&
              attr.attributes.attribute.id === id
          )
          .map((attr) => ({
            id: attr.attributes.id,
            name: attr.attributes.name,
          }))
      ),
      "id"
    );
  };

  useEffect(() => {
    if (product) {
      setActiveVariation(product?.data?.variations[v]);
      setPicture({
        file_name: product?.data?.files[0]?.file_name,
        index: 0,
      });
      setReviews(product?.data?.rating_reviews);
      setVariations(
        _.uniqBy(
          product?.data?.variations?.flatMap((variation) => {
            return variation.variation_attributes.map((attr) => ({
              name: attr.attributes.attribute.name,
              values: getUniqueAttributes(product?.data?.variations, {
                id: attr.attributes.attribute.id,
                name: attr.attributes.attribute.name,
              }),
            }));
          }),
          "name"
        )
      );
    }
  }, [product, v]);

  const handleTabSelection = (itemName, key) => {
    setSelectedVariationTab((prev) => {
      return {
        ...prev,
        [itemName]: key,
      };
    });
  };
  const handleFilterReviews = (data) => {
    let index = Number(data) ? data : Array.from(data)[0];
    if (product?.data?.rating_reviews) {
      let sortedReviews = _.orderBy(
        product?.data?.rating_reviews,
        [REVIEWS_FILTER[index].filterBy],
        [REVIEWS_FILTER[index].orderBy]
      );
      setReviews(sortedReviews);
    }

    if (reviewFilter !== index) {
      searchParams.set([SEARCH_QUERY.REVIEWS_FILTER], index);
      Navigate({ search: searchParams.toString() }, { replace: true });
    }
  };
  const handleAddToCart = () => {
    let data = {
      product_id: product?.data?.id,
      variation: activeVariation.id,
      quantity: 1,
    };
    console.log(data);
  };
  const handleBuyNow = () => {};
  useEffect(() => {
    if (reviewFilter) {
      handleFilterReviews(reviewFilter);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product, reviewFilter]);

  return (
    <>
      <div className="page-header d-print-none">
        <div className="container-xl p-3">
          <div className="bg-gray-100 dark:bg-gray-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row ">
                <div className="md:flex-1 ">
                  <div className="h-fit rounded-lg  dark:bg-gray-700 mb-4">
                    <div className="flex flex-row gap-2 min-h-[26rem] max-h-[26rem] ">
                      <div className="flex col-auto flex-col ">
                        <NextScrollShadow
                          hideScrollBar={true}
                          className="h-full gap-y-2 my-1"
                        >
                          {Array.isArray(product?.data?.files) &&
                            product.data.files.map((item, index) => {
                              return (
                                <>
                                  <NextImage
                                    onMouseEnter={() =>
                                      setPicture({
                                        file_name: item?.file_name,
                                        index,
                                      })
                                    }
                                    className={` border-2 cursor-pointer rounded-md object-contain w-16 h-16 ${
                                      Picture.index === index &&
                                      "border-blue-500"
                                    }`}
                                    src={item.file_name}
                                    alt="Product Image"
                                  />
                                </>
                              );
                            })}
                        </NextScrollShadow>
                      </div>
                      <div className="mx-auto">
                        <NextImage
                          className=" min-h-[26rem] max-h-[26rem] object-contain"
                          src={Picture.file_name}
                          alt="Product Image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-2 mb-4">
                    <div className="w-1/2 px-2">
                      <NextButton
                        onClick={handleAddToCart}
                        buttonText="Add to cart"
                        className="w-full"
                      />
                    </div>
                    <div className="w-1/2 px-2">
                      <NextButton
                        onClick={handleBuyNow}
                        buttonText="Buy Now"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="md:flex-1 px-4">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {product?.data?.name}
                  </h2>

                  <div className="flex mb-4">
                    <div className="mr-4">
                      <span className="badge bg-green-lt flex flex-wrap items-center gap-x-1">
                        {_.reduce(
                          product?.data?.rating_reviews,
                          (acc, cur) => acc + cur?.rating,
                          0
                        )}
                        <IconStarFilled size={"15"} />
                      </span>
                    </div>
                    <div>
                      <span className="font-normal text-gray-600 dark:text-gray-300">
                        {product?.data?.rating_reviews.length}
                        &nbsp;&nbsp;Rattings&nbsp;&nbsp;&&nbsp;&nbsp;
                        {
                          _.filter(product?.data?.rating_reviews, "comment")
                            .length
                        }
                        &nbsp;&nbsp;Reviews
                      </span>
                    </div>
                  </div>

                  <span className="font-semibold text-green-500 dark:text-green-300">
                    Extra ₹
                    {activeVariation?.retail_price -
                      activeVariation?.special_price}{" "}
                    off
                  </span>

                  <div className="flex mb-3">
                    <div className="mr-4">
                      <span className="font-bold text-3xl text-gray-800 dark:text-gray-300">
                        <ReactCountUp
                          prefix="₹"
                          number={activeVariation?.special_price}
                          duration={0.7}
                          separator=","
                          inrSeprator={true}
                          useGrouping={true}
                        />
                      </span>
                    </div>
                    <div className="flex items-center mr-2">
                      <span className="text-lg text-gray-600 line-through dark:text-gray-300">
                        <ReactCountUp
                          prefix="₹"
                          number={activeVariation?.retail_price}
                          separator=","
                          inrSeprator={true}
                          useGrouping={true}
                        />
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold text-sm text-green-500 dark:text-green-300">
                        {(
                          ((activeVariation?.retail_price -
                            activeVariation?.special_price) /
                            activeVariation?.retail_price) *
                          100
                        ).toFixed(2)}
                        % off
                      </span>
                    </div>
                  </div>
                  {OfferSuccess &&
                    _.map(offers.data.rows, (offer) => {
                      return (
                        <>
                          <div className="mb-2" key={offer.id}>
                            <span className="whitespace-nowrap mr-2 font-bold text-gray-900 dark:text-gray-300">
                              {offer.group}
                            </span>
                            {offer.title}
                            <Popper
                              tooltipContent={
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: offer?.terms_conditions,
                                  }}
                                />
                              }
                            >
                              <span className="text-blue-500 cursor-pointer font-semibold">
                                {" "}
                                T&C
                              </span>
                            </Popper>
                          </div>
                        </>
                      );
                    })}

                  {product?.data?.variations?.length > 1 && (
                    <>
                      <div className="mb-4">
                        <div className="flex items-center mt-2 gap-x-8">
                          <NextImage
                            src={""}
                            className="min-w-fit min-h-fit w-4 h-5 rounded "
                          />
                          <NextImage
                            src={""}
                            className="min-w-fit min-h-fit w-4 h-5 rounded "
                          />
                          <NextImage
                            src={""}
                            className="min-w-fit min-h-fit w-4 h-5 rounded "
                          />
                          <NextImage
                            src={""}
                            className="min-w-fit min-h-fit w-4 h-5 rounded "
                          />
                        </div>
                      </div>
                      <table className="w-full mb-4">
                        <tbody>
                          {_.map(Variations, (item) => (
                            <tr key={item.name}>
                              <td>
                                <span className="font-bold text-gray-700 dark:text-gray-300">
                                  {item.name}
                                </span>
                              </td>
                              <td>
                                <Tabs
                                  selectedKey={selectedVariationTab[item.name]}
                                  onSelectionChange={(e) =>
                                    handleTabSelection(item.name, e)
                                  }
                                >
                                  {_.map(item.values, (value) => (
                                    <Tab
                                      className="h-5"
                                      key={value.id}
                                      title={value.name}
                                    />
                                  ))}
                                </Tabs>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </>
                  )}

                  <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Product Description:
                    </span>
                    {/* <div
                      // className="text-gray-600 dark:text-gray-300 text-sm mt-2"
                      dangerouslySetInnerHTML={{
                        __html: product?.data?.description,
                      }}
                    ></div> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row gap-x-3 ">
                <div className="col-4">
                  <RatingSummery reviews={Reviews} />
                </div>
                <div className="col-8">
                  <header className="flex   flex-wrap items-center justify-between gap-4">
                    <h1 className="text-large font-semibold">
                      {Reviews?.length} Reviews
                    </h1>
                    <ButtonGroup size="sm" variant="flat">
                      <Button>{REVIEWS_FILTER[reviewFilter || 0].name}</Button>
                      <NextDropDown
                        variant="flat"
                        buttonText={<IconChevronDown />}
                        childArray={REVIEWS_FILTER}
                        onChange={handleFilterReviews}
                        selectedKeys={reviewFilter}
                      />
                    </ButtonGroup>
                  </header>
                  <div className="mt-4 flex flex-col">
                    <ProductReview reviews={Reviews} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
