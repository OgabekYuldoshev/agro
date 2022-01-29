// ** React Imports
import { Link } from 'react-router-dom'
import { Fragment, useState } from 'react'

// ** Third Party Components
import InputNumber from 'rc-input-number'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { ShoppingCart, X, Plus, Minus, Trash } from 'react-feather'

// ** Reactstrap Imports
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem, Badge, Button, Row, Col, UncontrolledTooltip } from 'reactstrap'

// ** Store & Actions
import { useSelector, useDispatch } from 'react-redux'
import { deleteAllProducts } from '@store/ecommerce'

// ** Styles
import '@styles/react/libs/input-number/input-number.scss'
import 'react-perfect-scrollbar/dist/css/styles.css'

const CartDropdown = () => {
    // ** State
    const [dropdownOpen, setDropdownOpen] = useState(false)

    // ** Store Vars
    const dispatch = useDispatch()
    const store = useSelector(state => state.ecommerce)
    // // ** ComponentDidMount
    // useEffect(() => {
    //     dispatch(getCartItems())
    // }, [])

    // // ** Function to toggle Dropdown
    const toggle = () => setDropdownOpen(prevState => !prevState)

    // // ** Function to call on Dropdown Item Click
    // const handleDropdownItemClick = id => {
    //     dispatch(getProduct(id))
    //     toggle()
    // }

    // ** Loops through Cart Array to return Cart Items
    const renderCartItems = () => {
        if (store.cart.length) {
            let total = 0

            return (
                <>
                    <PerfectScrollbar
                        options={{
                            wheelPropagation: false
                        }}
                    >
                        {store.cart.map(product => {
                            total += product?.qty * product?.item?.price

                            return (
                                <Row xl={3} key={product?.item.id} className='d-flex align-items-center my-1'>
                                    <Col>
                                        <img className='d-block rounded me-1' src={product?.item?.image} alt={product?.item?.name} height={100} />
                                    </Col>

                                    {/* <X size={30} /> */}
                                    <Col>
                                        <h6>
                                            <Link
                                                className='text-body'
                                                to={`/product/${product?.item.slug}`}
                                            >
                                                {product?.item.name}
                                            </Link>
                                        </h6>
                                        <small>by {product?.item.brand}</small>
                                    </Col>
                                    <Col className='d-flex flex-column align-items-center justify-content-center'>
                                        <h5 >${product?.item.price}</h5>
                                        <div>
                                            <InputNumber
                                                min={1}
                                                max={10}
                                                upHandler={<Plus />}
                                                className='cart-input'
                                                defaultValue={product?.qty}
                                                downHandler={<Minus />}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            )
                        })}
                    </PerfectScrollbar>
                    <li className='border-top pt-1'>
                        <div className='d-flex justify-content-between mb-1'>
                            <h6 className='mb-0'>Total:</h6>
                            <h6 className='text-primary mb-0'>${Number(total.toFixed(2))}</h6>
                        </div>
                        <Button tag={Link} to='/checkout' color='primary' block onClick={toggle}>
                            Checkout
                        </Button>
                    </li>
                </>
            )
        } else {
            return <p className='m-0 p-1 text-center'>Your cart is empty</p>
        }
    }

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle tag='a'>
                <ShoppingCart size={25} />
                {store.cart.length > 0 && (
                    <Badge pill color='primary' className='badge-up'>
                        {store.cart.length}
                    </Badge>
                )}
            </DropdownToggle>
            <DropdownMenu end tag='ul' style={{ width: '550px', padding: '20px' }}>
                <DropdownItem tag='div' className='d-flex border-bottom' header>
                    <h4 className='mb-0 me-auto'>My Cart</h4>
                    <Badge color='light-primary' pill>
                        {store.cart.length || 0} Items
                    </Badge>
                    <div className='ml-2 cursor-pointer' onClick={() => dispatch(deleteAllProducts())}>
                        <Trash id='delete' color='red' size={20} />
                        <UncontrolledTooltip placement='bottom' target='delete'>
                            Delete all
                        </UncontrolledTooltip>
                    </div>
                </DropdownItem>
                {renderCartItems()}
            </DropdownMenu>
        </Dropdown>
    )
}

export default CartDropdown
