import Layout from '../Components/Layout'
import '../styles/globals.css'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })
// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";

export default function App({ Component, pageProps }) {
  return (
  <>
  {/* <Navbar/> */}
  <Layout>
    <Component {...pageProps} />
  </Layout>
  {/* <Footer/> */}
  </>
  )
}
