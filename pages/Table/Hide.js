import { Col } from "./COL";
import Nevigation from "./Nevigation";
import { useTable } from "react-table";
import React,{ useMemo } from "react";
import data from "./MOCK_DATA.json";

const table = () => {
  const columns = useMemo(() => Col, []);
  const datas = useMemo(() => data, []);

  const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef();
      const resolvedRef = ref || defaultRef;

      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
      }, [resolvedRef, indeterminate]);

      return <input type="checkbox" ref={resolvedRef} {...rest} />;
    }
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    allColumns,
    getToggleHideAllColumnsProps,
  } = useTable({
    columns: columns,
    data: datas,
  });

  return (
    <>
      <Nevigation></Nevigation>
      <div style={{display:"flex",color:'whitesmoke',fontSize:"20px",margin:"20px",justifyContent:"space-around",color:"black"}}>
        <div>
          <IndeterminateCheckbox {...getToggleHideAllColumnsProps()} /> Toggle
          All
        </div>
        {allColumns.map((column) => (
          <div style={{margin:"0px 10px" ,color:"black"}} key={column.id}>
            <label>
              <input type="checkbox" {...column.getToggleHiddenProps()} />{" "}
              {column.id}
            </label>
          </div>
        ))}
        <br />
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
    </>
  );
};

export default table;
