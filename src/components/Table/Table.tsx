import React from "react";
import { CheckmarkIcon, XMarkIcon } from "../Icons";
import "./Table.scss";

export interface TableCellProps {
  type: "text" | "price" | "price-with-text" | "checkmark" | "x-mark";
  value?: string;
  price?: string;
  text?: string;
}

export interface TableHeaderProps {
  children: React.ReactNode;
}

export interface TableRowProps {
  children: React.ReactNode;
}

export interface TableProps {
  children: React.ReactNode;
}

const TableCell: React.FC<TableCellProps> = ({ type, value, price, text }) => {
  const renderContent = () => {
    switch (type) {
      case "text":
        return <span>{value || "Text"}</span>;
      case "price":
        return <span>{value || "$35,000"}</span>;
      case "price-with-text":
        return (
          <>
            <span className="price">{price || "$35,000"}</span>
            <span className="text">{text || "Text"}</span>
          </>
        );
      case "checkmark":
        return <CheckmarkIcon />;
      case "x-mark":
        return <XMarkIcon />;
      default:
        return <span>{value}</span>;
    }
  };

  return (
    <div className={`table__cell table__cell--${type}`}>{renderContent()}</div>
  );
};

const TableHeader: React.FC<TableHeaderProps> = ({ children }) => {
  return <div className="table__header">{children}</div>;
};

const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return <div className="table__row">{children}</div>;
};

const Table: React.FC<TableProps> = ({ children }) => {
  return <div className="table">{children}</div>;
};

export { Table, TableRow, TableHeader, TableCell };
export default Table;
