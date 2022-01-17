import Head from 'next/head'
import Image from 'next/image'
import Header from '../src/Components/Header'

const Checkout = () => {
  return (
    <div>
      <Head>
        <title>Amazon Checkout</title>
      </Head>
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left hand section */}
        <section>
          <div className="flex-grow m-5 shadow-sm">
            <Image
              src="https://links.papareact.com/ikj"
              width={1020}
              height={250}
              objectFit={'contain'}
            />
            <div className="flex flex-col p-5 space-y-10 bg-white">
              <h1 className="text-3xl font-semibold border-b pb-4">Your shopping basket</h1>
            </div>
          </div>
        </section>
        {/* right hadnd seciotn */}
        <section></section>
      </main>
    </div>
  )
}

export default Checkout
