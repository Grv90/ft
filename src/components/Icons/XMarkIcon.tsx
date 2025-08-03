import React from "react";

interface XMarkIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const XMarkIcon: React.FC<XMarkIconProps> = ({
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
        d="M15.9999 14.5382L22.5381 8L23.9999 9.46179L17.4617 16L23.9999 22.5382L22.5381 24L15.9999 17.4618L9.46166 24L7.99988 22.5382L14.5381 16L7.99988 9.46179L9.46166 8L15.9999 14.5382Z"
        fill={fill}
      />
    </svg>
  );
};

export default XMarkIcon;
