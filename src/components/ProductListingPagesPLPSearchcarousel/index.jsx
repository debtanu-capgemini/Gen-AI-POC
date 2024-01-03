import React from "react";

import { Button, Img, Input, List, Text } from "components";

const ProductListingPagesPLPSearchcarousel = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex flex-1 flex-col h-[596px] md:h-auto items-center justify-start pb-6 pt-4 px-4 rounded-[5px] shadow-bs w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Img
                className="h-[268px] md:h-auto object-cover w-full"
                alt="rectangleSeventySeven"
                src={props?.rectangleseventyseven}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 h-full items-start justify-end w-full">
            <div className="flex flex-col gap-1 items-start justify-start w-full">
              <Text
                className="bg-deep_orange-50 justify-center px-1 rounded-sm text-center text-gray-800 text-xs w-auto"
                size="txtJostMedium12Gray800"
              >
                {props?.newproductbadge}
              </Text>
              <Text
                className="text-blue_gray-800 text-sm w-full"
                size="txtJostMedium14Bluegray800"
              >
                {props?.brand}
              </Text>
              <Text
                className="text-base text-gray-800 w-full"
                size="txtJostRegular16"
              >
                {props?.titleOne}
              </Text>
            </div>
            <Text
              className="text-gray-800 text-lg w-auto"
              size="txtJostSemiBold18"
            >
              {props?.priceThree}
            </Text>
            <div className="flex flex-col gap-1 items-start justify-start w-full">
              <Text
                className="text-gray-800 text-sm w-full"
                size="txtJostRegular14"
              >
                {props?.typefourteen}
              </Text>
              <Input
                name="storetitles"
                placeholder="In-Store Pickup available"
                className="font-jost p-0 placeholder:text-gray-800 sm:pr-5 text-gray-800 text-left text-sm w-full"
                wrapClassName="flex pr-[35px] w-full"
                prefix={
                  <Img
                    className="h-6 mr-1 my-auto"
                    src="images/img_line_icons_instore_pickup.svg"
                    alt="Line Icons/In-store Pickup"
                  />
                }
              ></Input>
            </div>
            <div className="flex flex-row gap-1 items-center justify-start w-auto">
              <List
                className="sm:flex-col flex-row grid grid-cols-5 justify-start w-auto"
                orientation="horizontal"
              >
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-4 w-4"
                    src="images/img_fillediconsstarfull.svg"
                    alt="fillediconsstar"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-4 w-4"
                    src="images/img_fillediconsstarfull.svg"
                    alt="fillediconsstar"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-4 w-4"
                    src="images/img_fillediconsstarfull.svg"
                    alt="fillediconsstar"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-4 w-4"
                    src="images/img_signal.svg"
                    alt="signal"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-4 w-4"
                    src="images/img_fillediconsstarfull_blue_gray_100.svg"
                    alt="fillediconsstar"
                  />
                </div>
              </List>
              <div className="flex flex-row items-start justify-start w-auto">
                <Text
                  className="text-gray-900 text-xs w-auto"
                  size="txtJostMedium12"
                >
                  {props?.one}
                </Text>
                <Text
                  className="text-gray-900 text-xs underline"
                  size="txtJostMedium12"
                >
                  {props?.zeroOne}
                </Text>
                <Text
                  className="text-gray-900 text-xs w-auto"
                  size="txtJostMedium12"
                >
                  {props?.two}
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center pt-2 w-full">
              <Text
                className="text-blue_gray-800 text-center text-xs w-auto"
                size="txtJostMedium12Bluegray800"
              >
                {props?.offer}
              </Text>
            </div>
            <Button
              className="!text-white-A700 cursor-pointer font-jost font-medium text-base text-center w-full"
              shape="round"
              color="blue_gray_800"
              size="xs"
              variant="fill"
            >
              {props?.addToBag}
            </Button>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-1 flex-col h-[596px] md:h-auto items-center justify-start pb-6 pt-4 px-4 rounded-[5px] shadow-bs w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Img
                className="h-[268px] md:h-auto object-cover w-full"
                alt="rectangleSeventySeven_One"
                src={props?.rectangleseventysevenOne}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 h-full items-start justify-end w-full">
            <div className="flex flex-col gap-1 items-start justify-start w-full">
              <Text
                className="bg-deep_orange-50 justify-center px-1 rounded-sm text-center text-gray-800 text-xs w-auto"
                size="txtJostMedium12Gray800"
              >
                {props?.newproductbadgeOne}
              </Text>
              <Text
                className="text-blue_gray-800 text-sm w-full"
                size="txtJostMedium14Bluegray800"
              >
                {props?.brandOne}
              </Text>
              <Text
                className="text-base text-gray-800 w-full"
                size="txtJostRegular16"
              >
                {props?.titleTwo}
              </Text>
            </div>
            <Text
              className="text-gray-800 text-lg w-auto"
              size="txtJostSemiBold18"
            >
              {props?.priceFour}
            </Text>
            <div className="flex flex-col gap-1 items-start justify-start w-full">
              <Text
                className="text-gray-800 text-sm w-full"
                size="txtJostRegular14"
              >
                {props?.typefourteenOne}
              </Text>
              <Input
                name="storetitles_One"
                placeholder="In-Store Pickup available"
                className="font-jost p-0 placeholder:text-gray-800 sm:pr-5 text-gray-800 text-left text-sm w-full"
                wrapClassName="flex pr-[35px] w-full"
                prefix={
                  <Img
                    className="h-6 mr-1 my-auto"
                    src="images/img_line_icons_instore_pickup.svg"
                    alt="Line Icons/In-store Pickup"
                  />
                }
              ></Input>
            </div>
            <div className="flex flex-row gap-1 items-center justify-start w-auto">
              <List
                className="sm:flex-col flex-row grid grid-cols-5 justify-start w-auto"
                orientation="horizontal"
              >
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-4 w-4"
                    src="images/img_fillediconsstarfull.svg"
                    alt="fillediconsstar"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-4 w-4"
                    src="images/img_fillediconsstarfull.svg"
                    alt="fillediconsstar"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-4 w-4"
                    src="images/img_fillediconsstarfull.svg"
                    alt="fillediconsstar"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-4 w-4"
                    src="images/img_signal.svg"
                    alt="signal"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-4 w-4"
                    src="images/img_fillediconsstarfull_blue_gray_100.svg"
                    alt="fillediconsstar"
                  />
                </div>
              </List>
              <div className="flex flex-row items-start justify-start w-auto">
                <Text
                  className="text-gray-900 text-xs w-auto"
                  size="txtJostMedium12"
                >
                  {props?.three}
                </Text>
                <Text
                  className="text-gray-900 text-xs underline"
                  size="txtJostMedium12"
                >
                  {props?.zeroTwo}
                </Text>
                <Text
                  className="text-gray-900 text-xs w-auto"
                  size="txtJostMedium12"
                >
                  {props?.four}
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center pt-2 w-full">
              <Text
                className="text-blue_gray-800 text-center text-xs w-auto"
                size="txtJostMedium12Bluegray800"
              >
                {props?.offerOne}
              </Text>
            </div>
            <Button
              className="!text-white-A700 cursor-pointer font-jost font-medium text-base text-center w-full"
              shape="round"
              color="blue_gray_800"
              size="xs"
              variant="fill"
            >
              {props?.addToBagOne}
            </Button>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-1 flex-col h-[596px] md:h-auto items-center justify-start pb-6 pt-4 px-4 rounded-[5px] shadow-bs w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Img
                className="h-[268px] md:h-auto object-cover w-full"
                alt="rectangleSeventySeven_Two"
                src={props?.rectangleseventysevenTwo}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 h-full items-start justify-end w-full">
            <div className="flex flex-col gap-1 items-start justify-start w-full">
              <Text
                className="bg-deep_orange-50 justify-center px-1 rounded-sm text-center text-gray-800 text-xs w-auto"
                size="txtJostMedium12Gray800"
              >
                {props?.newproductbadgeTwo}
              </Text>
              <Text
                className="text-blue_gray-800 text-sm w-full"
                size="txtJostMedium14Bluegray800"
              >
                {props?.brandTwo}
              </Text>
              <Text
                className="text-base text-gray-800 w-full"
                size="txtJostRegular16"
              >
                {props?.titleThree}
              </Text>
            </div>
            <Text
              className="text-gray-800 text-lg w-auto"
              size="txtJostSemiBold18"
            >
              {props?.priceFive}
            </Text>
            <div className="flex flex-col gap-1 items-start justify-start w-full">
              <Text
                className="text-gray-800 text-sm w-full"
                size="txtJostRegular14"
              >
                {props?.typefourteenTwo}
              </Text>
              <Input
                name="storetitles_Two"
                placeholder="In-Store Pickup available"
                className="font-jost p-0 placeholder:text-gray-800 sm:pr-5 text-gray-800 text-left text-sm w-full"
                wrapClassName="flex pr-[35px] w-full"
                prefix={
                  <Img
                    className="h-6 mr-1 my-auto"
                    src="images/img_line_icons_instore_pickup.svg"
                    alt="Line Icons/In-store Pickup"
                  />
                }
              ></Input>
            </div>
            <div className="flex flex-row gap-1 items-center justify-start w-auto">
              <List
                className="sm:flex-col flex-row grid grid-cols-5 justify-start w-auto"
                orientation="horizontal"
              >
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-4 w-4"
                    src="images/img_fillediconsstarfull.svg"
                    alt="fillediconsstar"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-4 w-4"
                    src="images/img_fillediconsstarfull.svg"
                    alt="fillediconsstar"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-4 w-4"
                    src="images/img_fillediconsstarfull.svg"
                    alt="fillediconsstar"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-4 w-4"
                    src="images/img_signal.svg"
                    alt="signal"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-4 w-4"
                    src="images/img_fillediconsstarfull_blue_gray_100.svg"
                    alt="fillediconsstar"
                  />
                </div>
              </List>
              <div className="flex flex-row items-start justify-start w-auto">
                <Text
                  className="text-gray-900 text-xs w-auto"
                  size="txtJostMedium12"
                >
                  {props?.five}
                </Text>
                <Text
                  className="text-gray-900 text-xs underline"
                  size="txtJostMedium12"
                >
                  {props?.zeroThree}
                </Text>
                <Text
                  className="text-gray-900 text-xs w-auto"
                  size="txtJostMedium12"
                >
                  {props?.six}
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center pt-2 w-full">
              <Text
                className="text-blue_gray-800 text-center text-xs w-auto"
                size="txtJostMedium12Bluegray800"
              >
                {props?.offerTwo}
              </Text>
            </div>
            <Button
              className="!text-white-A700 cursor-pointer font-jost font-medium text-base text-center w-full"
              shape="round"
              color="blue_gray_800"
              size="xs"
              variant="fill"
            >
              {props?.addToBagTwo}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

ProductListingPagesPLPSearchcarousel.defaultProps = {
  rectangleseventyseven: "images/img_rectangle77.png",
  newproductbadge: "NEW",
  brand: "EKTORP",
  titleOne: "3-seat sofa, Kilanda light beige",
  priceThree: "$10.39",
  typefourteen: "20 Color Options",
  one: "(",
  zeroOne: "0",
  two: ")",
  offer: "Buy 4, Get 20% off",
  addToBag: "Add to Bag",
  rectangleseventysevenOne: "images/img_rectangle77_268x278.png",
  newproductbadgeOne: "NEW",
  brandOne: "Sofaplay",
  titleTwo: "2-seat sofa, Markier Olive Green",
  priceFour: "$10.39",
  typefourteenOne: "20 Color Options",
  three: "(",
  zeroTwo: "0",
  four: ")",
  offerOne: "Buy 4, Get 20% off",
  addToBagOne: "Add to Bag",
  rectangleseventysevenTwo: "images/img_rectangle77_1.png",
  newproductbadgeTwo: "NEW",
  brandTwo: "Sofaplay",
  titleThree: "2-seat sofa, Clay White",
  priceFive: "$10.39",
  typefourteenTwo: "20 Color Options",
  five: "(",
  zeroThree: "0",
  six: ")",
  offerTwo: "Buy 4, Get 20% off",
  addToBagTwo: "Add to Bag",
};

export default ProductListingPagesPLPSearchcarousel;
