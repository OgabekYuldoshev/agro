import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useFormik } from "formik"
import { Modal, ModalBody, ModalHeader, TabContent, TabPane, Nav, NavItem, NavLink, Form, Input, Row, Col, Label, Button } from "reactstrap"
import * as Yup from 'yup'
import { login, register } from "@store/Auth"

const AuthComponents = ({ toggle }) => {
    const [active, setActive] = useState('1')
    const store = useSelector(state => state.auth)

    const toggleTab = tab => {
        if (active !== tab) {
            setActive(tab)
        }
    }
    return (
        <>

            <Modal
                isOpen={store.modal}
                toggle={toggle}
                className='modal-dialog-centered modal-lg'
            >
                <ModalHeader className='bg-transparent' toggle={toggle}></ModalHeader>
                <ModalBody className='px-sm-3 mx-40 pb-5'>
                    <h2 className='text-center mb-1'>Ro'yxatdan o'tish yoki Profilga kirish</h2>
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
                            <Login toggle={toggle} />
                        </TabPane>
                        <TabPane tabId='2'>
                            <Register toggle={toggle} tab={toggleTab} />
                        </TabPane>
                    </TabContent>
                </ModalBody>
            </Modal>
        </>
    )
}

const LoginValidation = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    password: Yup.string().min(6, 'Too Short!').required('Required')
})

const Login = ({ toggle }) => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            username: null,
            password: null
        },
        validationSchema: LoginValidation,
        onSubmit: values => {
            dispatch(login(values))
        }
    })
    return (
        <Form onSubmit={formik.handleSubmit}>
            <Row xs={1}>
                <Col>
                    <Label>Username</Label>
                    <Input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        invalid={formik?.errors['username'] && formik?.touched['username'] && true}
                        name="username"
                        placeholder="Username" />
                </Col>
                <Col className="mt-2">
                    <Label>Parol</Label>
                    <Input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        invalid={formik?.errors['password'] && formik?.touched['password'] && true}
                        name="password"
                        type="password"
                        placeholder="Parol" />
                </Col>
                <Col className="mt-2 d-flex justify-content-end gap-1">
                    <Button onClick={toggle} type="reset" color="danger" outline>Bekor qilish</Button>
                    <Button type="submit" color="primary">Kirish</Button>
                </Col>
            </Row>
        </Form>
    )
}


const RegisterValidation = Yup.object().shape({
    first_name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    last_name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    second_name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    phone_number: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    username: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    password: Yup.string().min(6, 'Too Short!').required('Required'),
    password_confirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
})

const Register = ({ toggle, tab }) => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            first_name: null,
            last_name: null,
            second_name: null,
            username: null,
            phone_number: null,
            password: null,
            password_confirmation: null
        },
        validationSchema: RegisterValidation,
        onSubmit: values => {
            dispatch(register(values)).then(() => tab('1'))
        }
    })
    return (
        <Form onSubmit={formik.handleSubmit}>
            <Row xl={1}>
                <Col className="mb-1" xl={4}>
                    <Label>Ismingiz</Label>
                    <Input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="first_name"
                        invalid={formik?.errors["first_name"] && formik?.touched["first_name"] && true}
                        placeholder="Ismingizni kiriting..." />
                </Col>
                <Col className="mb-1" xl={4}>
                    <Label>Familyangiz</Label>
                    <Input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        invalid={formik?.errors['last_name'] && formik?.touched["last_name"] && true}
                        name="last_name"
                        placeholder="Familyangiz kiriting..." />
                </Col>
                <Col className="mb-1" xl={4}>
                    <Label>Sharfingiz</Label>
                    <Input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="second_name"
                        invalid={formik?.errors['second_name'] && formik?.touched["second_name"] && true}
                        placeholder="Sharfingiz kiriting..." />
                </Col>
                <Col className="mb-1" xl={6}>
                    <Label>Username</Label>
                    <Input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        invalid={formik?.errors['username'] && formik?.touched["username"] && true}
                        name="username"
                        placeholder="Username kiriting..." />
                </Col>
                <Col className="mb-1" xl={6}>
                    <Label>Telfon raqam</Label>
                    <Input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="phone_number"
                        invalid={formik?.errors['phone_number'] && formik?.touched["phone_number"] && true}
                        placeholder="Telfon raqam kiriting..." />
                </Col>
                <Col className="mb-1" xl={6}>
                    <Label>Parol</Label>
                    <Input
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        invalid={formik?.errors['password'] && formik?.touched["password"] && true}
                        name="password"
                        placeholder="Parol kiriting..." />
                </Col>
                <Col className="mb-1" xl={6}>
                    <Label>Parolni tasdiqlang</Label>
                    <Input
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="password_confirmation"
                        invalid={formik?.errors['password_confirmation'] && formik?.touched["password_confirmation"] && true}
                        placeholder="Parolni tasdiqlansh..." />
                </Col>
                <Col className="mt-2 d-flex justify-content-end gap-1">
                    <Button onClick={toggle} type="reset" color="danger" outline>Bekor qilish</Button>
                    <Button color="primary" type="submit">Ro'yxatdan O'tish</Button>
                </Col>
            </Row>
        </Form>
    )
}
export default AuthComponents