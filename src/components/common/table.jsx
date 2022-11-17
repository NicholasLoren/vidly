import React from "react";
import TableHead from "../common/tableHead";
import TableBody from "../common/tableBody";
const Table = ({ columns, sortColumn, data, onSort }) => {
  return (
    <table className="table table-striped table-hover">
      <TableHead columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
