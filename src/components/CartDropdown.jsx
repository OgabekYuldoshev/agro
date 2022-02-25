// ** React Imports
import { Link } from 'react-router-dom'
import { Fragment, useState } from 'react'

// ** Third Party Components
import InputNumber from 'rc-input-number'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { ShoppingCart, Plus, Minus, Trash } from 'react-feather'
import { baseUrl } from "@utils"
// ** Reactstrap Imports
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem, Badge, Button, Row, Col, UncontrolledTooltip } from 'reactstrap'
import { useTranslation } from "react-i18next"
// ** Store & Actions
import { useDispatch } from 'react-redux'
import { deleteAllProducts, updateProduct } from '@store/ecommerce'
// ** Styles
import '@styles/react/libs/input-number/input-number.scss'
import 'react-perfect-scrollbar/dist/css/styles.css'

const CartDropdown = ({ t, store }) => {
    const { i18n } = useTranslation()
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const dispatch = useDispatch()
    const toggle = () => setDropdownOpen(prevState => !prevState)
    const renderCartItems = () => {
        if (store?.cart.length) {
            let total = 0

            return (
                <>
                    <PerfectScrollbar
                        options={{
                            wheelPropagation: false
                        }}
                    >
                        {store?.cart.map(product => {
                            total += product?.qty * product?.item?.price

                            return (
                                <Row xl={3} key={product?.item.id} className='d-flex align-items-center my-1'>
                                    <Col>
                                        <img className='d-block rounded me-1' src={product?.item?.photos?.length ? baseUrl + product?.item?.photos[0]?.image : require('@src/assets/images/pages/eCommerce/26.png').default} alt={product?.item?.name} height={100} />
                                    </Col>

                                    {/* <X size={30} /> */}
                                    <Col>
                                        <h6>
                                            <Link
                                                className='text-body'
                                                to={`/product/${product?.item.slug}`}
                                            >
                                                {product?.item[`name_${i18n.language}`]}
                                            </Link>
                                        </h6>
                                        <small>by {product?.item.partner_id}</small>
                                    </Col>
                                    <Col className='d-flex flex-column align-items-center justify-content-center'>
                                        <h5 >${product?.item.price}</h5>
                                        <div>
                                            <InputNumber
                                                min={1}
                                                max={50}
                                                upHandler={<Plus />}
                                                onChange={(val) => dispatch(updateProduct({ id: product?.item.id, qty: val }))}
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
                            <h6 className='mb-0'>{t('total')}:</h6>
                            <h6 className='text-primary mb-0'>${Number(total.toFixed(2))}</h6>
                        </div>
                        <Button tag={Link} to='/checkout' color='primary' block onClick={toggle}>
                            {t('checkout')}
                        </Button>
                    </li>
                </>
            )
        } else {
            return <p className='m-0 p-1 text-center'>{t('your_card_empty')}</p>
        }
    }

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle tag='a'>
                <ShoppingCart className='text-primary' size={25} />
                {store?.cart?.length > 0 && (
                    <Badge pill color='danger' className='badge-up'>
                        {store?.cart?.length}
                    </Badge>
                )}
            </DropdownToggle>
            <DropdownMenu end tag='ul' style={{ width: '550px', padding: '20px' }}>
                <DropdownItem tag='div' className='d-flex border-bottom' header>
                    <h4 className='mb-0 me-auto'>{t('my_cart')}</h4>
                    <Badge color='light-primary' pill>
                        {store?.cart?.length || 0} {t('item')}
                    </Badge>
                    <div className='ml-2 cursor-pointer' onClick={() => dispatch(deleteAllProducts())}>
                        <Trash id='delete' color='red' size={20} />
                        <UncontrolledTooltip placement='bottom' target='delete'>
                            {t('delete')}
                        </UncontrolledTooltip>
                    </div>
                </DropdownItem>
                {renderCartItems()}
            </DropdownMenu>
        </Dropdown>
    )
}

export default CartDropdown
