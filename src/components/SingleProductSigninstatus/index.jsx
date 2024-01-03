import React from "react";

import { Img, Text } from "components";

const SingleProductSigninstatus = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-1 items-start justify-start w-auto">
          <Text
            className="text-gray-800 text-sm w-auto"
            size="txtJostMedium14Gray800"
          >
            {props?.username}
          </Text>
          <div className="flex flex-row gap-1 items-start justify-start w-auto">
            <Text
              className="text-red-700 text-sm w-auto"
              size="txtJostRegular14Red700"
            >
              {props?.points}
            </Text>
            <Text
              className="text-gray-800 text-sm w-auto"
              size="txtJostRegular14"
            >
              {props?.points1}
            </Text>
          </div>
        </div>
        <Img
          className="h-5 w-5"
          src="images/img_arrowdown_gray_800.svg"
          alt="arrowdown"
        />
      </div>
    </>
  );
};

SingleProductSigninstatus.defaultProps = {
  username: "Hey, User Name",
  points: "0",
  points1: "points",
};

export default SingleProductSigninstatus;
