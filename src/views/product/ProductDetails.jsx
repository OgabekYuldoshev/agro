// ** React Imports
// import { useState } from 'react'
// import { Link } from 'react-router-dom'
import ReactImageZoom from 'react-image-zoom'
// ** Third Party Components
import { ShoppingCart, DollarSign, Heart } from 'react-feather'
// ** Reactstrap Imports
import {
  Row,
  Col,
  Button,
  CardText
} from 'reactstrap'
import { inCart, inWishList, baseUrl } from "@utils"
import { useHistory, Link } from 'react-router-dom'
import { useTranslation } from "react-i18next"
import { useState } from 'react'

const Product = (props) => {
  // ** Props
  const { item, dispatch, addToCart, handleRemoveFromWishlist, addToWishList } = props
  const { t, i18n } = useTranslation()
  const [img, setImg] = useState(item?.photos && item?.photos[0]?.image)
  const history = useHistory()

  return (
    <>
      <Row className='my-2'>
        <Col className='d-flex align-items-center justify-content-center mb-2 mb-md-0' md='5' xs='12'>
          <div className='d-flex flex-column align-items-center justify-content-center'>
            <ReactImageZoom id="imgUNcover" width={300} height={300} zoomPosition="original" zoomWidth={300} img={item?.photos?.length ? baseUrl + img : require('@src/assets/images/pages/eCommerce/26.png').default} />
            <Row className='mt-1'>
              {
                item?.photos?.map((item, index) => (
                  <Col key={index}>
                    <img key={index} id="imgUNcover" className="cursor-pointer" onClick={() => setImg(item?.image)} src={baseUrl + item?.image} alt={index} width={100} height={100} />
                  </Col>
                ))
              }
            </Row>
          </div>
        </Col>
        <Col md='7' xs='12'>
          <h4>{item[`name_${i18n.language}`]}</h4>
          <CardText tag='span' className='item-company'>
            {t('by')}{' '}
            <a className='company-name' target="_blank" href={item?.partners?.link}>
              {item?.partners?.name}
            </a>
          </CardText>
          <div className='ecommerce-details-price d-flex flex-wrap mt-1'>
            <h4 className='item-price me-1'>{item?.price}{" "}{t('som')}</h4>
          </div>
          {/* <CardText>
            {t('available')} -<span className='text-success ms-25'>{t('in_stock')}</span>
          </CardText>
          <ul className='product-features list-unstyled'>
            <li>
              <DollarSign size={19} />
              <span>{t('emi_options')}</span>
            </li>
          </ul> */}
          <hr />
          <div className='d-flex items-center gap-2'>
            <div>
              {t('category')} : <b><Link to={`/category/${item?.categories?.main_parent_id}`}>{item?.categories && item?.categories[`name_${i18n.language}`]}</Link></b>
            </div>
            <div>
              {t('size')} : <b>{item?.nett_weight}{" "}{item?.units?.long_name}</b>
            </div>
          </div>
          <div className='d-flex flex-column flex-sm-row pt-1'>
            {
              inCart(item) ? (
                <Button
                  className='btn-cart me-0 me-sm-1 mb-1 mb-sm-0'
                  color='primary'
                  outline
                  onClick={() => history.push('/checkout')}
                >
                  <ShoppingCart className='me-50' size={14} />
                  {t('view_in_cart')}
                </Button>
              ) : (
                <Button
                  className='btn-cart me-0 me-sm-1 mb-1 mb-sm-0'
                  color='success'
                  onClick={
                    () => dispatch(addToCart({
                      item,
                      qty: 1
                    }))}
                >
                  <ShoppingCart className='me-50' size={14} />
                  {t('add_cart')}
                </Button>
              )
            }

            {
              inWishList(item) ? (
                <Button
                  className='btn-wishlist me-0 me-sm-1 mb-1 mb-sm-0'
                  color='danger'
                  outline
                  onClick={() => handleRemoveFromWishlist(item)}
                >
                  <Heart
                    fill='red'
                    size={15}
                  />
                  <span>{t('delete_to_wishlist')}</span>
                </Button>
              ) : (
                <Button
                  className='btn-wishlist me-0 me-sm-1 mb-1 mb-sm-0'
                  color='secondary'
                  outline
                  onClick={() => dispatch(addToWishList(item.id))}
                >
                  <Heart
                    size={15}
                  />
                  <span>{t('wishlist')}</span>
                </Button>
              )
            }
          </div>
        </Col>
      </Row >
      <div className='mt-2'>
        <h4 className='my-2'>{t('about_products')}</h4>
        <div dangerouslySetInnerHTML={{ __html: item[`specification_${i18n.language}`] }} />
      </div>
    </>
  )
}

export default Product
