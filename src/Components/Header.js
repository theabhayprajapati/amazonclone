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
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow  bg-yellow-300 hover: bg-yellow-500">
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
            0
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold"></span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline mt-2 font-extrabold md:text-sm">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* loer nav */}
      <div className="lowernav"></div>
    </header>
  )
}

export default Header
