// ** React Imports
import { Link } from 'react-router-dom'

// ** Third Party Components
import classnames from 'classnames'
import InputNumber from 'rc-input-number'
import { X, Heart, Star, Plus, Minus } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardBody, CardText, Button, Badge, InputGroup, Input, InputGroupText, Row, Col } from 'reactstrap'

// ** Styles
import '@styles/react/libs/input-number/input-number.scss'

const Cart = ({ stepper }) => {
  // ** Props
  // const { products, stepper, deleteCartItem, dispatch, addToWishlist, deleteWishlistItem, getCartItems } = props

  // // ** Function to convert Date
  // const formatDate = (value, formatting = { month: 'short', day: 'numeric', year: 'numeric' }) => {
  //   if (!value) return value
  //   return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
  // }

  // ** Funciton Function to toggle wishlist item
  // const handleWishlistClick = (id, val) => {
  //   if (val) {
  //     dispatch(deleteWishlistItem(id))
  //   } else {
  //     dispatch(addToWishlist(id))
  //   }
  //   dispatch(getCartItems())
  // }

  // ** Render cart items
  const renderCart = () => {
    return new Array(10).fill().map(() => {
      return (
        <Card>
          <CardBody>
            <Row xl={4}>
              <Col>
                <div className='item-img'>
                  <Link to={`/products/ogabek`}>
                    <img className='img-fluid' width={200} height={300} src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="ogabek" />
                  </Link>
                </div>
              </Col>
              <Col xl={6}>
                <div className='item-name'>
                  <h6 className='mb-0'>
                    <Link to={`/products/ogabek`}>Apple</Link>
                  </h6>
                  <span className='item-company'>
                    By
                    <a className='ms-25' href='/' onClick={e => e.preventDefault()}>
                      Ogabek
                    </a>
                  </span>
                  {/* <div className='item-rating'>
                <ul className='unstyled-list list-inline'>
                  {new Array(5).fill().map((listItem, index) => {
                    return (
                      <li key={index} className='ratings-list-item me-25'>
                        <Star
                          className={classnames({
                            'filled-star': index + 1 <= item.rating,
                            'unfilled-star': index + 1 > item.rating
                          })}
                        />
                      </li>
                    )
                  })}
                </ul>
              </div> */}
                </div>
                <span className='text-success mb-1'>In Stock</span>
                <div className='item-quantity'>
                  <span className='quantity-title me-50'>Qty</span>
                  <InputNumber
                    min={1}
                    max={10}
                    upHandler={<Plus />}
                    className='cart-input'
                    defaultValue={4}
                    downHandler={<Minus />}
                  />
                </div>
                <div className='delivery-date text-muted'>Delivery by, 21/21/21</div>
              </Col>
              <Col className='border-left-1'>
                <div className='item-options text-center'>
                  <div className='item-wrapper'>
                    <div className='item-cost'>
                      <h4 className='item-price'>$300</h4>
                      {true && (
                        <CardText className='shipping'>
                          <Badge color='light-success' pill>
                            Free Shipping
                          </Badge>
                        </CardText>
                      )}
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-1">
                    <Button className='mt-1 remove-wishlist' color='light'>
                      <X size={14} className='me-25' />
                      <span>Remove</span>
                    </Button>
                    <Button
                      className='btn-cart'
                      color='primary'
                    >
                      <Heart
                        size={14}
                        className={classnames('me-25', {
                          'fill-current': true
                        })}
                      />
                      <span className='text-truncate'>Wishlist</span>
                    </Button>
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
      <Col xl={9}>{true ? renderCart() : <h4>Your cart is empty</h4>}</Col>
      <Col xl={3}>
        <Card>
          <CardBody>
            <div>
              <h6 className='mb-2'>Price Details</h6>
              <ul>
                <li className='d-flex justify-content-between align-items-center mb-1'>
                  <div className='detail-title'>Total MRP</div>
                  <div className='detail-amt'>$598</div>
                </li>
                <li className='d-flex justify-content-between align-items-center mb-1'>
                  <div className='detail-title'>Bag Discount</div>
                  <div className='detail-amt discount-amt text-success'>-25$</div>
                </li>
                <li className='d-flex justify-content-between align-items-center mb-1'>
                  <div className='detail-title'>Estimated Tax</div>
                  <div className='detail-amt'>$1.3</div>
                </li>
                <li className='d-flex justify-content-between align-items-center mb-1'>
                  <div className='detail-title'>EMI Eligibility</div>
                  <a href='/' className='detail-amt text-primary' onClick={e => e.preventDefault()}>
                    Details
                  </a>
                </li>
                <li className='d-flex justify-content-between align-items-center mb-1'>
                  <div className='detail-title'>Delivery Charges</div>
                  <div className='detail-amt discount-amt text-success'>Free</div>
                </li>
              </ul>
              <hr />
              <ul className='list-unstyled'>
                <li className='d-flex justify-content-between align-items-center'>
                  <div className='detail-title detail-total'>Total</div>
                  <div className='detail-amt fw-bolder'>$574</div>
                </li>
              </ul>
              <Button
                block
                color='primary'
                onClick={() => stepper.next()}
                classnames='btn-next place-order'
              >
                Place Order
              </Button>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default Cart
