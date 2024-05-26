import _ from "lodash";
import {
  useGetCartQuery,
  useUpdateCartItemMutation,
} from "../../Services/API/Carts";
import NextImage from "../Components/NextUI/NextImage";
import NextButton from "../Components/NextUI/NextButton";
import { IconMinus, IconPlus, IconTrashFilled } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import ReactCountUp from "../Components/NextUI/ReactCountUp";
import { useAlert } from "../Hooks/Toastify";

const Cart = () => {
  const { showAlert } = useAlert();
  const [pricing, setPricing] = useState({
    total: 0,
    subTotal: 0,
    tax: 0,
    discount: 0,
    shipping: 0,
  });
  const {
    data: cartData,
    isLoading: cartLoading,
    isSuccess: cartSuccess,
  } = useGetCartQuery();
  const [UpdateCartItem] = useUpdateCartItemMutation();

  const UpdateCart = async (id, quantity) => {
    const toastid = showAlert(
      null,
      `Please Wait!  , We are updating your cart`,
      "info"
    );
    try {
      const data = await UpdateCartItem({ id, quantity }).unwrap();
      showAlert(toastid, data.message, data.success || data?.status);
    } catch (error) {
      Array.isArray(error.data.errors)
        ? error.data.errors.map((error) => showAlert(toastid, error, false))
        : showAlert(toastid, "Something went wrong", false);
    }
  };

  useEffect(() => {``
    const subTotal = _.reduce(
      cartData?.data?.rows,
      (acc, cur) => {
        return acc + (cur?.variation?.retail_price * cur.quantity);
      },
      0
    );
    let discount = _.reduce(
      cartData?.data?.rows,
      (acc, cur) => {
        return (
          acc +
          (cur?.variation?.retail_price -
            (cur?.variation?.special_price || cur?.variation?.retail_price))
        );
      },
      0
    );

    setPricing({
      subTotal,
      shipping: subTotal > 500 ? 0 : 60,
      discount,
      total: subTotal - discount - (subTotal > 500 ? 0 : 60),
    });
  }, [cartData?.data?.rows]);

  return (
    <>
      <div className="page-header d-print-none">
        <div className="container-xl p-0">
          <section className="flex flex-row py-10 ">
            <div className="col-8  ">
              {cartLoading
                ? "Loading..."
                : cartSuccess &&
                  _.map(cartData.data.rows, (cartItem) => {
                    return (
                      <div className="w-full max-w-7xl md:px-2 lg-6 mx-auto">
                        <div className="rounded-3 border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-1 max-lg:max-w-lg max-lg:mx-auto gap-y-4 ">
                          <div className="col-span-12 lg:col-span-2 img box">
                            <NextImage
                              className="max-lg:w-full lg:w-[180px] rounded "
                              alt={cartItem.product.name}
                              src={cartItem.product.main_image}
                            />
                          </div>
                          <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
                            <div className="flex items-center justify-between w-full">
                              <h5 className="font-manrope font-semibold text-xl leading-9 text-gray-900">
                                {cartItem.product.name} (
                                {cartItem.variation.variation_name})
                              </h5>
                              <NextButton
                                size="sm"
                                color="danger"
                                className=" min-h-3 min-w-3  h-5 w-5 rounded-full"
                                isIconOnly
                                buttonText={<IconTrashFilled size={12} />}
                              />
                            </div>
                            <h6 className=" font-semibold text-lg  ">
                              {cartItem.variation.special_price ||
                                cartItem.variation.retail_price}
                            </h6>
                            <p className="text-base leading-7 text-gray-500 mb-3">
                              Introducing our sleek round white portable
                              <a className="text-primary-600"> more....</a>
                            </p>
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-3">
                                <NextButton
                                  size="sm"
                                  className=" min-h-3 min-w-3  h-5 w-5 rounded-full"
                                  isIconOnly
                                  onClick={() => UpdateCart(cartItem.id, -1)}
                                  buttonText={<IconMinus size={12} />}
                                />
                                <span
                                  className="border flex justify-center items-center border-gray-200 min-h-3 min-w-3  h-5 w-5 rounded-full p-0 m-0  text-gray-800 font-semibold text-sm  
                                   bg-gray-100  text-center"
                                >
                                  {cartItem.quantity}
                                </span>
                                <NextButton
                                  size="sm"
                                  className=" min-h-3 min-w-3  h-5 w-5 rounded-full"
                                  isIconOnly
                                  onClick={() => UpdateCart(cartItem.id, +1)}
                                  buttonText={<IconPlus size={12} />}
                                />
                              </div>
                              <h6 className="text-primary-600 font-manrope font-bold text-2xl leading-9 text-right">
                                {(cartItem.variation.special_price ||
                                  cartItem.variation.retail_price) *
                                  cartItem.quantity}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
            </div>

            <div className="col-4 ">
              <div className="mx-auto max-w-4xl md:px-2 flex-1 space-y-6 lg:mt-0 lg:w-full sticky top-3">
                <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                  <p className="text-xl font-semibold text-gray-900 dark:text-white">
                    Order summary
                  </p>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                          Original price
                        </dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">
                          <ReactCountUp
                            start={0}
                            number={pricing.subTotal}
                            prefix="₹"
                            separator=","
                            inrSeprator={true}
                            useGrouping={true}
                          />
                        </dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                          Savings
                        </dt>
                        <dd className="text-base font-medium text-green-600">
                          <ReactCountUp
                            decimals={2}
                            start={0}
                            number={pricing.discount}
                            prefix="₹"
                            separator=","
                            inrSeprator={true}
                            useGrouping={true}
                          />{" "}
                        </dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                          Shipping Charge
                        </dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">
                          {pricing.total > 500 ? (
                            <span className="text-green-300 font-medium text-lg">
                              free
                            </span>
                          ) : (
                            60
                          )}
                        </dd>
                      </dl>

                      {/* <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                          Tax
                        </dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">
                          $799
                        </dd>
                      </dl> */}
                    </div>

                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                      <dt className="text-base font-bold text-gray-900 dark:text-white">
                        Total
                      </dt>
                      <dd className="text-base font-bold text-gray-900 dark:text-white">
                        <ReactCountUp
                          decimals={2}
                          start={0}
                          number={pricing.total}
                          prefix="₹"
                          separator=","
                          inrSeprator={true}
                          useGrouping={true}
                        />{" "}
                      </dd>
                    </dl>
                  </div>

                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Proceed to Checkout
                  </a>

                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      {" "}
                      or{" "}
                    </span>
                    <a
                      href="#"
                      title=""
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                    >
                      Continue Shopping
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 12H5m14 0-4 4m4-4-4-4"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Cart;
