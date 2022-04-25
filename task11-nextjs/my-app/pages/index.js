import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <div /*className={styles.container}*/>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Home</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"/>
        {/* <link rel="stylesheet" href="css/styles.css"/>   */}
      </Head>
      <Nav />
      <Hero />
      <SearchBar />
      <Main />
      <Footer />
    </div>
  )
}
