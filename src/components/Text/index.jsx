import React from "react";

const sizeClasses = {
  txtJostMedium14Gray800: "font-jost font-medium",
  txtJostSemiBold23: "font-jost font-semibold",
  txtJostRegular14Red700: "font-jost font-normal",
  txtJostMedium16WhiteA70001: "font-jost font-medium",
  txtJostMedium16: "font-jost font-medium",
  txtJostMedium16Gray90001: "font-jost font-medium",
  txtJostSemiBold16Gray90001: "font-jost font-semibold",
  txtJostSemiBold20: "font-jost font-semibold",
  txtJostMedium16Gray800: "font-jost font-medium",
  txtJostMedium12Gray800: "font-jost font-medium",
  txtJostMedium14Gray900: "font-jost font-medium",
  txtJostMedium16Gray900: "font-jost font-medium",
  txtJostRegular12Gray900: "font-jost font-normal",
  txtJostRegular12Gray800: "font-jost font-normal",
  txtJostMedium14Bluegray800: "font-jost font-medium",
  txtJostMedium14: "font-jost font-medium",
  txtJostMedium12: "font-jost font-medium",
  txtJostRomanRegular14: "font-jost font-normal",
  txtJostRegular12: "font-jost font-normal",
  txtJostMedium12Green800: "font-jost font-medium",
  txtJostSemiBold16: "font-jost font-semibold",
  txtJostRomanBold40: "font-bold font-jost",
  txtJostRegular16WhiteA70001: "font-jost font-normal",
  txtJostRegular18: "font-jost font-normal",
  txtJostRegular16: "font-jost font-normal",
  txtJostRegular14: "font-jost font-normal",
  txtJostSemiBold18: "font-jost font-semibold",
  txtJostRomanMedium20: "font-jost font-medium",
  txtJostMedium12Bluegray800: "font-jost font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
