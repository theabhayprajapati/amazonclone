import Image from 'next/image'
import '../../styles/Home.module.css'
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline'
const Header = () => {
  return (
    <header>
      {/* upper nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src={'https://links.papareact.com/f90'}
            width={150}
            height={40}
            objectFit="contain"
            className=""
          />
        </div>
        {/* Search bar */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow  bg-yellow-300 hover:bg-yellow-500">
          <input
            className="p-2 w-6 h-full focus:outline-none px-4 flex-grow rounded-l-md flex-shrink"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* Rights */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello Abhay</p>
            <p className="font-extrabold md:text-sm ">Account & Lists </p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">&Orders</p>
          </div>
          <div className="link relative flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full font-bold text-black">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline mt-2 font-extrabold md:text-sm">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* loer nav */}
      <div className=" flex items-center space-x-3 p-2 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1 " /> All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronic's</p>
        <p className="link hidden lg:inline-flex">Fashion</p>
        <p className="link hidden lg:inline-flex">Mobiles</p>
        <p className="link hidden lg:inline-flex">Fashion & Prime</p>
        <p className="link hidden lg:inline-flex">Grocerys</p>
        <p className="link hidden lg:inline-flex">Gifts</p>
      </div>
    </header>
  )
}

export default Header
