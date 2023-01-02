import Image from 'next/image'
import styles from '../../styles/Home.module.css'


import NextjsLogo from "../../public/a.png"
export default function Blog_2(){
    return (
        <>
        <h1>This is Next js Blog</h1>
        <h1>Logo</h1>
        <Image
         className={styles.Image}
         src={NextjsLogo}
         alt="NextjsLogo"
        width={250} 
        height={260}
        />
        <h1>Description</h1>        
        </>
    )
}