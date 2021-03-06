// ** Third Party Components
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
// import { baseUrl } from "@utils"
import '@styles/react/libs/swiper/swiper.scss'
import SwiperCore, {
  Navigation
} from 'swiper'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'react-feather'
import { baseUrl } from '../utility/Utils'
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

const SwiperProducts = ({ title, data, t }) => {
  return (
    <div className='my-2'>
      <div className='d-flex align-items-center gap-1 mb-2'>
        <h2 className='h1'>{title}</h2>
        <Link to="/partners">
          <span>{t('all')}</span>
          <ArrowRight size={15} />
        </Link>
      </div>
      <Swiper {...params}>
        {
          data?.map((item, index) => (
            <SwiperSlide key={index}>
              <a href={item?.link} target="_blank" className="d-flex flex-column align-items-center justify-content-center">
                <img
                  id="imgPartner"
                  height={200}
                  src={item.image ? baseUrl + item.image : 'https://via.placeholder.com/150'}
                  alt={item.name} />
                <span className='mt-1'>
                  <b>
                    <em>{item.name}</em>
                  </b>
                </span>
              </a>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>

  )
}

export default SwiperProducts
