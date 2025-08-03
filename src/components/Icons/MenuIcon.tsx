import React from "react";
import BaseIcon, { IconProps } from "./BaseIcon";

const MenuIcon: React.FC<IconProps> = (props) => {
  return (
    <BaseIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 15H5V13H27V15ZM27 20H5V18H27V20Z"
        fill="currentColor"
      />
    </BaseIcon>
  );
};

export default MenuIcon;
