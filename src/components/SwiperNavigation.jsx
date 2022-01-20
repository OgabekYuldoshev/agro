// ** Third Party Components
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

// ** Reactstrap Imports
import '@styles/react/libs/swiper/swiper.scss'

import SwiperCore, {
  Autoplay
} from 'swiper'

// ** Images
import img1 from '@src/assets/images/banner/banner-20.jpg'
import img2 from '@src/assets/images/banner/banner-7.jpg'
import img3 from '@src/assets/images/banner/banner-8.jpg'
import img4 from '@src/assets/images/banner/banner-9.jpg'
import img5 from '@src/assets/images/banner/banner-10.jpg'
import img6 from '@src/assets/images/banner/banner-11.jpg'

const params = {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    clickable: true
  },
  navigation: true
}

SwiperCore.use([Autoplay])


const SwiperAutoplay = ({ isRtl }) => {
  return (
    <Swiper dir={isRtl ? 'rtl' : 'ltr'} {...params}>
      <SwiperSlide>
        <img src={img1} alt='swiper 1' className='img-fluid' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt='swiper 2' className='img-fluid' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt='swiper 3' className='img-fluid' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} alt='swiper 4' className='img-fluid' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img5} alt='swiper 5' className='img-fluid' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img6} alt='swiper 6' className='img-fluid' />
      </SwiperSlide>
    </Swiper>
  )
}

export default SwiperAutoplay
