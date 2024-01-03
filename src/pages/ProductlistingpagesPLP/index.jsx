import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import Footer from "components/Footer";
import PlpCards from "components/PlpCards";
import ProductListingPagesPLPFilterdesktop from "components/ProductListingPagesPLPFilterdesktop";
import ProductListingPagesPLPPlpnavdesktop from "components/ProductListingPagesPLPPlpnavdesktop";
import ProductListingPagesPLPSearchcarousel from "components/ProductListingPagesPLPSearchcarousel";
import ProductListingPagesPLPSigninstatus from "components/ProductListingPagesPLPSigninstatus";
import ProductListingPagesPLPSortby from "components/ProductListingPagesPLPSortby";

import { CloseSVG } from "../../assets/images";

const sallybuttoncompOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ProductlistingpagesPLPPage = () => {
  const [searchbarvalue, setSearchbarvalue] = React.useState("");
  const productListingPagesPlpFilterdesktopPropList = [
    {
      price: "Blue (31)",
      priceTwo: "Black (51)",
      priceOne: "White (10)",
      title: "Color",
    },
    {
      price: "EKTORP (3)",
      priceTwo: "Skilt (3)",
      priceOne: "Sofaplay (4)",
      title: "Brand",
    },
    {
      price: "2-seat sofa (50)",
      priceTwo: "L Shaped sofa (10)",
      priceOne: "3-seat sofa (20)",
      title: "Product Type",
    },
  ];
  const [frame233value, setFrame233value] = React.useState("");
  const [frame233value1, setFrame233value1] = React.useState("");
  const [frame233value2, setFrame233value2] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-jost items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <header className="flex flex-col items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between pb-4 pt-6 md:px-10 px-16 sm:px-5 w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-800 text-center w-[129px]"
              size="txtJostRomanBold40"
            >
              FURLY.
            </Text>
            <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between max-w-[978px] w-full">
              <Input
                name="searchbar"
                placeholder="Search"
                value={searchbarvalue}
                onChange={(e) => setSearchbarvalue(e)}
                className="!placeholder:text-gray-600 !text-gray-600 p-0 text-left text-sm w-full"
                wrapClassName="border border-gray-400 border-solid flex flex-1 max-w-[644px] w-full"
                suffix={
                  searchbarvalue?.length > 0 ? (
                    <CloseSVG
                      className="cursor-pointer h-6 ml-[35px] my-auto"
                      onClick={() => setSearchbarvalue("")}
                      fillColor="#6d6d6d"
                      height={24}
                      width={24}
                      viewBox="0 0 24 24"
                    />
                  ) : (
                    <Img
                      className="cursor-pointer h-6 ml-[35px] my-auto"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  )
                }
                shape="round"
                color="white_A700"
                size="xs"
                variant="fill"
              ></Input>
              <div className="flex flex-row gap-4 items-center justify-start w-auto">
                <ProductListingPagesPLPSigninstatus className="flex flex-col items-start justify-start w-[130px]" />
                <Line className="bg-blue_gray-100 h-10 w-px" />
                <div className="h-9 relative w-9">
                  <Img
                    className="absolute h-9 inset-[0] justify-center m-auto w-9"
                    src="images/img_bag.svg"
                    alt="bag"
                  />
                  <div className="absolute bottom-[-2%] h-[18px] right-[0] w-4">
                    <div className="absolute bg-blue_gray-800 h-4 inset-[0] m-auto rounded-[50%] w-4"></div>
                    <Text
                      className="absolute h-full inset-[0] m-auto text-center text-white-A700 text-xs w-max"
                      size="txtJostRegular12"
                    >
                      0
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 border-b border-blue_gray-100 border-solid flex flex-1 sm:flex-col flex-row md:gap-10 h-10 md:h-auto items-start justify-between pt-2 md:px-10 px-16 sm:px-5 w-full">
            <div className="flex flex-col h-8 md:h-auto items-start justify-start">
              <div className="flex flex-col items-start justify-start px-2 w-auto">
                <Text
                  className="text-center text-gray-900_01 text-sm w-auto"
                  size="txtJostMedium14"
                >
                  Deals
                </Text>
              </div>
            </div>
            <div className="flex flex-col h-8 md:h-auto items-start justify-start">
              <div className="flex flex-col items-start justify-start px-2 w-auto">
                <Text
                  className="text-center text-gray-900_01 text-sm w-auto"
                  size="txtJostMedium14"
                >
                  Living Room
                </Text>
              </div>
            </div>
            <div className="flex flex-col h-8 md:h-auto items-start justify-start">
              <div className="flex flex-col items-start justify-start px-2 w-auto">
                <Text
                  className="text-center text-gray-900_01 text-sm w-auto"
                  size="txtJostMedium14"
                >
                  Bedroom
                </Text>
              </div>
            </div>
            <div className="flex flex-col h-8 md:h-auto items-start justify-center">
              <div className="flex flex-col items-start justify-start px-2 w-auto">
                <Text
                  className="text-center text-gray-900_01 text-sm w-auto"
                  size="txtJostMedium14"
                >
                  Dining Room
                </Text>
              </div>
            </div>
            <div className="flex flex-col h-8 md:h-auto items-start justify-center">
              <div className="flex flex-col items-start justify-start px-2 w-auto">
                <Text
                  className="text-center text-gray-900_01 text-sm w-auto"
                  size="txtJostMedium14"
                >
                  Kitchen
                </Text>
              </div>
            </div>
            <div className="flex flex-col h-8 md:h-auto items-start justify-center">
              <div className="flex flex-col items-start justify-start px-2 w-auto">
                <Text
                  className="text-center text-gray-900_01 text-sm w-auto"
                  size="txtJostMedium14"
                >
                  Study Room
                </Text>
              </div>
            </div>
            <div className="flex flex-col h-8 md:h-auto items-start justify-center">
              <div className="flex flex-col items-start justify-start px-2 w-auto">
                <Text
                  className="text-center text-gray-900_01 text-sm w-auto"
                  size="txtJostMedium14"
                >
                  Outdoor
                </Text>
              </div>
            </div>
            <div className="flex flex-col h-8 md:h-auto items-start justify-center">
              <div className="flex flex-col items-start justify-start px-2 w-auto">
                <Text
                  className="text-center text-gray-900_01 text-sm w-auto"
                  size="txtJostMedium14"
                >
                  Terrace
                </Text>
              </div>
            </div>
          </div>
        </header>
        <div className="flex md:flex-col flex-row gap-6 items-start justify-start pb-16 pt-10 md:px-10 px-16 sm:px-5 w-full">
          <div className="flex flex-col gap-6 items-start justify-start w-[310px]">
            <ProductListingPagesPLPPlpnavdesktop className="flex flex-col gap-2 items-start justify-start w-full" />
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start pb-4 pt-2 w-full">
                <Text
                  className="text-base text-gray-800 w-auto"
                  size="txtJostSemiBold16"
                >
                  Filter By:
                </Text>
              </div>
              <ProductListingPagesPLPFilterdesktop
                className="bg-white-A700 border border-gray-400 border-solid flex flex-col gap-4 items-start justify-start p-4 w-full"
                min="min"
                to="to"
                max="max"
                labelEleven="Apply"
              />
              <List
                className="flex flex-col gap-px items-center w-full"
                orientation="vertical"
              >
                {productListingPagesPlpFilterdesktopPropList.map(
                  (props, index) => (
                    <React.Fragment
                      key={`ProductListingPagesPLPFilterdesktop${index}`}
                    >
                      <ProductListingPagesPLPFilterdesktop
                        className="bg-white-A700 border border-gray-400 border-solid flex flex-1 flex-col gap-4 items-start justify-start p-4 w-full"
                        {...props}
                      />
                    </React.Fragment>
                  ),
                )}
              </List>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-6 items-center justify-center w-full">
            <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
              <Text
                className="text-gray-800 text-sm w-auto"
                size="txtJostMedium14Gray800"
              >
                1720 Results
              </Text>
              <ProductListingPagesPLPSortby className="flex flex-row gap-2 items-center justify-end w-[184px]" />
            </div>
            <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-full">
              <PlpCards className="bg-white-A700 flex flex-1 flex-col h-[596px] md:h-auto items-center justify-start pb-6 pt-4 px-4 rounded-[5px] shadow-bs w-full" />
              <PlpCards className="bg-white-A700 flex flex-1 flex-col h-[596px] md:h-auto items-center justify-start pb-6 pt-4 px-4 rounded-[5px] shadow-bs w-full" />
              <PlpCards className="bg-white-A700 flex flex-1 flex-col h-[596px] md:h-auto items-center justify-start pb-6 pt-4 px-4 rounded-[5px] shadow-bs w-full" />
            </div>
            <ProductListingPagesPLPSearchcarousel
              className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-full"
              rectangleseventyseven="images/img_rectangle77_2.png"
              brand="Skilt"
              titleOne="2-seat sofa, Markier Black"
            />
            <ProductListingPagesPLPSearchcarousel
              className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-full"
              rectangleseventyseven="images/img_rectangle77_5.png"
              titleOne="2-seat sofa, Kilanda Green"
            />
            <div className="flex flex-col items-end justify-center p-6 sm:px-5 w-auto">
              <div className="flex flex-col items-start justify-start w-auto">
                <Text
                  className="text-center text-gray-900 text-xl tracking-[0.03px] underline w-auto"
                  size="txtJostRomanMedium20"
                >
                  Load More
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex gap-8 items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default ProductlistingpagesPLPPage;
