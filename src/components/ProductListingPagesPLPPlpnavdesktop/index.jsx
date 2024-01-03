import React from "react";

import { Img, Text } from "components";

const ProductListingPagesPLPPlpnavdesktop = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-end justify-center w-auto">
            <div className="flex flex-col items-start justify-start w-auto">
              <Text
                className="text-center text-gray-900 text-sm w-auto"
                size="txtJostMedium14Gray900"
              >
                {props?.labelNine}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start sm:px-5 px-6 w-auto">
          <div className="flex flex-col items-end justify-center w-auto">
            <div className="flex flex-col items-start justify-start w-auto">
              <Text
                className="text-center text-gray-900 text-xs w-auto"
                size="txtJostMedium12"
              >
                {props?.labelTen}
              </Text>
            </div>
          </div>
        </div>
        <Img
          className="h-px w-full"
          src="images/img_divider.svg"
          alt="divider"
        />
      </div>
    </>
  );
};

ProductListingPagesPLPPlpnavdesktop.defaultProps = {
  labelNine: "Sofas",
  labelTen: "Shop All Sofas",
};

export default ProductListingPagesPLPPlpnavdesktop;
