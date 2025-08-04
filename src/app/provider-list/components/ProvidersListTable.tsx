import React from "react";
import "./ProvidersList.scss";

export interface ProvidersListTableProps {
  children: React.ReactNode;
  className?: string;
}

export interface ProvidersListTableHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export interface ProvidersListTableRowProps {
  children: React.ReactNode;
  className?: string;
}

export interface ProvidersListTableCellProps {
  children: React.ReactNode;
  className?: string;
}

export interface ProvidersListTableHeaderCellProps {
  children: React.ReactNode;
  className?: string;
}

const ProvidersListTable: React.FC<ProvidersListTableProps> = ({
  children,
  className = "",
}) => {
  return (
    <table className={`providers-list__table ${className}`}>{children}</table>
  );
};

const ProvidersListTableHeader: React.FC<ProvidersListTableHeaderProps> = ({
  children,
  className = "",
}) => {
  return (
    <thead className={`providers-list__header ${className}`}>{children}</thead>
  );
};

const ProvidersListTableRow: React.FC<ProvidersListTableRowProps> = ({
  children,
  className = "",
}) => {
  return <tr className={`providers-list__row ${className}`}>{children}</tr>;
};

const ProvidersListTableCell: React.FC<ProvidersListTableCellProps> = ({
  children,
  className = "",
}) => {
  return <td className={`providers-list__cell ${className}`}>{children}</td>;
};

const ProvidersListTableHeaderCell: React.FC<
  ProvidersListTableHeaderCellProps
> = ({ children, className = "" }) => {
  return (
    <th className={`providers-list__header-cell ${className}`}>{children}</th>
  );
};

export {
  ProvidersListTable,
  ProvidersListTableHeader,
  ProvidersListTableRow,
  ProvidersListTableCell,
  ProvidersListTableHeaderCell,
};
