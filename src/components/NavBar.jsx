import { useState } from "react"
import * as I from "react-feather"
import * as RS from 'reactstrap'
import { Link, useHistory } from "react-router-dom"
import CartDropdown from "components/CartDropdown"
import AuthComponent from "components/Auth"
import CategoryComponent from "components/Category"
import LOGO from "@src/assets/images/logo/logo.png"
// const fakeData = [
//     {
//         title: 'Biz Haqimizda',
//         child: ['Kompanya haqida', 'Jamoa haqida', 'Hamkorlar']
//     },
//     {
//         title: 'Mahsulotlar',
//         child: ['Kompanya haqida', 'Jamoa haqida', 'Hamkorlar']
//     },
//     {
//         title: 'Xizmatlar',
//         child: ['Kompanya haqida', 'Jamoa haqida', 'Hamkorlar']
//     },
//     {
//         title: 'Media',
//         child: ['Kompanya haqida', 'Jamoa haqida', 'Hamkorlar']
//     },
//     {
//         title: 'Aloqa',
//         child: ['Kompanya haqida', 'Jamoa haqida', 'Hamkorlar']
//     }
// ]

export default () => {
    const [language, setLanguage] = useState('UZ')
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    const history = useHistory()

    return (
        <>
            <nav style={{ background: '#7367F0' }} className="px-xl-5 px-2 text-white">
                <div className=" d-flex align-items-center justify-content-between border-bottom">
                    <span className="">
                        <I.Phone size={18} />
                        +998(71) 209-68-68
                    </span>
                    <RS.UncontrolledButtonDropdown>
                        <RS.DropdownToggle className="text-white" color='flat-white' outline caret>
                            {language}
                        </RS.DropdownToggle>
                        <RS.DropdownMenu>
                            <RS.DropdownItem tag='uz' onClick={() => setLanguage('UZ')}>UZ</RS.DropdownItem>
                            <RS.DropdownItem tag='ru' onClick={() => setLanguage('RU')}>RU</RS.DropdownItem>
                            <RS.DropdownItem tag='en' onClick={() => setLanguage('EN')}>EN</RS.DropdownItem>
                        </RS.DropdownMenu>
                    </RS.UncontrolledButtonDropdown>
                </div>
                <RS.Row xl={4} sm={1} className="align-items-center">
                    <RS.Col className="d-flex justify-content-between align-items-center">
                        <Link to='/' className="d-flex align-items-center gap-1">
                            <img src={LOGO} alt="logo" width={100} />
                            <h5 className="text-white">QoraSuvAgro</h5>
                        </Link>
                        <I.List onClick={toggle} size={25} className="d-block d-lg-none" />
                    </RS.Col>
                    <RS.Col xl={6} className="d-flex align-items-center gap-1 mb-1 mb-lg-0">
                        {/* <RS.InputGroup className="d-none d-lg-block"> */}
                        <RS.Button color="light" onClick={toggle} className="d-none d-lg-block" >
                            <I.List size={12} />
                        </RS.Button>
                        <RS.Input type='text' placeholder="Qidirish" />
                        {/* </RS.InputGroup> */}
                        {/* <RS.Input type='text' placeholder="Qidirish" className="d-block d-lg-none mb-2" /> */}
                        <CategoryComponent open={isOpen} toggle={toggle} />
                    </RS.Col>
                    <RS.Col className="d-none d-lg-flex justify-content-end align-items-center gap-2">
                        <CartDropdown />
                        <div onClick={() => history.push('/wishlist')} className="d-flex flex-column justify-content-center align-items-center cursor-pointer">
                            <I.Heart size={25} />
                        </div>
                        <AuthComponent />
                    </RS.Col>
                </RS.Row>
                {/* <RS.Collapse isOpen={isOpen}>
                    <RS.Row xl={5} className="py-1 border-top">
                        {
                            fakeData?.map((data, i) => (
                                <RS.Col key={i}>
                                    <h4 className="text-white pb-1">{data.title}</h4>
                                    <div className="px-2 d-flex flex-column justify-content-center">
                                        {
                                            data?.child?.map((ch, index) => (
                                                <span className="mb-1 cursor-pointer" key={index}>{ch}</span>
                                            ))
                                        }
                                    </div>
                                </RS.Col>
                            ))
                        }
                    </RS.Row>
                </RS.Collapse> */}
            </nav>
        </>
    )
}