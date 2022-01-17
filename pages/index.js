import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Banner from '../src/Components/Banner'
import Header from '../src/Components/Header'
import Productfeed from '../src/Components/Productfeed'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [data, setdata] = useState([])

  function fetchingproducts(params) {
    fetch('https://fakestoreapi.com/products')
      .then((one) => one.json())
      .then((resp) => setdata(resp, 'fomradsf'))
  }
  useEffect(() => {
    fetchingproducts()
  }, [fetchingproducts])
  console.log('inidan')
  console.log(data?.slice(0, 10))
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/* banner  */}
        <Banner />

        {typeof data.id == 'undefined' ? <Productfeed products={data} /> : ''}

        {/* Productsfeed */}

        {/* <p>{products}</p> */}
      </main>
    </div>
  )
}
// this first collects the data and then render to the user ....
// export async function getServerSideProps(context) {
//   const products = await fetch(
//     'https://fakestoreapi.com/products',
//   ).then((res) => res.json())
//   return {
//     props: {
//       products,
//     },
//   }
