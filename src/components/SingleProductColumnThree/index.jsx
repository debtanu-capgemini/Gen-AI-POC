import React from "react";

import { Text } from "components";

const SingleProductColumnThree = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-2 items-start justify-start w-full">
          <Text
            className="text-gray-800 text-lg w-full"
            size="txtJostSemiBold18"
          >
            {props?.textelement}
          </Text>
          <Text
            className="leading-[20.00px] max-w-[1232px] md:max-w-full text-gray-800 text-sm"
            size="txtJostRegular14"
          >
            {props?.descriptiontext}
          </Text>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start w-full">
          <Text
            className="text-gray-800 text-lg w-full"
            size="txtJostSemiBold18"
          >
            {props?.specialtext}
          </Text>
          <Text
            className="leading-[20.00px] max-w-[1232px] md:max-w-full text-gray-800 text-sm"
            size="txtJostRegular14"
          >
            {props?.specialdescriptiontext}
          </Text>
        </div>
      </div>
    </>
  );
};

SingleProductColumnThree.defaultProps = {
  textelement: "What is it?",
  descriptiontext: (
    <>
      The Kiki Sofa is soft, comfortable, and roomy. Made in a contemporary
      design it’s just the modern chic sofa that you need to liven up your
      space. Covered in lavish upholstery and made with a solid, sturdy wood
      frame, this sofa is built to last. The wood used is termite and
      mould-resistant. It comes in two and three-seater variants and will fit
      into any home with ease. Its sole mission is to provide you with the best
      comfort as you plonk down on its padded seat cushions. It&#39;s
      comfortable and affordable, and it doesn&#39;t skimp on style. There are a
      variety of colour choices available: a graphite grey and earth brown that
      will suit most environments and a sapling green and lava orange if
      you&#39;re looking for a statement piece that pops. With four colour
      options, you&#39;re sure to find one that suits your space. Available in
      two, and three-seater combos, you can pick a sofa that will suit any home
      or decor.
    </>
  ),
  specialtext: "What makes it special?",
  specialdescriptiontext: (
    <>
      Quality Verfied
      <br />
      High Density Foam
      <br />
      10 Day Replacement
      <br />
      Bucked Design - Compact Yet Comfortable
      <br />
      High Quality 230 GSM Polyester Fabric
      <br />
      Comfort Level - Medium Firm
      <br />
      Solid Wood Frame for long Durability
    </>
  ),
};

export default SingleProductColumnThree;
