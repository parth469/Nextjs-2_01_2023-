export const Fitter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <span>
      Seach:{" "}
      <input
        style={{borderBottom:"2px solid black", margin:"3px"}}
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
};
