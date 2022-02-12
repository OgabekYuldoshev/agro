// ** Third Party Components
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
// import { baseUrl } from "@utils"
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
  breakpoints: {
    1024: {
      slidesPerView: 6,
      spaceBetween: 40
    },
    768: {
      slidesPerView: 5,
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

const SwiperProducts = ({ title, data }) => {
  return (
    <div className='my-2'>
      <h1 className='mb-2'>{title}</h1>
      <Swiper {...params}>
        {
          data.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                width={200}
                height={200}
                src="https://www.clipartkey.com/mpngs/m/125-1254131_pepsi-old-pepsi-logo-png.png"
                // src={baseUrl + item?.image}
                alt={item.name} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>

  )
}

export default SwiperProducts
