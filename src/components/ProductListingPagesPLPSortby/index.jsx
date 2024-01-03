import React from "react";

import { Img, Text } from "components";

const ProductListingPagesPLPSortby = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-gray-800 text-sm w-auto"
          size="txtJostMedium14Gray800"
        >
          {props?.sorttext}
        </Text>
        <div className="flex flex-row gap-4 items-center justify-between w-[126px]">
          <Text
            className="text-gray-800 text-sm w-auto"
            size="txtJostMedium14Gray800"
          >
            {props?.topsellers}
          </Text>
          <div className="flex flex-col h-5 items-center justify-start w-5">
            <Img
              className="h-5 w-5"
              src="images/img_arrowdown_gray_900_01.svg"
              alt="arrowdown"
            />
          </div>
        </div>
      </div>
    </>
  );
};

ProductListingPagesPLPSortby.defaultProps = {
  sorttext: "Sort By:",
  topsellers: "Top Sellers",
};

export default ProductListingPagesPLPSortby;
