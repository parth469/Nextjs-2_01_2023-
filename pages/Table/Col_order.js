import { useTable, useColumnOrder } from "react-table";
import { Col } from "./COL";
import data from "./MOCK_DATA.json";
import { useMemo } from "react";
import Nevigation from "./Nevigation";

const table = () => {
  const columns = useMemo(() => Col, []);
  const datas = useMemo(() => data, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setColumnOrder,
  } = useTable(
    {
      columns,
      data: datas,
    },
    useColumnOrder
  );
  const chnageorder = () => {
    setColumnOrder(["id", "first_name", "gender", "email", "last_name"]);
  };
  const chnageordertoorignal = () => {
    setColumnOrder(["id", "first_name", "last_name", "email", "gender"]);
  };

  return (
    <>
      <Nevigation />
      <div style={{ textAlign: "center" }}>
        <button
          style={{ backgroundColor: "yellow", color: "green", margin: "20px" }}
          onClick={chnageorder}
        >
          Change Col Order
        </button>
        <button
          style={{ backgroundColor: "yellow", color: "green", margin: "20px" }}
          onClick={chnageordertoorignal}
        >
          Orignal
        </button>
      </div>
      <table {...getTableProps()} style={{ border: "solid 1px black" ,margin: "auto",boxShadow: "1px 1px 20px 1px black"}}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((columns) => (
                <th
                  {...columns.getHeaderProps()}
                  style={{
                    borderBottom: "solid 3px red",
                    background: "aliceblue",
                    color: "black",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {columns.render("Headers")}{" "}
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
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                        border: "solid 1px gray",
                        background: "black",
                        textAlign: "center",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default table;
