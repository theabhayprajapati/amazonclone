import Head from 'next/head'
import Image from 'next/image'
import Banner from '../src/Components/Banner'
import Header from '../src/Components/Header'
import Productfeed from '../src/Components/Productfeed'
import styles from '../styles/Home.module.css'

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/* banner  */}
        <Banner />
        {/* Productsfeed */}
        <Productfeed products={products} />
        {/* <p>{products}</p> */}
      </main>
    </div>
  )
}
// this first collects the data and then render to the user ....
export async function getServerSideProps(context) {
  const products = await fetch(
    'https://fakestoreapi.com/products',
  ).then((res) => res.json())
  return {
    props: {
      products,
    },
  }
}
