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
    const toggle = () => setIsOpen(!isOpen)
    const history = useHistory()
    const dispatch = useDispatch()
    const openAuthModal = () => dispatch(handleAuthModal())
    const auth = useSelector(state => state.auth)
    const wishlist = useSelector(state => state.wishlist?.wishlist)
    const ecommerce = useSelector(state => state.ecommerce)
    return (
        <>
            <nav style={{ borderBottom: "2px solid #074C8F" }} className="text-pirmary shadow layout text-white">
                <div style={{ borderBottom: "1px solid #074C8F" }} className="text-primary d-flex align-items-center justify-content-between ">
                    <span className="">
                        <I.Phone size={18} />
                        +998(71) 209-68-68
                    </span>
                    <RS.UncontrolledButtonDropdown>
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
                    </RS.UncontrolledButtonDropdown>
                </div>
                <RS.Row xl={4} sm={1} className="align-items-center">
                    <RS.Col className="d-flex justify-content-between align-items-center">
                        <Link to='/' className="d-flex align-items-center gap-1">
                            <img src={LOGO} alt="logo" width={100} />
                            <h5 className="text-primary">QoraSuvAgro</h5>
                        </Link>
                        <I.List onClick={toggle} size={25} className="d-block d-lg-none" />
                    </RS.Col>
                    <RS.Col xl={6} className="d-flex align-items-center gap-1 mb-1 mb-lg-0">
                        <RS.Button color="primary" onClick={toggle} className="d-none d-lg-block" >
                            <I.List size={12} />
                        </RS.Button>
                        <RS.Input type='text' placeholder={t('search')} />
                        <CategoryComponent t={t} open={isOpen} toggle={toggle} />
                    </RS.Col>
                    <RS.Col className="d-none d-lg-flex justify-content-end align-items-center gap-2">
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
                <div style={styleBar} className="bg-primary d-lg-none">
                    {/* <CartDropdown t={t} store={ecommerce} /> */}
                    <div onClick={() => history.push('/checkout')} className="position-relative">
                        <I.ShoppingCart className='text-primary' size={25} />
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
                </div>
                <AuthComponent t={t} toggle={openAuthModal} />
            </nav>
        </>
    )
}

const DropdownMenu = ({ t, data }) => {
    const dispatch = useDispatch()
    const logOut = () => {
        dispatch(handleLogout())
        dispatch(clearWishlist())
    }
    return (
        <RS.UncontrolledButtonDropdown>
            <RS.DropdownToggle tag='div' className="cursor-pointer">
                <I.User className='text-primary' size={25} />
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