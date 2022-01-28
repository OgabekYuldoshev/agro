// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
// import classnames from 'classnames'
// import { Star } from 'react-feather'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

// ** Reactstrap Imports
import { CardText } from 'reactstrap'

// ** Related products images
import ProductCard from "../../components/ProductCard"
// ** Styles
import '@styles/react/libs/swiper/swiper.scss'

const RelatedProducts = () => {
  SwiperCore.use([Navigation])

  // ** Related products Slides
  const slides = [1, 2, 3, 4, 5, 6, 7]

  // ** Slider params
  const params = {
    className: 'swiper-responsive-breakpoints swiper-container px-4 py-2',
    slidesPerView: 5,
    spaceBetween: 55,
    navigation: true,
    breakpoints: {
      1600: {
        slidesPerView: 4,
        spaceBetween: 55
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 55
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 55
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 55
      }
    }
  }

  console.log("=====================")

  return (
    <Fragment>
      <div className='mt-4 mb-2 text-center'>
        <h4>Related Products</h4>
        <CardText>People also search for this items</CardText>
      </div>
      <Swiper {...params}>
        {slides.map(slide => {
          return (
            <SwiperSlide key={slide.name}>
              <ProductCard />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Fragment>
  )
}

export default RelatedProducts
