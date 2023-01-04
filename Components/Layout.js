import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head"
import { background } from "@chakra-ui/react";

const  Layout= ({ children }) => {
    return (
        <>
        <Head>
        <title>BLog Website</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <div >
            <Navbar/>
            {children}
            <Footer/>
        </div>
        </>
    )
}
export default Layout;