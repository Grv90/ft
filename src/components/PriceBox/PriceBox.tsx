import React from "react";
import "./PriceBox.scss";

export interface PriceBoxProps {
  price: string;
  period?: string;
  timestamp?: string;
  className?: string;
}

const PriceBox: React.FC<PriceBoxProps> = ({
  price,
  period = "/ mo",
  timestamp,
  className = "",
}) => {
  return (
    <div className={`price-box ${className}`}>
      <div className="price-box__price">
        {price}
        <span className="price-box__period">{period}</span>
      </div>
      {timestamp && <div className="price-box__timestamp">{timestamp}</div>}
    </div>
  );
};

export default PriceBox;
