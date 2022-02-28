// ** Third Party Components
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
// import { slider } from "@db"
import '@styles/react/libs/swiper/swiper.scss'
import SwiperCore, {
  Navigation
} from 'swiper'
// ** Images
import ProductCard from "./ProductCard"

const params = {
  slidesPerView: 5,
  spaceBetween: 50,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  pagination: {
    clickable: true
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    425: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    }
  }
}

SwiperCore.use([Navigation])

const SwiperProducts = ({ title, data }) => {
  return (
    <div className='my-2'>
      <h1 className='mb-2'>{title}</h1>
      <Swiper {...params}>
        {
          data?.map((item, index) => (
            <SwiperSlide key={index}>
              <ProductCard key={item} item={item} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>

  )
}

export default SwiperProducts
