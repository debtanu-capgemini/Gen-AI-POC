import React from "react";

import { Img, List } from "components";

const SingleProductColumnlineiconsarrowThree = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex flex-col h-full items-start justify-start p-2 rounded-[5px] shadow-bs w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Img
                className="h-[514px] md:h-auto object-cover w-full"
                src="images/img_rectangle77_268x278.png"
                alt="rectangleSeventySeven"
              />
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-4 h-full items-center justify-center w-full">
          <Img
            className="h-6 w-6"
            src="images/img_lineiconsarrow_gray_900_01.svg"
            alt="lineiconsarrow_Three"
          />
          <List
            className="md:flex-1 sm:flex-col flex-row gap-4 grid sm:grid-cols-1 grid-cols-5 w-[78%] md:w-full"
            orientation="horizontal"
          >
            <div className="bg-white-A700 border border-gray-800 border-solid flex flex-col h-full items-center justify-center p-1 rounded-[5px] w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[88px] md:h-auto object-cover w-full"
                    src="images/img_rectangle77_268x278.png"
                    alt="rectangleSeventySeven"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col h-full items-center justify-center p-1 rounded-[5px] w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[88px] md:h-auto object-cover w-full"
                    src="images/img_rectangle77_88x96.png"
                    alt="rectangleSeventySeven"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col h-full items-center justify-center p-1 rounded-[5px] w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[88px] md:h-auto object-cover w-full"
                    src="images/img_rectangle77_8.png"
                    alt="rectangleSeventySeven"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col h-full items-center justify-center p-1 rounded-[5px] w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[88px] md:h-auto object-cover w-full"
                    src="images/img_rectangle77_9.png"
                    alt="rectangleSeventySeven"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-400 border-solid flex flex-col h-full items-center justify-center p-1 rounded-[5px] w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[88px] md:h-auto object-cover w-full"
                    src="images/img_rectangle77_10.png"
                    alt="rectangleSeventySeven"
                  />
                </div>
              </div>
            </div>
          </List>
          <Img
            className="h-6 w-[22px]"
            src="images/img_lineiconsarrow_gray_900_01_24x22.svg"
            alt="lineiconsarrow_Four"
          />
        </div>
      </div>
    </>
  );
};

SingleProductColumnlineiconsarrowThree.defaultProps = {};

export default SingleProductColumnlineiconsarrowThree;
