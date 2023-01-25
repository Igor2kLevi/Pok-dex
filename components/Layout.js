import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "../styles/Home.module.css"

export default function Layout({children}) {
    return (
        <div>
            <Head>
                <link rel="shortcut icon" href="/images/favicon.ico" />
                <title>Pokédex</title>
            </Head>
            <Navbar />
            <main className={styles.mainContainer}>{children}</main>
            <Footer />
        </div>
    )
}