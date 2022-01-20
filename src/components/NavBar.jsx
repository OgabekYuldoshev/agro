import { useState } from "react"
import * as I from "react-feather"
import * as RS from 'reactstrap'

const fakeData = [
    {
        title: 'Biz Haqimizda',
        child: ['Kompanya haqida', 'Jamoa haqida', 'Hamkorlar']
    },
    {
        title: 'Mahsulotlar',
        child: ['Kompanya haqida', 'Jamoa haqida', 'Hamkorlar']
    },
    {
        title: 'Xizmatlar',
        child: ['Kompanya haqida', 'Jamoa haqida', 'Hamkorlar']
    },
    {
        title: 'Media',
        child: ['Kompanya haqida', 'Jamoa haqida', 'Hamkorlar']
    },
    {
        title: 'Aloqa',
        child: ['Kompanya haqida', 'Jamoa haqida', 'Hamkorlar']
    }
]

export default () => {
    const [language, setLanguage] = useState('UZ')
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    const menu = [
        {
            name: 'Savat',
            icon: <I.ShoppingCart />
        },
        {
            name: 'Wish list',
            icon: <I.Heart />
        },
        {
            name: 'Register',
            icon: <I.AtSign />
        }
    ]

    return (
        <>
            <nav className="px-5 bg-success text-white">
                <div className=" d-flex align-items-center justify-content-between border-bottom">
                    <span className="">
                        <I.Phone size={18} />
                        +998(71) 209-68-68, 209-68-26, +998(93) 541-41-41
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
                <RS.Row xl={4} className="py-2">
                    <RS.Col>
                        <h1 className="text-white">Agro Sanoat</h1>
                    </RS.Col>
                    <RS.Col xl={6}>
                        <RS.InputGroup>
                            <RS.Button color="light" onClick={toggle}>
                                <I.List size={12} />
                            </RS.Button>
                            <RS.Input type='text' placeholder="Qidirish" />
                        </RS.InputGroup>
                    </RS.Col>
                    <RS.Col className="d-flex justify-content-end gap-2">
                        {
                            menu?.map((m, i) => (
                                <div key={i} className="d-flex flex-column justify-content-center align-items-center cursor-pointer">
                                    {m.icon}
                                    <span>{m.name}</span>
                                </div>
                            ))
                        }
                    </RS.Col>
                </RS.Row>
                <RS.Collapse isOpen={isOpen}>
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
                </RS.Collapse>
            </nav>
        </>
    )
}