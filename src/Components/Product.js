import { StarIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Currency from 'react-currency-formatter'
const Product = ({ id, title, price, description, category, image }) => {
  const Max_rating = 5
  const Min_rating = 0

  const [rating, setrating] = useState(
    Math.floor(Math.random() * (Max_rating - Min_rating + 1) + Min_rating),
  )
  const [hasPrime] = useState(Math.random() < 0.5)

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-center italic text-gray-400">
        {category}
      </p>

      <Image src={image} width={200} height={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="GBP" />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img src="https://links.papareact.com/fdw" className="w-12" alt="" />
          <p className="text-xs text-gray-500 text-center font-bold">
            Free Next Day Delivery
          </p>
        </div>
      )}
      <button className="mt-auto button">Add to Basket</button>
    </div>
  )
}

export default Product
