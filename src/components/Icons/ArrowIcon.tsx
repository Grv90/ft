import React from "react";

interface ArrowIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({
  width = 32,
  height = 32,
  fill = "#031934",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.1001 7.79297L18.6505 9.26093L24.0758 14.755H4V16.831H24.0758L18.6505 22.325L20.1001 23.793L28 15.793L20.1001 7.79297Z"
        fill={fill}
      />
    </svg>
  );
};

export default ArrowIcon;
