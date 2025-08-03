import React from "react";

interface CheckmarkIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const CheckmarkIcon: React.FC<CheckmarkIconProps> = ({
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
        d="M12 23.5859L27.2928 8.29297L28.7071 9.70718L12 26.4143L4.29285 18.7072L5.70706 17.293L12 23.5859Z"
        fill={fill}
      />
    </svg>
  );
};

export default CheckmarkIcon;
