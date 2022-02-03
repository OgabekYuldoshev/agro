import { useState } from "react"
import { LogIn } from "react-feather"
import { Modal, ModalBody, ModalHeader, TabContent, TabPane, Nav, NavItem, NavLink, Form, Input, Row, Col, Label, Button } from "reactstrap"

const AuthComponents = () => {
    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(!open)
    const [active, setActive] = useState('1')

    const toggleTab = tab => {
        if (active !== tab) {
            setActive(tab)
        }
    }
    return (
        <>
            <div onClick={toggle}>
                <LogIn size={25} />
            </div>
            <Modal
                isOpen={open}
                toggle={toggle}
                className='modal-dialog-centered modal-lg'
            >
                <ModalHeader className='bg-transparent' toggle={toggle}></ModalHeader>
                <ModalBody className='px-sm-3 mx-40 pb-5'>
                    <h2 className='text-center mb-1'>Auth</h2>
                    <Nav className='justify-content-center' tabs>
                        <NavItem>
                            <NavLink
                                active={active === '1'}
                                onClick={() => {
                                    toggleTab('1')
                                }}
                            >
                                Profilga kirish
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                active={active === '2'}
                                onClick={() => {
                                    toggleTab('2')
                                }}
                            >
                                Ro'yxatdan o'tish
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent className='py-50' activeTab={active}>
                        <TabPane tabId='1'>
                            <Login />
                        </TabPane>
                        <TabPane tabId='2'>
                            <Register />
                        </TabPane>
                    </TabContent>
                </ModalBody>
            </Modal>
        </>
    )
}

const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault()
        const { password } = e.target
        console.log(password.value)
    }
    return (
        <Form onSubmit={handleLogin}>
            <Row xl={1}>
                <Col>
                    <Label>Username</Label>
                    <Input name="username" placeholder="Username" />
                </Col>
                <Col className="mt-2">
                    <Label>Parol</Label>
                    <Input name="password" type="password" placeholder="Parol" />
                </Col>
                <Col className="mt-2 d-flex justify-content-end gap-1">
                    <Button type="button" color="danger" outline>Bekor qilish</Button>
                    <Button type="submit" color="primary">Kirish</Button>
                </Col>
            </Row>
        </Form>
    )
}

const Register = () => {
    return (
        <Form>
            <Row xl={1}>
                <Col className="mb-1" xl={4}>
                    <Label>Ismingiz</Label>
                    <Input name="first_name" placeholder="Ismingizni kiriting..." />
                </Col>
                <Col className="mb-1" xl={4}>
                    <Label>Familyangiz</Label>
                    <Input name="last_name" placeholder="Familyangiz kiriting..." />
                </Col>
                <Col className="mb-1" xl={4}>
                    <Label>Sharfingiz</Label>
                    <Input name="second_name" placeholder="Sharfingiz kiriting..." />
                </Col>
                <Col className="mb-1" xl={6}>
                    <Label>Username</Label>
                    <Input name="username" placeholder="Username kiriting..." />
                </Col>
                <Col className="mb-1" xl={6}>
                    <Label>Telfon raqam</Label>
                    <Input name="phone_number" placeholder="Telfon raqam kiriting..." />
                </Col>
                <Col className="mb-1" xl={6}>
                    <Label>Parol</Label>
                    <Input name="password" placeholder="Parol kiriting..." />
                </Col>
                <Col className="mb-1" xl={6}>
                    <Label>Parolni tasdiqlang</Label>
                    <Input name="password_confirmation" placeholder="Parolni tasdiqlansh..." />
                </Col>
                <Col className="mt-2 d-flex justify-content-end gap-1">
                    <Button color="danger" outline>Bekor qilish</Button>
                    <Button color="primary">Ro'yxatdan O'tish</Button>
                </Col>
            </Row>
        </Form>
    )
}
export default AuthComponents