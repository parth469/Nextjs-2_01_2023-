import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head"

const  Layout= ({ children }) => {
    return (
        <>
        <Head>
        <title>BLog Website</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="container">
            <Navbar/>
            {children}
            <Footer/>
        </div>
        </>
    )
}
export default Layout;