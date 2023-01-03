import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((user) => {
    return {
      params: {
        id: user.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/` + id);
  const data = await res.json();
  return {
    props: { user: data },
  };
};
export default function Alluserdata({user}) {
  const { query } = useRouter();
  console.log(query.id,
    user.email,
    user.name,
    user.phone,);
  return (
    <>
      <h1>This is user {query.id}data</h1>
    </>
  );
}