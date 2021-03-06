// ** Third Party Components
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import { baseUrl } from "@utils"
// ** Reactstrap Imports
import '@styles/react/libs/swiper/swiper.scss'

import SwiperCore, {
  Autoplay
} from 'swiper'

// // ** Images
// import img1 from '@src/assets/images/banner/banner-20.jpg'
// import img2 from '@src/assets/images/banner/banner-7.jpg'
// import img3 from '@src/assets/images/banner/banner-8.jpg'
// import img4 from '@src/assets/images/banner/banner-9.jpg'
// import img5 from '@src/assets/images/banner/banner-10.jpg'
// import img6 from '@src/assets/images/banner/banner-11.jpg'

const params = {
  autoplay: {
    delay: 5000
  },
  pagination: {
    clickable: true
  }
}

SwiperCore.use([Autoplay])


const SwiperAutoplay = ({ sliders }) => {
  return (
    <Swiper className='mt-2' {...params}>
      {
        sliders?.map((slide, index) => (
          <SwiperSlide key={index} className="d-flex align-items-center justify-content-center" style={{ maxHeight: "400px", minHeight: "200px" }}>
            <img src={baseUrl + slide.image} alt={slide.name} id="imgUNcover" />
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default SwiperAutoplay
