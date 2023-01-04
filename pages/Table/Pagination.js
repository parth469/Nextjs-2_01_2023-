import { useTable, usePagination } from "react-table";
import { Col } from "./COL";
import data from "./MOCK_DATA.json";
import { useMemo } from "react";
import Nevigation from "./Nevigation";

const Pagination = () => {
  const columns = useMemo(() => Col, []);
  const datas = useMemo(() => data, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    pagecount,
    gotoPage,
    setPageSize,
  } = useTable(
    {
      columns,
      data: datas,
    },
    usePagination
  );
  const { pageIndex, pageSize } = state;
  return (
    <>
      <Nevigation></Nevigation>
      <div style={{ textAlign: "center" }}>
        <br />
        <div>
          <strong>
            Page {pageIndex + 1} / {pageOptions.length}
          </strong>
        </div>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button
          style={{ margin: "30px 20px" }}
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Pre
        </button>
        <span>
          Go-To Page :-{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
          ></input>
        </span>
        <span style={{ marginLeft: "10px" }}>
          Select Table Size{" "}
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[5, 7, 10, 15, 25].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </span>
        <button
          style={{ margin: "30px 20px" }}
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          next
        </button>
        <button
          onClick={() => gotoPage(pageOptions.length - 1)}
          disabled={!canNextPage}
        >
          {">>"}
        </button>
      </div>
      <table
        {...getTableProps()}
        style={{
          border: "solid 1px black",
          margin: "auto",
          boxShadow: "1px 1px 20px 1px black",
        }}
      >
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
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                         background: "white",
                        border:"none",
                        borderBottom:"1px solid black",
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
      <div style={{ textAlign: "center" }}>
        <br />
        <div>
          <strong>
            Page {pageIndex + 1} / {pageOptions.length}
          </strong>
        </div>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button
          style={{ margin: "30px 20px" }}
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Pre
        </button>
        <span>
          Go-To Page :-{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
          ></input>
        </span>
        <span style={{ marginLeft: "10px" }}>
          Select Table Size{" "}
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[5, 7, 10, 15, 25].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </span>
        <button
          style={{ margin: "30px 20px" }}
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          next
        </button>
        <button
          onClick={() => gotoPage(pageOptions.length - 1)}
          disabled={!canNextPage}
        >
          {">>"}
        </button>
      </div>
    </>
  );
};

export default Pagination;
