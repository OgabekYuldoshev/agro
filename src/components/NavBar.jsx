import { useState } from "react"
import * as I from "react-feather"
import * as RS from 'reactstrap'
import { Link, useHistory } from "react-router-dom"
import { handleAuthModal, handleLogout } from "../redux/Auth"
import CartDropdown from "components/CartDropdown"
import AuthComponent from "components/Auth"
import CategoryComponent from "components/Category"
import LOGO from "@src/assets/images/logo/logo.png"
import { useDispatch, useSelector } from "react-redux"
import { useTranslation } from 'react-i18next'
import { clearWishlist } from '@store/Wishlist'
import { searchProducts } from "@store/product"
import { setExchange } from "@store/app"
import { baseUrl } from "@utils"
import ReactSelect from "react-select"
import useCurrency from "../hooks/useCurrency"


const styleBar = {
    width: '100%',
    position: 'fixed',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 50px',
    bottom: 0,
    zIndex: 10,
    left: 0
}

export default () => {
    const { i18n, t } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const { contacts, categories, pages } = useSelector(state => state.app)
    const toggle = () => setIsOpen(!isOpen)
    const history = useHistory()
    const dispatch = useDispatch()
    const openAuthModal = () => dispatch(handleAuthModal())
    const auth = useSelector(state => state.auth)
    const { symbol } = useSelector(state => state.app)
    const wishlist = useSelector(state => state.wishlist?.wishlist)
    const ecommerce = useSelector(state => state.ecommerce)
    const { searchProduct, searchLoading } = useSelector(state => state.product)
    const handleSearch = (e) => {
        setIsOpenMenu(true)
        dispatch(searchProducts(e.target.value))
    }
    const about = pages?.filter(p => parseInt(p.page_id) === 1)
    const service = pages?.filter(p => parseInt(p.page_id) === 2)
    const useful = pages?.filter(p => parseInt(p.page_id) === 3)
    const media = pages?.filter(p => parseInt(p.page_id) === 4)

    return (
        <>
            <nav className="text-pirmary shadow layout text-white">
                <div style={{ borderBottom: "1px solid #074C8F", padding: "5px 5px" }} className="text-primary d-flex align-items-center justify-content-between ">
                    <span className="">
                        <I.Phone size={18} />
                        <a href={`tel:${contacts && contacts[0]?.tel}`}>{contacts && contacts[0]?.tel}</a>
                    </span>
                    <div className="d-flex align-items-center justify-content-center gap-1">
                        {/* <RS.UncontrolledButtonDropdown>
                            <RS.DropdownToggle className="text-primary" color='flat-primary' outline caret>
                                {{
                                    uz: 'Uzbek',
                                    en: 'English',
                                    ru: "Russian"
                                }[i18n.language]}
                            </RS.DropdownToggle>
                            <RS.DropdownMenu>
                                <RS.DropdownItem tag='uz' onClick={() => i18n.changeLanguage('uz')}>UZ</RS.DropdownItem>
                                <RS.DropdownItem tag='ru' onClick={() => i18n.changeLanguage('ru')}>RU</RS.DropdownItem>
                                <RS.DropdownItem tag='en' onClick={() => i18n.changeLanguage('en')}>EN</RS.DropdownItem>
                            </RS.DropdownMenu>
                        </RS.UncontrolledButtonDropdown> */}
                        <ReactSelect
                            isSearchable={false}
                            defaultValue={
                                {
                                    UZS: { label: 'UZS', value: "UZS" },
                                    USD: { label: 'USD', value: "USD" },
                                    RUB: { label: 'RUB', value: "RUB" }
                                }[symbol]
                            }
                            onChange={(e) => dispatch(setExchange(e?.value))}
                            options={[
                                { label: 'UZS', value: "UZS" },
                                { label: 'USD', value: "USD" },
                                { label: 'RUB', value: "RUB" }
                            ]}
                        />
                        <ReactSelect
                            isSearchable={false}
                            defaultValue={{
                                uz: { label: 'Uzbek', value: "uz" },
                                en: { label: 'English', value: "en" },
                                ru: { label: 'Russia', value: "ru" }
                            }[i18n.language]}
                            onChange={(e) => i18n.changeLanguage(e?.value)}
                            options={[
                                { label: 'Uzbek', value: "uz" },
                                { label: 'English', value: "en" },
                                { label: 'Russia', value: "ru" }
                            ]}
                        />
                    </div>
                </div>
                <RS.Row xl={3} sm={1} className="align-items-center justify-content-between">
                    <RS.Col md={3} className="d-flex justify-content-between align-items-center">
                        <Link to='/' className="d-flex align-items-center gap-1">
                            <img src={LOGO} alt="logo" width={100} />
                            <h1 className="text-primary text-center h5">Qorasuv Agro kimyo ta'minot</h1>
                        </Link>
                        <I.List onClick={toggle} size={25} className="d-block text-primary d-lg-none" />
                    </RS.Col>
                    <RS.Col xl={4} md={5} className="position-relative d-flex align-items-center gap-1 mb-1 mb-lg-0">
                        {/* <RS.Button color="primary" onClick={toggle} className="d-none d-md-block" >
                            <I.List size={12} />
                        </RS.Button> */}
                        <RS.Input type='text' placeholder={t('search')} onChange={handleSearch} />
                        {
                            isOpenMenu ? <DropdownItemMenu onBlur={() => setIsOpenMenu(false)} i18n={i18n} t={t} products={searchProduct} isLoading={searchLoading} /> : null
                        }
                        <CategoryComponent t={t} open={isOpen} toggle={toggle} />
                    </RS.Col>
                    <RS.Col md={3} className="d-none d-lg-flex justify-content-end align-items-center gap-2">
                        <CartDropdown t={t} store={ecommerce} />
                        <div onClick={() => history.push('/wishlist')} className="d-flex position-relative flex-column justify-content-center align-items-center cursor-pointer">
                            {
                                wishlist?.length !== 0 && (
                                    <RS.Badge pill color='danger' className='badge-up'>
                                        {wishlist?.length}
                                    </RS.Badge>
                                )
                            }
                            <I.Heart className='text-primary' size={25} />
                        </div>
                        {
                            auth.isAuth ? (
                                <DropdownMenu t={t} data={auth} />

                            ) : (
                                <div onClick={openAuthModal} className="cursor-pointer">
                                    <I.LogIn className='text-primary' size={25} />
                                </div>
                            )
                        }
                    </RS.Col>
                </RS.Row>
                <div className="d-none d-sm-flex text-black align-items-center justify-content-center" >
                    <RS.UncontrolledButtonDropdown>
                        <RS.DropdownToggle color='flat-primary' caret>
                            {t('about')}
                        </RS.DropdownToggle>
                        <RS.DropdownMenu>
                            {
                                about?.map((item, index) => (
                                    <RS.DropdownItem key={index} to={`/page/${item?.id}`} tag={Link}>{item[`title_${i18n.language}`]}</RS.DropdownItem>
                                ))
                            }
                            <RS.DropdownItem to={`/partners`} tag={Link}> {t('partners')}</RS.DropdownItem>
                        </RS.DropdownMenu>
                    </RS.UncontrolledButtonDropdown>
                    <RS.UncontrolledButtonDropdown>
                        <RS.DropdownToggle color='flat-primary' caret>
                            {t('category')}
                        </RS.DropdownToggle>
                        <RS.DropdownMenu>
                            {
                                categories?.map((item, index) => (
                                    <RS.DropdownItem key={index} to={`/category/${item?.id}`} tag={Link}>{item[`name_${i18n.language}`]}</RS.DropdownItem>
                                ))
                            }

                        </RS.DropdownMenu>
                    </RS.UncontrolledButtonDropdown>
                    {
                        service?.length ? (
                            <RS.UncontrolledButtonDropdown>
                                <RS.DropdownToggle color='flat-primary' caret>
                                    {t('our_services')}
                                </RS.DropdownToggle>
                                <RS.DropdownMenu>
                                    {
                                        service?.map((item, index) => (
                                            <RS.DropdownItem key={index} to={`/page/${item?.id}`} tag={Link}>{item[`title_${i18n.language}`]}</RS.DropdownItem>
                                        ))
                                    }

                                </RS.DropdownMenu>
                            </RS.UncontrolledButtonDropdown>
                        ) : null
                    }
                    {
                        useful?.length ? (
                            <RS.UncontrolledButtonDropdown>
                                <RS.DropdownToggle color='flat-primary' caret>
                                    {t('our_services')}
                                </RS.DropdownToggle>
                                <RS.DropdownMenu>
                                    {
                                        useful?.map((item, index) => (
                                            <RS.DropdownItem key={index} to={`/page/${item?.id}`} tag={Link}>{item[`title_${i18n.language}`]}</RS.DropdownItem>
                                        ))
                                    }

                                </RS.DropdownMenu>
                            </RS.UncontrolledButtonDropdown>
                        ) : null
                    }
                    <RS.UncontrolledButtonDropdown>
                        <RS.DropdownToggle color='flat-primary' caret>
                            {t('media')}
                        </RS.DropdownToggle>
                        <RS.DropdownMenu>
                            <RS.DropdownItem to={`/media`} tag={Link}>{t('gallery')}</RS.DropdownItem>
                            {
                                media?.length ? media?.map((item, index) => (
                                    <RS.DropdownItem key={index} to={`/page/${item?.id}`} tag={Link}>{item[`title_${i18n.language}`]}</RS.DropdownItem>
                                )) : null
                            }
                        </RS.DropdownMenu>
                    </RS.UncontrolledButtonDropdown>
                    <RS.UncontrolledButtonDropdown>
                        <RS.DropdownToggle color='flat-primary'>
                            <Link to={'/contacts'}>
                                {t('network')}
                            </Link>
                        </RS.DropdownToggle>
                    </RS.UncontrolledButtonDropdown>
                </div>

                <div style={styleBar} className="bg-primary d-lg-none">
                    {/* <CartDropdown t={t} store={ecommerce} /> */}
                    <div onClick={() => history.push('/checkout')} className="position-relative">
                        <I.ShoppingCart className='text-white' size={25} />
                        {ecommerce?.cart?.length > 0 && (
                            <RS.Badge pill color='danger' className='badge-up'>
                                {ecommerce?.cart?.length}
                            </RS.Badge>
                        )}
                    </div>
                    <div onClick={() => history.push('/wishlist')} className="d-flex position-relative flex-column justify-content-center align-items-center cursor-pointer">
                        {
                            wishlist?.length !== 0 && (
                                <RS.Badge pill color='danger' className='badge-up'>
                                    {wishlist?.length}
                                </RS.Badge>
                            )
                        }
                        <I.Heart className='text-white' size={25} />
                    </div>
                    {
                        auth.isAuth ? (
                            <DropdownMenu text="white" t={t} data={auth} />
                        ) : (
                            <div onClick={openAuthModal} className="cursor-pointer">
                                <I.LogIn className='text-white' size={25} />
                            </div>
                        )
                    }
                </div>
                <AuthComponent t={t} toggle={openAuthModal} />
            </nav>
        </>
    )
}

const DropdownItemMenu = ({ products, i18n, t, onBlur }) => {
    const {priceFormat, currencyPrice, symbol: symbolPrice} = useCurrency()
    return (
        <RS.ListGroup onMouseLeave={onBlur} tag='div' style={{ zIndex: 10 }} className="position-absolute top-100 start-0 bg-white w-full text-black mt-1">
            {
                products?.length !== 0 ? products?.slice(0, 12)?.map((item) => (
                    <RS.ListGroupItem onClick={onBlur} tag={Link} to={`/product/${item?.id}`} className="d-flex align-items-center justify-content-between gap-2">
                        <img width={30} height={30} src={item.photos?.length ? baseUrl + item.photos[0].image : 'https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png'} />
                        <span>
                            <b>{item[`name_${i18n.language}`]}</b>
                        </span>
                        <span>
                            <b>
                                {priceFormat(currencyPrice(item.price))}{' '}{symbolPrice}
                            </b>
                        </span>
                    </RS.ListGroupItem>
                )) : (
                    <RS.ListGroupItem className="text-center w-100">
                        {t('not_found')}
                    </RS.ListGroupItem>
                )
            }
        </RS.ListGroup >
    )
}

const DropdownMenu = ({ t, data, text }) => {
    const dispatch = useDispatch()
    const logOut = () => {
        dispatch(handleLogout())
        dispatch(clearWishlist())
    }
    return (
        <RS.UncontrolledButtonDropdown>
            <RS.DropdownToggle tag='div' className="cursor-pointer">
                <I.User className={text ? "text-white" : "text-primary"} size={25} />
            </RS.DropdownToggle>
            <RS.DropdownMenu>
                <RS.DropdownItem tag={Link} to="/profile" className="d-flex align-items-center gap-1">
                    <I.User size={18} />
                    <span>
                        {data?.userData?.first_name}
                    </span>
                </RS.DropdownItem>
                <RS.DropdownItem tag='span' onClick={logOut} className="text-danger d-flex align-items-center gap-1">
                    <I.LogOut size={18} />
                    <span>
                        {t('logout')}
                    </span>
                </RS.DropdownItem>
            </RS.DropdownMenu>
        </RS.UncontrolledButtonDropdown>
    )
}