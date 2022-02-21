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
import { useHistory } from 'react-router-dom'
import { useTranslation } from "react-i18next"

const Product = (props) => {
  // ** Props
  const { item, dispatch, addToCart, handleRemoveFromWishlist, addToWishList } = props
  const { i18n } = useTranslation()

  const history = useHistory()
  // ** State
  // const [selectedColor, setSelectedColor] = useState('primary')

  // ** Renders color options
  // const renderColorOptions = () => {
  //   return data.colorOptions.map((color, index) => {
  //     const isLastColor = data.colorOptions.length - 1 === index

  //     return (
  //       <li
  //         key={color}
  //         className={classnames('d-inline-block', {
  //           'me-25': !isLastColor,
  //           selected: selectedColor === color
  //         })}
  //         onClick={() => setSelectedColor(color)}
  //       >
  //         <div className={`color-option b-${color}`}>
  //           <div className={`filloption bg-${color}`}></div>
  //         </div>
  //       </li>
  //     )
  //   })
  // }

  // // ** Handle Wishlist item toggle
  // const handleWishlist = val => {
  //   if (val) {
  //     dispatch(deleteWishlistItem(productId))
  //   } else {
  //     dispatch(addToWishlist(productId))
  //   }
  //   dispatch(getProduct(productId))
  // }

  // // ** Handle Move/Add to cart
  // const handleCartBtn = (id, val) => {
  //   if (val === false) {
  //     dispatch(addToCart(id))
  //   }
  //   dispatch(getProduct(productId))
  // }

  // ** Condition btn tag
  // const CartBtnTag = data.isInCart ? Link : 'button'

  return (
    <Row className='my-2'>
      <Col className='d-flex align-items-center justify-content-center mb-2 mb-md-0' md='5' xs='12'>
        <div className='d-flex align-items-center justify-content-center'>
          <ReactImageZoom className='img-fluid product-img' width={300} height={300} zoomPosition="original" zoomWidth={400} img={item?.photos?.length ? baseUrl + item?.photos[0]?.image : require('@src/assets/images/pages/eCommerce/26.png').default} />
        </div>
      </Col>
      <Col md='7' xs='12'>
        <h4>{item[`name_${i18n.language}`]}</h4>
        <CardText tag='span' className='item-company'>
          By
          <a className='company-name' href='/' onClick={e => e.preventDefault()}>
            {item?.partner_id}
          </a>
        </CardText>
        <div className='ecommerce-details-price d-flex flex-wrap mt-1'>
          <h4 className='item-price me-1'>${item?.price}</h4>
          {/* <ul className='unstyled-list list-inline'>
            {new Array(5).fill().map((listItem, index) => {
              return (
                <li key={index} className='ratings-list-item me-25'>
                  <Star
                    className={classnames({
                      'filled-star': index + 1 <= 3,
                      'unfilled-star': index + 1 > 3
                    })}
                  />
                </li>
              )
            })}
          </ul> */}
        </div>
        <CardText>
          Available -<span className='text-success ms-25'>In stock</span>
        </CardText>
        <CardText>
          <div dangerouslySetInnerHTML={{ __html: item[`specification_${i18n.language}`] }} />
        </CardText>
        <ul className='product-features list-unstyled'>
          {/* {item?.hasFreeShipping && (
            <li>
              <ShoppingCart size={19} />
              <span>Free Shipping</span>
            </li>
          )} */}
          <li>
            <DollarSign size={19} />
            <span>EMI options available</span>
          </li>
        </ul>
        <hr />
        {/* <div className='product-color-options'>
          <h6>Colors</h6>
          <ul className='list-unstyled mb-0'>{renderColorOptions()}</ul>
        </div>
        <hr /> */}
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
                View in cart
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
                Add to Cart
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
                <span>Remove from Wishlist</span>
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
                <span>Wishlist</span>
              </Button>
            )
          }
          {/* <UncontrolledButtonDropdown className='dropdown-icon-wrapper btn-share'>
            <DropdownToggle className='btn-icon hide-arrow' color='secondary' caret outline>
              <Share2 size={14} />
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem tag='a' href='/' onClick={e => e.preventDefault()}>
                <Facebook size={14} />
              </DropdownItem>
              <DropdownItem tag='a' href='/' onClick={e => e.preventDefault()}>
                <Twitter size={14} />
              </DropdownItem>
              <DropdownItem tag='a' href='/' onClick={e => e.preventDefault()}>
                <Youtube size={14} />
              </DropdownItem>
              <DropdownItem tag='a' href='/' onClick={e => e.preventDefault()}>
                <Instagram size={14} />
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown> */}
        </div>
      </Col>
    </Row >
  )
}

export default Product
