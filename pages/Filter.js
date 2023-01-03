import { useTable,useSortBy ,useFilters,} from "react-table";
import { Col } from "./COL";
import data from "./MOCK_DATA.json";
import { useMemo } from "react";

const Sorting = () => {
  const columns = useMemo(() => Col, []);
  const datas = useMemo(() => data, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow,footerGroups  } = useTable({
    columns: columns,
    data: datas},
    useFilters,
    )

    // const {globalFilter} = state
  return (
    <>
    {/* <globalFilter filter={globalFilter} setFilter={setGlobalFilter}/> */}
      <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
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
                    <div>
                        {columns.canFilter ? columns.render('Filter'):null}
                    </div>
                  {columns.render("Headers")}
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
        <tfoot style={{border: "solid 1px blue", background: "white",
                        textAlign: "center",color:'black'}} >
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((columns) => (
                <td>
                  {columns.render("Footer")}
                </td>)
                )}
            </tr>

          ))}
        </tfoot>
      </table>
    </>
  );
};

export default Sorting;
