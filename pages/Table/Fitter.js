export const Fitter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <span>
      Seach:{" "}
      <input
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
};
