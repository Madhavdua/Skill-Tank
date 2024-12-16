import React, { useContext, useState, useEffect } from "react";
import { useTable, useSortBy } from "react-table";
import myContext from "../CreateContext";

function ShowSale() {
  const [tableData, setTableData] = useState([]);
  const c = useContext(myContext);

  async function getData() {
    const response = await c.getSales();
    if (response) {
      setTableData(response.sales);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const columns = React.useMemo(
    () => [
      { Header: "Sale ID", accessor: "saleID" },
      { Header: "Customer Name", accessor: "customerName" },
      { Header: "Product Name", accessor: "productName" },
      { Header: "Quantity", accessor: "quantity", disableSortBy: false },
      { Header: "Unit Price", accessor: "unitPrice" },
      { Header: "Total Price", accessor: "totalPrice" },
      { Header: "Payment Method", accessor: "paymentMethod" },
      { Header: "Status", accessor: "status" },
      { Header: "Discount Applied", accessor: "discountApplied", disableSortBy: false },
      { Header: "Net Amount", accessor: "netAmount", disableSortBy: false },
      { Header: "Salesperson Name", accessor: "salespersonName" },
      { Header: "Delivery Status", accessor: "deliveryStatus" },
      { Header: "Created At", accessor: "createdAt", disableSortBy: false },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data: tableData,
    },
    useSortBy
  );

  return (
    <div className="cont" style={{ width: "100%", overflowX: "scroll" }}>
      <table {...getTableProps()} className="table table-bordered" >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{ cursor: column.canSort ? "pointer" : "default" }}
                >
                  {column.render("Header")}
                  {/* Sorting Indicator */}
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : "🔼🔽"}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  const cellProps = cell.getCellProps();
                  return (
                    <td key={cellProps.key} {...{ ...cellProps, key: undefined }}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ShowSale;
