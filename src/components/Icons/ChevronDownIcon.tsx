import React from "react";
import BaseIcon, { IconProps } from "./BaseIcon";

const ChevronDownIcon: React.FC<IconProps> = (props) => {
  return (
    <BaseIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 20L8 12L9.4 10.6L16 17.2L22.6 10.6L24 12L16 20Z"
        fill="currentColor"
      />
    </BaseIcon>
  );
};

export default ChevronDownIcon; 