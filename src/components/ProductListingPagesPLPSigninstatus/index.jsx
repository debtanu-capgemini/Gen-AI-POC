import React from "react";

import { Text } from "components";

const ProductListingPagesPLPSigninstatus = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text className="text-gray-800 text-sm w-full" size="txtJostRegular14">
          {props?.greetingtext}
        </Text>
        <div className="flex flex-col items-end justify-start w-full">
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-center text-gray-900 text-sm underline w-auto"
              size="txtJostMedium14Gray900"
            >
              {props?.signintext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

ProductListingPagesPLPSigninstatus.defaultProps = {
  greetingtext: "Oh hey, Gorgeous!",
  signintext: "Sign In or Register",
};

export default ProductListingPagesPLPSigninstatus;
