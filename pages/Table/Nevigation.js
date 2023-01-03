import Link from "next/link";
export default function Nevigation() {
  return (
    <>
      <ul>
        <li>
          <Link href="/Table/BasicTable">Basic Table</Link>
        </li>
        <li>
          <Link href="/Table/Footer">Footer</Link>
        </li>

        <li>
          <Link href="/Table/Sorting">Sorting Table</Link>
        </li>

        <li>
          <Link href="/Table/Filter">Filter Table</Link>
        </li>

        <li>
          <Link href="/Table/Pagination">Pagination Table</Link>
        </li>

        <li>
          <Link href="/Table/Hide">Hide Table</Link>
        </li>

        <li>
          <Link href="/Table/Col_order">column Order</Link>
        </li>
      </ul>
    </>
  );
}
