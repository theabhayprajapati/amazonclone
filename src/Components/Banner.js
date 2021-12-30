//  * for making the application more responsive
import { Carousel } from 'react-responsive-carousel'
// ! requried
import 'react-responsive-carousel/lib/styles/carousel.min.css'
const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-white to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop={true}
        showStatus={true}
        showIndicators={false}
        showThumbs={false}
        interval={1000}
      >
        {/* first banner */}
        <div>
          <img loading="lazy" src="https://links.papareact.com/gi1" />
        </div>
        {/* secons bannder */}
        <div>
          <img loading="lazy" src="https://links.papareact.com/6ff" />
        </div>
        {/* third banner */}
        <div>
          <img loading="lazy" src="https://links.papareact.com/7ma" />
        </div>
      </Carousel>
    </div>
  )
}

export default Banner
