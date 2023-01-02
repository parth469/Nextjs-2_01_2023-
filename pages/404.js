import Link from "next/link";
import styles from "../styles/Home.module.css";

const Pagenotefound = () =>{
    return (
        <>
        <h1>Pagenotefound</h1>
        <h1>Back to Home page</h1>
        <Link href='/'>
        <h2 className={styles.Pagenotefound} >Home page </h2></Link>
        </>
    )
}
export default Pagenotefound;