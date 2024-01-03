import React from "react";

import { Button, Img, Text } from "components";

const ProductListingPagesPLPFilterdesktop = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <Text
              className="text-center text-gray-800 text-lg w-auto"
              size="txtJostRegular18"
            >
              {props?.title}
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start w-full">
          <div className="flex flex-row gap-2 items-center justify-start w-full">
            <Img
              className="h-full w-4"
              src="images/img_refresh.svg"
              alt="refresh"
            />
            <Text
              className="flex-1 text-gray-800 text-sm w-auto"
              size="txtJostRegular14"
            >
              {props?.price}
            </Text>
          </div>
          <div className="flex flex-row gap-2 items-center justify-start w-full">
            <Img
              className="h-full w-4"
              src="images/img_refresh.svg"
              alt="refresh_One"
            />
            <Text
              className="flex-1 text-gray-800 text-sm w-auto"
              size="txtJostRegular14"
            >
              {props?.priceOne}
            </Text>
          </div>
          <div className="flex flex-row gap-2 items-center justify-start w-full">
            <Img
              className="h-full w-4"
              src="images/img_refresh.svg"
              alt="refresh_Two"
            />
            <Text
              className="flex-1 text-gray-800 text-sm w-auto"
              size="txtJostRegular14"
            >
              {props?.priceTwo}
            </Text>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center justify-start w-full">
          <div className="flex flex-col items-center justify-center w-14">
            <div className="flex flex-col items-center justify-center w-full">
              {!!props?.min ? (
                <Button
                  className="!text-gray-600 border border-gray-400 border-solid cursor-pointer font-jost h-10 rounded-sm text-center text-sm w-full"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                >
                  {props?.min}
                </Button>
              ) : null}
            </div>
          </div>
          {!!props?.to ? (
            <Text
              className="text-gray-800 text-sm w-auto"
              size="txtJostRegular14"
            >
              {props?.to}
            </Text>
          ) : null}
          <div className="flex flex-col items-center justify-center w-14">
            <div className="flex flex-col items-center justify-center w-full">
              {!!props?.max ? (
                <Button
                  className="!text-gray-600 border border-gray-400 border-solid cursor-pointer font-jost h-10 rounded-sm text-center text-sm w-full"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                >
                  {props?.max}
                </Button>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col items-end justify-center w-auto">
            <div className="flex flex-col items-start justify-start w-auto">
              {!!props?.labelEleven ? (
                <Text
                  className="text-center text-gray-900 text-sm underline w-auto"
                  size="txtJostMedium14Gray900"
                >
                  {props?.labelEleven}
                </Text>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ProductListingPagesPLPFilterdesktop.defaultProps = {
  title: "Price",
  price: "$0 - $50 (20)",
  priceOne: "$50 - $120 (1050)",
  priceTwo: "$120 - $220 (230)",
};

export default ProductListingPagesPLPFilterdesktop;
