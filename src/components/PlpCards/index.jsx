import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";

const PlpCards = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Img
              className="h-[268px] md:h-auto object-cover w-full"
              src="images/img_rectangle77.png"
              alt="rectangleSeventySeven"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 h-full items-start justify-end w-full">
          <div className="flex flex-col gap-1 items-start justify-start w-full">
            <Text
              className="bg-deep_orange-50 justify-center px-1 rounded-sm text-center text-gray-800 text-xs w-auto"
              size="txtJostMedium12Gray800"
            >
              NEW
            </Text>
            <Text
              className="common-pointer text-blue_gray-800 text-sm w-full"
              size="txtJostMedium14Bluegray800"
              onClick={() => navigate("/singleproduct")}
            >
              EKTORP
            </Text>
            <Text
              className="text-base text-gray-800 w-full"
              size="txtJostRegular16"
            >
              3-seat sofa, Kilanda light beige
            </Text>
          </div>
          <Text
            className="text-gray-800 text-lg w-auto"
            size="txtJostSemiBold18"
          >
            $10.39
          </Text>
          <div className="flex flex-col gap-1 items-start justify-start w-full">
            <Text
              className="text-gray-800 text-sm w-full"
              size="txtJostRegular14"
            >
              20 Color Options
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
                (
              </Text>
              <Text
                className="text-gray-900 text-xs underline"
                size="txtJostMedium12"
              >
                0
              </Text>
              <Text
                className="text-gray-900 text-xs w-auto"
                size="txtJostMedium12"
              >
                )
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center pt-2 w-full">
            <Text
              className="text-blue_gray-800 text-center text-xs w-auto"
              size="txtJostMedium12Bluegray800"
            >
              Buy 4, Get 20% off
            </Text>
          </div>
          <Button className="bg-blue_gray-800 cursor-pointer font-jost font-medium py-2 rounded-[20px] text-base text-center text-white-A700 w-full">
            Add to Bag
          </Button>
        </div>
      </div>
    </>
  );
};

PlpCards.defaultProps = {};

export default PlpCards;
