import React from "react";

import { Button, Img, List, Text } from "components";

const SingleProductColumnTwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-6 items-start justify-start w-full">
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="bg-deep_orange-50 justify-center px-1 rounded-sm text-center text-gray-800 text-xs w-auto"
                  size="txtJostMedium12Gray800"
                >
                  {props?.newproductbadge}
                </Text>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-base text-blue_gray-800 text-center underline w-auto"
                      size="txtJostMedium16"
                    >
                      {props?.productlabel}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-8 items-center justify-start w-8">
                <Img
                  className="h-8 w-8"
                  src="images/img_favorite.svg"
                  alt="favorite"
                />
              </div>
            </div>
            <Text
              className="sm:text-[19px] md:text-[21px] text-[23px] text-gray-900_01 w-full"
              size="txtJostSemiBold23"
            >
              {props?.highlightcolor}
            </Text>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <Text
              className="text-gray-900_01 text-xl w-full"
              size="txtJostSemiBold20"
            >
              {props?.price}
            </Text>
            <div className="flex flex-row gap-2 items-start justify-start w-full">
              <div className="flex flex-row items-start justify-start w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_fillediconsstarfull_gray_900_01.svg"
                  alt="fillediconsstar"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_fillediconsstarfull_gray_900_01.svg"
                  alt="fillediconsstar_One"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_fillediconsstarfull_gray_900_01.svg"
                  alt="fillediconsstar_Two"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_fillediconsstarfull_gray_900_01.svg"
                  alt="fillediconsstar_Three"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_signal_gray_900_01.svg"
                  alt="signal"
                />
              </div>
              <div className="flex flex-col h-6 md:h-auto items-start justify-start">
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-center text-gray-900 text-sm underline w-auto"
                    size="txtJostMedium14Gray900"
                  >
                    {props?.labelNine}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <List
                className="sm:flex-col flex-row gap-2 grid grid-cols-4 justify-start p-0.5 w-auto"
                orientation="horizontal"
              >
                <div className="bg-white-A700 flex flex-col h-12 md:h-auto items-start justify-start w-full">
                  <div className="bg-white-A700 flex flex-col h-[46px] items-center justify-start w-[46px]">
                    <div className="bg-blue_gray-800_01 h-[46px] w-[46px]"></div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col h-12 md:h-auto items-start justify-start w-full">
                  <div className="bg-white-A700 flex flex-col h-[46px] items-center justify-start w-[46px]">
                    <div className="bg-gray-200 h-[46px] w-[46px]"></div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col h-12 md:h-auto items-start justify-start w-full">
                  <div className="bg-white-A700 flex flex-col h-[46px] items-center justify-start w-[46px]">
                    <div className="bg-gray-900 h-[46px] w-[46px]"></div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col h-12 md:h-auto items-start justify-start w-full">
                  <div className="bg-white-A700 flex flex-col h-[46px] items-center justify-start w-[46px]">
                    <div className="bg-cyan-800 h-[46px] w-[46px]"></div>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-start justify-start w-full">
          <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-full">
            <div className="border border-gray-400 border-solid flex flex-row gap-2 h-10 md:h-auto items-center justify-center p-2 rounded-sm w-[104px]">
              <Img
                className="h-4 w-4"
                src="images/img_lineiconsminus.svg"
                alt="lineiconsminus"
              />
              <Text
                className="flex-1 text-base text-center text-gray-800 w-auto"
                size="txtJostMedium16Gray800"
              >
                {props?.quantity}
              </Text>
              <Img
                className="h-4 w-4"
                src="images/img_lineiconsplus.svg"
                alt="lineiconsplus"
              />
            </div>
            <Button
              className="!text-white-A700 cursor-pointer font-jost font-medium text-base text-center w-[405px]"
              shape="round"
              color="blue_gray_800"
              size="xs"
              variant="fill"
            >
              {props?.addtobagbutton}
            </Button>
          </div>
          <div className="flex flex-row gap-1 items-start justify-end w-auto">
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <div className="border border-gray-600 border-solid h-4 rounded-sm w-4"></div>
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-gray-800 text-xs w-auto"
                  size="txtJostRegular12Gray800"
                >
                  {props?.protectionplancheckbox}
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-auto">
              <div className="flex flex-col items-start justify-start w-auto">
                <Text
                  className="text-center text-gray-900 text-xs underline w-auto"
                  size="txtJostMedium12"
                >
                  {props?.detailslabel}
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex sm:flex-col flex-row gap-2 items-start justify-start w-full">
            <div className="bg-white-A700 border border-gray-800 border-solid h-[104px] md:h-[88px] relative rounded-[5px] w-full">
              <Img
                className="h-[25px] ml-auto w-[25px]"
                src="images/img_selected.svg"
                alt="selected"
              />
              <div className="absolute flex flex-1 flex-col h-full inset-[0] items-center justify-start m-auto rounded-[5px] w-full">
                <div className="flex flex-col gap-1 items-center justify-start pt-2 w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bag_gray_800.svg"
                    alt="bag_One"
                  />
                  <Text
                    className="text-base text-center text-gray-800 w-full"
                    size="txtJostSemiBold16"
                  >
                    {props?.instorepickup}
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col h-[52px] md:h-auto items-center justify-start py-2 w-full">
                    <Text
                      className="text-center text-green-800 text-xs w-auto"
                      size="txtJostMedium12Green800"
                    >
                      {props?.instorepickupOne}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-400 border-solid flex flex-1 flex-col items-center justify-start rounded-[5px] w-full">
              <div className="flex flex-col gap-1 items-center justify-start pt-2 w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_lineiconsinstore.svg"
                  alt="lineiconsinstor"
                />
                <Text
                  className="text-base text-center text-gray-800 w-full"
                  size="txtJostSemiBold16"
                >
                  {props?.instorepickupTwo}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col h-[52px] md:h-auto items-center justify-start py-2 w-full">
                  <Text
                    className="text-center text-green-800 text-xs w-auto"
                    size="txtJostMedium12Green800"
                  >
                    {props?.instorepickupThree}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <Img
              className="h-5 w-full"
              src="images/img_sliderindicator.svg"
              alt="sliderindicator"
            />
            <Text
              className="text-base text-gray-800 w-full"
              size="txtJostSemiBold16"
            >
              {props?.deliverto}
            </Text>
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="leading-[24.00px] max-w-[192px] md:max-w-full text-base text-gray-800"
                size="txtJostRegular16"
              >
                {props?.deliveryaddress}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-start justify-start w-full">
          <Text
            className="text-base text-center text-gray-900_01 w-auto"
            size="txtJostSemiBold16Gray90001"
          >
            {props?.sharethisfindlabel}
          </Text>
          <div className="flex flex-row gap-2 items-center justify-start w-auto">
            <Img className="h-6 w-6" src="images/img_inbox.svg" alt="inbox" />
            <Img
              className="h-6 w-6"
              src="images/img_trash_gray_900_01.svg"
              alt="trash"
            />
            <Img
              className="h-6 w-6"
              src="images/img_pinterest.svg"
              alt="pinterest"
            />
            <Img className="h-6 w-6" src="images/img_mail.svg" alt="mail" />
          </div>
        </div>
      </div>
    </>
  );
};

SingleProductColumnTwo.defaultProps = {
  newproductbadge: "NEW",
  productlabel: "Sofaplay",
  highlightcolor: "2-seat sofa, Markier Olive Green",
  price: "$120.4",
  labelNine: "(1572)",
  quantity: "1",
  addtobagbutton: "Add to Bag",
  protectionplancheckbox: "Add Protection Plan for $20.00",
  detailslabel: "Details",
  instorepickup: "Ship to Me",
  instorepickupOne: "Available",
  instorepickupTwo: "In-Store Pickup",
  instorepickupThree: "FREE",
  deliverto: "Deliver to:",
  deliveryaddress: "215 Sunset Drive Wappingers Falls NY 12590",
  sharethisfindlabel: "Share this find",
};

export default SingleProductColumnTwo;
