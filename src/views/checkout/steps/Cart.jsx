// ** React Imports
import { Link } from 'react-router-dom'

// ** Third Party Components
import InputNumber from 'rc-input-number'
import { X, Heart, Star, Plus, Minus } from 'react-feather'
import { useDispatch, useSelector } from "react-redux"
import { addToWishList, deleteFromWishList } from "@store/Wishlist"
import { handleAuthModal } from "@store/Auth"

import { inWishList } from "@utils"

// ** Reactstrap Imports
import { Card, CardBody, Button, Row, Col } from 'reactstrap'

// ** Styles
import '@styles/react/libs/input-number/input-number.scss'
import { toast } from 'react-toastify'
import { baseUrl } from '../../../utility/Utils'
import useCurrency from "../../../hooks/useCurrency"

const Cart = (props) => {
  const { products, stepper, removeFromCart, updateProduct, t, i18n } = props
  const dispatch = useDispatch()
  const handleRemove = (item) => dispatch(removeFromCart(item))
  const { priceFormat, currencyPrice, symbol } = useCurrency()
  const wishlist = useSelector(state => state.wishlist?.wishlist)
  const auth = useSelector(state => state.auth.isAuth)
  let total = 0
  let totalProduts = 0

  const handleRemoveFromWishlist = (item) => {
    const found = wishlist?.find((product) => product.products.id === item.id)
    if (found) return dispatch(deleteFromWishList(found.id))
    return toast.error("Bunaqa mahsulot wishlistda topilmadi!")
  }
  // console.log(products?.reduce((p, c) => { return p + c.qty }, []))
  const renderCart = () => {
    return products?.map((product, index) => {
      total += product?.qty * currencyPrice(product?.item?.price)
      totalProduts += product?.qty
      return (
        <Card key={index}>
          <CardBody>
            <Row xl={4} className="align-items-center">
              <Col>
                <div className='d-flex align-items-center justify-content-center'>
                  <Link to={`/product/${product?.item?.id}`}>
                    <img id="imgUNcover" width={150} height={150} src={product?.item?.photos?.length ? baseUrl + product?.item?.photos[0]?.image : require('@src/assets/images/pages/eCommerce/26.png').default} alt={product?.item?.name} />
                  </Link>
                </div>
              </Col>
              <Col xl={6}>
                <div className='item-name'>
                  <h6 className='mb-0'>
                    <Link to={`/product/${product?.item?.id}`}>{product?.item[`name_${i18n.language}`]}</Link>
                  </h6>
                  <span className='item-company'>
                    {t('by')}
                    <a className='ms-25' href='/' onClick={e => e.preventDefault()}>
                      {product?.item?.partner_id}
                    </a>
                  </span>
                </div>
                {/* <span className='text-success mb-1'>In Stock</span> */}
                <div className='item-quantity'>
                  <span className='quantity-title me-50'>{t('qty')}</span>
                  <InputNumber
                    min={1}
                    max={50}
                    upHandler={<Plus />}
                    className='cart-input'
                    defaultValue={product?.qty}
                    onChange={(val) => dispatch(updateProduct({ id: product?.item?.id, qty: val }))}
                    downHandler={<Minus />}
                  />
                </div>
              </Col>
              <Col className='border-left-1'>
                <div className='item-options text-center'>
                  <div className='item-wrapper'>
                    <div className='item-cost'>
                      <h4 className='item-price'>{priceFormat(currencyPrice(product?.item?.price))}{' '}{t(symbol)}</h4>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-1">
                    <Button onClick={() => handleRemove(product?.item)} className='mt-1 remove-wishlist' outline color='danger'>
                      <X size={14} className='me-25' />
                      <span>{t('delete')}</span>
                    </Button>
                    {
                      inWishList(product?.item) ? (
                        <Button
                          className='btn-cart'
                          color="danger"
                          outline
                          onClick={() => handleRemoveFromWishlist(product?.item)}
                        >
                          <span className='text-truncate'>{t('delete_to_wishlist')}</span>
                        </Button>
                      ) : (
                        <Button
                          className='btn-cart'
                          color='primary'
                          onClick={() => dispatch(addToWishList(product?.item?.id))}
                        >
                          <Heart
                            size={14}
                          />
                          <span className='text-truncate'>{t('wishlist')}</span>
                        </Button>
                      )
                    }

                  </div>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      )
    })
  }

  return (
    <Row xl={2}>
      <Col xl={9}>{renderCart()}</Col>
      <Col xl={3}>
        <Card>
          <CardBody>
            <div>
              <h6 className='mb-2'>{t('price_details')}</h6>
              <ul>
                <li className='d-flex justify-content-between align-items-center mb-1'>
                  <div className='detail-title'>{t('items')}</div>
                  <div className='detail-amt'>{products?.length || 0}</div>
                </li>
                <li className='d-flex justify-content-between align-items-center mb-1'>
                  <div className='detail-title'>{t('total')} {t('items')}</div>
                  <div className='detail-amt'>{totalProduts}</div>
                </li>
              </ul>
              <hr />
              <ul className='list-unstyled'>
                <li className='d-flex justify-content-between align-items-center'>
                  <div className='detail-title detail-total'>{t("total")}</div>
                  <div className='detail-amt fw-bolder'>{priceFormat(total)} {t(symbol)}</div>
                </li>
              </ul>
              <Button
                block
                color='primary'
                onClick={() => {
                  if (!auth) {
                    toast.warning("Siz orderni davom ettirishingiz uchun ro'yxatdan o'tgan bolishingiz kerak")
                    dispatch(handleAuthModal(true))
                  } else {
                    stepper.next()
                  }
                }}
                classnames='btn-next place-order'
              >
                {t('next')}
              </Button>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default Cart
