import { useRouter } from "next/router"

// export const getStaticProps = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const json = await res.json();
//   return {
//     props: { data: json },
//   };
// };

export default function Alluserdata(){
    const {query} = useRouter()
    console.log(query.id)
    return (
        <>
        <h1>This is user {query.id}data</h1>
        </>
    )
}


// import Link from "next/link";


// export default function Blog_1({ data }) {
//   return (
//     <>
//       <ul>
//         <li>
//           <Link href="/Blogs/Blogs_1">Blog 1</Link>
//         </li>
//         <li>
//           <Link href="/Blogs/Blogs_2">Blog 2</Link>
//         </li>
//       </ul>
//       <ol>
//         <Link href="/Blogs/*">Blog 2</Link>
//       </ol>
//       <h1>ALL Website userdata</h1>
//       <br />
    
//       {data.map((datas) => (
//         <div key={datas.id}>
//           <ol>
//             <h2>Name :- {`${datas.name} ${datas.username}`}</h2>
//             <h3>Email address :- {datas.email}</h3>
//             <h3>Phone Number :- {datas.phone}</h3>
//             <h4>
//               Address :-
//               {`${datas.address.suite}, ${datas.address.street}, ${datas.address.city}, ${datas.address.zipcode}`}
//             </h4>
//             <br />
//           </ol>
//         </div>
//       ))}
//     </>
//   );
// }
