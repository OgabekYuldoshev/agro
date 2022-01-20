// ** Third Party Components
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

import '@styles/react/libs/swiper/swiper.scss'
import SwiperCore, {
  Navigation
} from 'swiper'
// ** Images

const params = {
  slidesPerView: 5,
  spaceBetween: 50,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    clickable: true
  },
  navigation: true,
  breakpoints: {
    1024: {
      slidesPerView: 7,
      spaceBetween: 40
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 10
    }
  }
}

SwiperCore.use([Navigation])

const SwiperProducts = ({ title }) => {
  return (
    <div className='my-2'>
      <h1 className='mb-2'>{title}</h1>
      <Swiper {...params}>
        {
          new Array(10).fill().map((item) => (
            <SwiperSlide>
              <img width={200} height={100} src="https://www.clipartkey.com/mpngs/m/125-1254131_pepsi-old-pepsi-logo-png.png" alt={item} key={item} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>

  )
}

export default SwiperProducts
