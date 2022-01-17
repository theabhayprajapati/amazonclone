import { CurrencyRupeeIcon, StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { addtoBasket, removefromBasket } from '../../slice/basketSlice'
const CheckoutComp = ({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasprime,
}) => {
  const dispatch = useDispatch()
  const additemtobasket = () => {
    const product = {
      id,
      rating,
      title,
      price,
      description,
      category,
      image,
      hasprime,
    }
    dispatch(addtoBasket(product))
  }
  const removeitemfrombasket = () => {
    dispatch(removefromBasket({id}))
  }
  return (
    <div className="grid grid-cols-5 font-semibold text-lg">
      <img src={image} className="h-[200px] w-[200px] object-contain" />
      {/* middle */}
      <div className="col-span-3">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>{' '}
        <p className="text-sm my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="GBP" />
        {hasprime && (
          <div className="flex items-center space-x-2">
            <img
              src="https://links.papareact.com/fdw"
              loading="lazy"
              className="w-12"
              alt=""
            />
            <p className="">FREE NEXT DAY DELIVERY</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button " onClick={additemtobasket}>
          Add to basket
        </button>{' '}
        <button onClick={removeitemfrombasket} className="button ">
          Remove from basket
        </button>
      </div>{' '}
    </div>
  )
}

export default CheckoutComp
