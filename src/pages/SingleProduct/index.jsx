import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import Footer from "components/Footer";
import SingleProductBreadcrumbs from "components/SingleProductBreadcrumbs";
import SingleProductColumnThree from "components/SingleProductColumnThree";
import SingleProductColumnTwo from "components/SingleProductColumnTwo";
import SingleProductColumnlineiconsarrowThree from "components/SingleProductColumnlineiconsarrowThree";
import SingleProductSigninstatus from "components/SingleProductSigninstatus";

import { CloseSVG } from "../../assets/images";

const sallybuttoncompOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const SingleProductPage = () => {
  const [searchbarvalue, setSearchbarvalue] = React.useState("");

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
                <SingleProductSigninstatus className="flex flex-row gap-[9px] items-start justify-between w-[130px]" />
                <Line className="bg-blue_gray-100 h-11 w-px" />
                <div className="h-9 relative w-9">
                  <Img
                    className="absolute h-9 inset-[0] justify-center m-auto w-9"
                    src="images/img_bag.svg"
                    alt="bag"
                  />
                  <div className="absolute bottom-[-2%] h-[18px] right-[0] w-4">
                    <div className="absolute bg-red-700 h-4 inset-[0] m-auto rounded-[50%] w-4"></div>
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
        <div className="flex flex-col items-start justify-start md:px-10 px-16 sm:px-5 py-6 w-full">
          <SingleProductBreadcrumbs className="flex flex-row gap-2 items-center justify-start py-2 w-auto" />
        </div>
        <div className="bg-white-A700 flex md:flex-col flex-row gap-6 items-start justify-start md:px-10 px-16 sm:px-5 py-6 w-full">
          <SingleProductColumnlineiconsarrowThree className="flex flex-1 flex-col gap-4 h-[650px] md:h-auto items-center justify-start max-w-[755px] w-full" />
          <SingleProductColumnTwo className="flex sm:flex-1 flex-col gap-8 items-start justify-start w-[533px] sm:w-full" />
        </div>
        <div className="bg-white-A700 flex flex-col gap-1 items-start justify-start pb-16 pt-6 md:px-10 px-16 sm:px-5 w-full">
          <div className="flex flex-row flex-wrap gap-1 h-12 md:h-auto items-start justify-center max-w-[816px] w-full">
            <Button
              className="border border-gray-400 border-solid cursor-pointer flex-1 font-medium h-full text-base text-center w-full"
              shape="square"
              color="white_A700"
              size="sm"
              variant="fill"
            >
              Highlights
            </Button>
            <Button
              className="border border-gray-400 border-solid cursor-pointer flex-1 font-medium h-full text-base text-center w-full"
              shape="square"
              color="gray_100"
              size="sm"
              variant="fill"
            >
              Maintenance
            </Button>
          </div>
          <SingleProductColumnThree className="bg-white-A700 border border-gray-400 border-solid flex flex-col gap-6 items-start justify-start max-w-[1312px] mx-auto p-10 md:px-5 w-full" />
        </div>
        <Footer className="flex gap-8 items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default SingleProductPage;
