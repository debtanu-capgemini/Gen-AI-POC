import React from "react";

import { Button, Img, Input, SelectBox, Text } from "components";

const sallybuttoncompOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <ul className="flex flex-col items-center justify-center w-full common-column-list">
          <li>
            <div className="bg-blue_gray-800 flex md:flex-col flex-row md:gap-10 items-center justify-between md:px-10 px-16 sm:px-5 py-6 md:w-full">
              <div className="flex flex-col gap-1 items-center justify-center w-[304px]">
                <Text
                  className="text-base text-center text-white-A700_01 w-full"
                  size="txtJostRegular16WhiteA70001"
                >
                  Get 15% off your next online order
                </Text>
                <div className="flex flex-col items-end justify-center w-auto">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-base text-center text-white-A700_01 underline w-auto"
                      size="txtJostMedium16WhiteA70001"
                    >
                      Sign Up for text messages now
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[336px] sm:w-full">
                <Input
                  name="frameEightyFour"
                  placeholder="Sign up for email specials"
                  className="!placeholder:text-gray-600 !text-gray-600 font-jost p-0 text-left text-sm w-full"
                  wrapClassName="border border-gray-400 border-solid flex rounded-sm w-full"
                  suffix={
                    <Img
                      className="mt-auto mb-px h-5 ml-[35px]"
                      src="images/img_lock.svg"
                      alt="lock"
                    />
                  }
                  color="white_A700"
                  size="xs"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-row gap-6 items-start justify-between p-2 w-60">
                <div className="flex flex-col h-6 items-center justify-start w-6">
                  <Img
                    className="h-6 w-6"
                    src="images/img_fillediconstiktok.svg"
                    alt="fillediconstikt"
                  />
                </div>
                <div className="flex flex-col h-6 items-center justify-start w-6">
                  <Img
                    className="h-6 w-6"
                    src="images/img_info.svg"
                    alt="info"
                  />
                </div>
                <div className="flex flex-col h-6 items-center justify-start w-6">
                  <div className="flex flex-col h-6 items-center justify-start p-[3px] w-6">
                    <Img
                      className="h-[18px]"
                      src="images/img_facebook.svg"
                      alt="facebook"
                    />
                  </div>
                </div>
                <div className="flex flex-col h-6 items-center justify-start w-6">
                  <Img
                    className="h-6 w-6"
                    src="images/img_fillediconspinterest.svg"
                    alt="fillediconspint"
                  />
                </div>
                <div className="flex flex-col h-6 items-center justify-start w-6">
                  <div className="flex flex-col h-6 items-center justify-start p-0.5 w-6">
                    <Img
                      className="h-4 my-0.5"
                      src="images/img_trash.svg"
                      alt="trash_One"
                    />
                  </div>
                </div>
                <div className="flex flex-col h-6 items-center justify-start w-6">
                  <div className="flex flex-col h-6 items-center justify-start p-0.5 w-6">
                    <Img
                      className="h-[15px] my-0.5"
                      src="images/img_youtube.svg"
                      alt="youtube"
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[98px] items-start justify-center mt-[31px] md:px-10 px-44 sm:px-5 md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-[199px]">
                <Text
                  className="text-base text-gray-900_01 w-auto"
                  size="txtJostMedium16Gray90001"
                >
                  Help
                </Text>
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-end justify-center w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-sm w-auto"
                          size="txtJostRomanRegular14"
                        >
                          FAQ
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-end justify-center w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-sm w-auto"
                          size="txtJostRomanRegular14"
                        >
                          Orders
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-end justify-center w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-sm w-auto"
                          size="txtJostRomanRegular14"
                        >
                          Check Order Status
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-end justify-center w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-sm w-auto"
                          size="txtJostRomanRegular14"
                        >
                          Shopping Information
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-end justify-center w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-sm w-auto"
                          size="txtJostRomanRegular14"
                        >
                          Shipping Information
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-end justify-center w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-sm w-auto"
                          size="txtJostRomanRegular14"
                        >
                          Returns
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-end justify-center w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-sm w-auto"
                          size="txtJostRomanRegular14"
                        >
                          Contact Us
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-end justify-center w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-sm w-auto"
                          size="txtJostRomanRegular14"
                        >
                          Find a Store
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-[199px]">
                <Text
                  className="text-base text-gray-900_01 w-auto"
                  size="txtJostMedium16Gray90001"
                >
                  Popular
                </Text>
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-end justify-center w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-sm w-auto"
                          size="txtJostRomanRegular14"
                        >
                          Skilt Beds
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-end justify-center w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-sm w-auto"
                          size="txtJostRomanRegular14"
                        >
                          Century Furnitures
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-end justify-center w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-sm w-auto"
                          size="txtJostRomanRegular14"
                        >
                          Kior Sofas
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-end justify-center w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-sm w-auto"
                          size="txtJostRomanRegular14"
                        >
                          Nambiar Kitchens
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-end justify-center w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-sm w-auto"
                          size="txtJostRomanRegular14"
                        >
                          Sofaplay Sofas{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-end justify-center w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-sm w-auto"
                          size="txtJostRomanRegular14"
                        >
                          EKTORP Wooden Furniture
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-end justify-center w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-sm w-auto"
                          size="txtJostRomanRegular14"
                        >
                          Pro Member Pricing
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-[199px]">
                <Text
                  className="text-base text-gray-900_01 w-auto"
                  size="txtJostMedium16Gray90001"
                >
                  Shop
                </Text>
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-end justify-center w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-sm w-auto"
                          size="txtJostRomanRegular14"
                        >
                          Beds
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-end justify-center w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-sm w-auto"
                          size="txtJostRomanRegular14"
                        >
                          Sofas
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-end justify-center w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-sm w-auto"
                          size="txtJostRomanRegular14"
                        >
                          Chairs
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-end justify-center w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-sm w-auto"
                          size="txtJostRomanRegular14"
                        >
                          Dining Furniture
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-end justify-center w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-sm w-auto"
                          size="txtJostRomanRegular14"
                        >
                          Wardrobe
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-end justify-center w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-sm w-auto"
                          size="txtJostRomanRegular14"
                        >
                          Bath Furnitures
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-end justify-center w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-sm w-auto"
                          size="txtJostRomanRegular14"
                        >
                          Outdoor Furnitures
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-[199px]">
                <Text
                  className="text-base text-gray-900_01 w-auto"
                  size="txtJostMedium16Gray90001"
                >
                  About
                </Text>
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-end justify-center w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-sm w-auto"
                          size="txtJostRomanRegular14"
                        >
                          Business with Furly
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-end justify-center w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-sm w-auto"
                          size="txtJostRomanRegular14"
                        >
                          New Vendor Information
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-end justify-center w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-sm w-auto"
                          size="txtJostRomanRegular14"
                        >
                          Vendor Compliance Guide
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-end justify-center w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-sm w-auto"
                          size="txtJostRomanRegular14"
                        >
                          Real Estate Information
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-end justify-center w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-sm w-auto"
                          size="txtJostRomanRegular14"
                        >
                          Affiliate Program
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-end justify-center w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-sm w-auto"
                          size="txtJostRomanRegular14"
                        >
                          Careers
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-end justify-center w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-sm w-auto"
                          size="txtJostRomanRegular14"
                        >
                          Investor Relations
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-end justify-center w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-sm w-auto"
                          size="txtJostRomanRegular14"
                        >
                          History
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Img
              className="h-px mt-8 w-full"
              src="images/img_divider.svg"
              alt="divider"
            />
          </li>
          <li>
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-8 md:px-10 px-16 sm:px-5 md:w-full">
              <Img
                className="h-12 w-12"
                src="images/img_accessibilityicon.svg"
                alt="accessibilityic"
              />
              <div className="flex flex-col gap-2 items-end justify-start w-auto sm:w-full">
                <div className="flex sm:flex-col flex-row gap-8 items-start justify-end w-auto sm:w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-end justify-center w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-sm w-auto"
                          size="txtJostRomanRegular14"
                        >
                          Privacy
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-end justify-center w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-sm w-auto"
                          size="txtJostRomanRegular14"
                        >
                          Terms of Use
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-end justify-center w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-sm w-auto"
                          size="txtJostRomanRegular14"
                        >
                          Coupon Policy
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-end justify-center w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-sm w-auto"
                          size="txtJostRomanRegular14"
                        >
                          SMS Terms & Conditions
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-8 items-start justify-end w-auto sm:w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-end justify-center w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-sm w-auto"
                          size="txtJostRomanRegular14"
                        >
                          Accessiblity Statement
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-row gap-1 items-end justify-center w-auto">
                      <Img
                        className="h-5 w-5"
                        src="images/img_iconleft.svg"
                        alt="iconleft"
                      />
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-sm w-auto"
                          size="txtJostRomanRegular14"
                        >
                          Your Privacy Choices
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-end justify-center w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-sm w-auto"
                          size="txtJostRomanRegular14"
                        >
                          Rewards Terms & Conditions
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="mt-3 relative md:w-full">
              <Button
                className="absolute flex h-10 items-center justify-center right-[4%] shadow-bs top-[0] w-10"
                shape="circle"
                color="white_A700"
                size="xs"
                variant="fill"
              >
                <Img
                  className="h-6"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </Button>
              <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between max-w-[1440px] mt-auto mx-auto pl-16 pr-40 md:px-10 sm:px-5 relative w-full">
                <div className="bg-gray-100 flex flex-row gap-1 items-start justify-center sm:px-5 px-6 py-4 w-auto">
                  <Text
                    className="text-base text-gray-800 w-auto"
                    size="txtJostRegular16"
                  >
                    Shop now. Pay with
                  </Text>
                  <Img
                    className="h-6 rounded w-[60px]"
                    src="images/img_contrast.svg"
                    alt="contrast"
                  />
                  <Text
                    className="text-base text-gray-900 underline w-auto"
                    size="txtJostMedium16Gray900"
                  >
                    Learn More
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-end shadow-bs w-auto">
                  <div className="flex flex-col items-center justify-end w-auto sm:w-full">
                    <SelectBox
                      className="!text-gray-800 font-jost font-medium text-base text-center w-full"
                      placeholderClassName="!text-gray-800"
                      indicator={
                        <Img
                          className="h-5 w-5"
                          src="images/img_arrowdown_gray_900_01.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="sallybuttoncomp"
                      options={sallybuttoncompOptionsList}
                      isSearchable={false}
                      placeholder="Deals"
                      shape="round"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start shadow-bs w-auto">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[163px] rounded-tl-sm rounded-tr-sm"
                      rightIcon={
                        <Img
                          className="h-5 mt-px mb-0.5 ml-1"
                          src="images/img_filled_icons_chatbubble.svg"
                          alt="Filled Icons/Chat-Bubble"
                        />
                      }
                      color="blue_gray_800"
                      size="xs"
                      variant="fill"
                    >
                      <div className="!text-white-A700 font-jost font-medium text-base text-center">
                        Chat with us!
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
