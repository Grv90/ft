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

// HTML Table Components
export interface HTMLTableProps {
  children: React.ReactNode;
  className?: string;
}

export interface HTMLTableHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export interface HTMLTableRowProps {
  children: React.ReactNode;
  className?: string;
}

export interface HTMLTableCellProps {
  children: React.ReactNode;
  className?: string;
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

// HTML Table Components
const HTMLTable: React.FC<HTMLTableProps> = ({ children, className = "" }) => {
  return <table className={`table ${className}`}>{children}</table>;
};

const HTMLTableHeader: React.FC<HTMLTableHeaderProps> = ({
  children,
  className = "",
}) => {
  return <thead className={`table__header ${className}`}>{children}</thead>;
};

const HTMLTableRow: React.FC<HTMLTableRowProps> = ({
  children,
  className = "",
}) => {
  return <tr className={`table__row ${className}`}>{children}</tr>;
};

const HTMLTableCell: React.FC<HTMLTableCellProps> = ({
  children,
  className = "",
}) => {
  return <td className={`table__cell ${className}`}>{children}</td>;
};

const HTMLTableHeaderCell: React.FC<HTMLTableCellProps> = ({
  children,
  className = "",
}) => {
  return <th className={`table__header-cell ${className}`}>{children}</th>;
};

export {
  Table,
  TableRow,
  TableHeader,
  TableCell,
  HTMLTable,
  HTMLTableHeader,
  HTMLTableRow,
  HTMLTableCell,
  HTMLTableHeaderCell,
};
export default Table;
