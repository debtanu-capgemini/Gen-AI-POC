import React from "react";

import { Img, Text } from "components";

const SingleProductBreadcrumbs = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-auto">
          <Text
            className="text-gray-900 text-xs w-auto"
            size="txtJostRegular12Gray900"
          >
            {props?.hometext}
          </Text>
        </div>
        <div className="flex flex-row gap-2 items-center justify-start w-auto">
          <Img
            className="h-3 w-3"
            src="images/img_lineiconsarrow.svg"
            alt="lineiconsarrow"
          />
          <Text
            className="text-gray-900 text-xs w-auto"
            size="txtJostRegular12Gray900"
          >
            {props?.livingroomtext}
          </Text>
        </div>
        <div className="flex flex-row gap-2 items-center justify-start w-auto">
          <Img
            className="h-3 w-3"
            src="images/img_lineiconsarrow.svg"
            alt="lineiconsarrow_One"
          />
          <Text
            className="text-gray-900 text-xs w-auto"
            size="txtJostRegular12Gray900"
          >
            {props?.sofastext}
          </Text>
        </div>
        <div className="flex flex-row gap-2 items-center justify-start w-auto">
          <Img
            className="h-3 w-3"
            src="images/img_lineiconsarrow.svg"
            alt="lineiconsarrow_Two"
          />
          <Text
            className="text-gray-900 text-xs w-auto"
            size="txtJostRegular12Gray900"
          >
            {props?.sofaplaytext}
          </Text>
        </div>
      </div>
    </>
  );
};

SingleProductBreadcrumbs.defaultProps = {
  hometext: "Home",
  livingroomtext: "Living Room",
  sofastext: "Sofas",
  sofaplaytext: "Sofaplay",
};

export default SingleProductBreadcrumbs;
