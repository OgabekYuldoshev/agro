import { Fragment } from 'react'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import { slider } from "@db"
import { CardText } from 'reactstrap'
import ProductCard from "../../components/ProductCard"
// ** Styles
import '@styles/react/libs/swiper/swiper.scss'

const RelatedProducts = () => {
  SwiperCore.use([Navigation])
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
  return (
    <Fragment>
      <div className='mt-4 mb-2 text-center'>
        <h4>Related Products</h4>
        <CardText>People also search for this items</CardText>
      </div>
      <Swiper {...params}>
        {slider.map(item => {
          return (
            <SwiperSlide key={item.id}>
              <ProductCard item={item} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Fragment>
  )
}

export default RelatedProducts
