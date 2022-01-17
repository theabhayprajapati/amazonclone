import { signIn, signOut, useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import Currency from 'react-currency-formatter'
import { useSelector } from 'react-redux'
import { selectItems, selectotal } from '../slice/basketSlice'
import CheckoutComp from '../src/Components/CheckoutComp'
import Header from '../src/Components/Header'

const Checkout = () => {
  const { data: session } = useSession()
  const total = useSelector(selectotal)
  const items = useSelector(selectItems)
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
              <h1 className="text-3xl font-semibold border-b pb-4">
                {items.length == 0
                  ? 'Your basket is empty.'
                  : 'Your Shopping Basket'}
              </h1>
              {items.map(
                (
                  {
                    id,
                    title,
                    price,
                    description,
                    category,
                    image,
                    rating,
                    hasprime,
                  },
                  i,
                ) => (
                  <CheckoutComp
                    key={i}
                    id={id}
                    title={title}
                    rating={rating}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                    hasprime={hasprime}
                  />
                ),
              )}
            </div>
          </div>
        </section>
        {/* right hadnd seciotn */}

        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap font-bold">
                Subtotal({items.length} items):
                <span className="font-bold">
                  <Currency quantity={total} />
                </span>{' '}
              </h2>
              <button
                onClick={!session ? signIn : console.log('hello')}
                className={`button ${
                  !session &&
                  'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'
                }`}
              >
                {!session ? 'Sign In to checkout' : 'Checkout'}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  )
}

export default Checkout
