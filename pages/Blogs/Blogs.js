import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const json = await res.json();
  return {
    props: { data: json },
  };
};
export default function Blog_1({ data }) {
  return (
    <>
      <ul>
        <li>
          <Link href="/Blogs/Blogs_1">Blog 1</Link>
        </li>
        <li>
          <Link href="/Blogs/Blogs_2">Blog 2</Link>
        </li>
      </ul>
      <h1>ALL Website userdata</h1>
      <br />
    
      {data.map((datas) => (
        <Link href={'/Blogs/'+datas.id}>
            <h2>{`${datas.name} ${datas.username}`}</h2>
        </Link>
      ))}
    </>
  );
}
