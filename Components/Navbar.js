import Link from "next/link";
export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/Blogs/Blogs">BLogs</Link>
        </li>
        <li>
          <Link href="/About">About</Link>
        </li>
        <li>
          <Link href="/Contact">Contact Us</Link>
        </li>
        <li>
          <Link href="/Login">Login</Link>
        </li>
        <li>
          <Link href="/SignUp">SignUp</Link>
        </li>
        <li>
          <Link href="/Table/BasicTable">Table</Link>
        </li>
      </ul>
    </nav>
  );
}
