import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useFormik } from "formik"
import { Modal, ModalBody, ModalHeader, TabContent, TabPane, Nav, NavItem, NavLink, Form, Input, Row, Col, Label, Button } from "reactstrap"
import * as Yup from 'yup'
import { login, register } from "@store/Auth"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const AuthComponents = ({ t, toggle }) => {
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
                    <h2 className='text-center mb-1'>{t('signin_or_signup')}</h2>
                    <Nav className='justify-content-center' tabs>
                        <NavItem>
                            <NavLink
                                active={active === '1'}
                                onClick={() => {
                                    toggleTab('1')
                                }}
                            >
                                {t('login')}
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                active={active === '2'}
                                onClick={() => {
                                    toggleTab('2')
                                }}
                            >
                                {t('register')}
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent className='py-50' activeTab={active}>
                        <TabPane tabId='1'>
                            <Login t={t} toggle={toggle} />
                        </TabPane>
                        <TabPane tabId='2'>
                            <Register t={t} toggle={toggle} tab={toggleTab} />
                        </TabPane>
                    </TabContent>
                </ModalBody>
            </Modal>
        </>
    )
}

const LoginValidation = Yup.object().shape({
    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
    password: Yup.string().min(6, 'Too Short!').required('Required')
})

const Login = ({ t, toggle }) => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            email: null,
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
                    <Label>{t("email")}</Label>
                    <Input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        invalid={formik?.errors['email'] && formik?.touched['email'] && true}
                        type="email"
                        name="email"
                        placeholder={t("enter")} />
                </Col>
                <Col className="mt-2">
                    <Label>{t("password")}</Label>
                    <Input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        invalid={formik?.errors['password'] && formik?.touched['password'] && true}
                        name="password"
                        type="password"
                        placeholder={t("enter")} />
                </Col>
                <Col className="mt-2 d-flex justify-content-end gap-1">
                    <Button onClick={() => {
                        formik.resetForm()
                        toggle()
                    }} type="reset" color="danger" outline>{t('cancel')}</Button>
                    <Button type="submit" color="primary">{t('signin')}</Button>
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
    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
    password: Yup.string().min(6, 'Too Short!').required('Required'),
    password_confirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
})

const Register = ({ t, tab, toggle }) => {
    const dispatch = useDispatch()

    const handleVerif = () => {
        return MySwal.fire({
            icon: 'success',
            timer: 4000,
            title: t('email_verified'),
            text: t('signup_end'),
            showConfirmButton: false
        })
    }

    // const handleAjax = () => {
    //     MySwal.fire({
    //         icon: 'warning',
    //         title: t('email_confirmation'),
    //         text: t('send_code_text'),
    //         input: 'text',
    //         inputPlaceholder: t("code"),
    //         inputAttributes: {
    //             maxlength: 4
    //         },
    //         customClass: {
    //             input: 'mx-3 mt-2 text-center',
    //             confirmButton: 'btn btn-success'
    //         },
    //         buttonsStyling: false,
    //         confirmButtonText: t("confirmation"),
    //         showLoaderOnConfirm: true,
    //         preConfirm(login) {
    //             return fetch(`//api.github.com/users/${login}`)
    //                 .then(function (response) {
    //                     if (!response.ok) {
    //                         throw new Error(response.statusText)
    //                     }
    //                     return response.json()
    //                 })
    //                 .catch(function (error) {
    //                     MySwal.showValidationMessage(`Request failed:  ${error}`)
    //                 })
    //         }
    //     }).then(function (result) {
    //         if (result.value) {
    //             MySwal.fire({
    //                 icon: 'success',
    //                 timer: 4000,
    //                 title: t('email_verified'),
    //                 text: t('signup_end'),
    //                 showConfirmButton: false
    //             })
    //         }
    //     })
    // }


    const formik = useFormik({
        initialValues: {
            first_name: null,
            last_name: null,
            second_name: null,
            email: null,
            phone_number: null,
            password: null,
            password_confirmation: null
        },
        validationSchema: RegisterValidation,
        onSubmit: values => {
            dispatch(register(values)).then(() => {
                tab('1')
                handleVerif()
            })
        }
    })
    return (
        <Form onSubmit={formik.handleSubmit}>
            <Row xl={1}>
                <Col className="mb-1" xl={4}>
                    <Label>{t("first_name")}</Label>
                    <Input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="first_name"
                        invalid={formik?.errors["first_name"] && formik?.touched["first_name"] && true}
                        placeholder={t("enter")} />
                </Col>
                <Col className="mb-1" xl={4}>
                    <Label>{t("last_name")}</Label>
                    <Input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        invalid={formik?.errors['last_name'] && formik?.touched["last_name"] && true}
                        name="last_name"
                        placeholder={t("enter")} />
                </Col>
                <Col className="mb-1" xl={4}>
                    <Label>{t("second_name")}</Label>
                    <Input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="second_name"
                        invalid={formik?.errors['second_name'] && formik?.touched["second_name"] && true}
                        placeholder={t("enter")} />
                </Col>
                <Col className="mb-1" xl={6}>
                    <Label>{t("email")}</Label>
                    <Input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        invalid={formik?.errors['email'] && formik?.touched["email"] && true}
                        name="email"
                        type="email"
                        placeholder={t("enter")} />
                </Col>
                <Col className="mb-1" xl={6}>
                    <Label>{t("phone_number")}</Label>
                    <Input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="phone_number"
                        invalid={formik?.errors['phone_number'] && formik?.touched["phone_number"] && true}
                        placeholder={t("enter")} />
                </Col>
                <Col className="mb-1" xl={6}>
                    <Label>{t("password")}</Label>
                    <Input
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        invalid={formik?.errors['password'] && formik?.touched["password"] && true}
                        name="password"
                        placeholder={t("enter")} />
                </Col>
                <Col className="mb-1" xl={6}>
                    <Label>{t("password_confirmation")}</Label>
                    <Input
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="password_confirmation"
                        invalid={formik?.errors['password_confirmation'] && formik?.touched["password_confirmation"] && true}
                        placeholder={t("enter")} />
                </Col>
                <Col className="mt-2 d-flex justify-content-end gap-1">
                    <Button onClick={() => {
                        formik.resetForm()
                        toggle()
                    }} type="reset" color="danger" outline>{t('cancel')}</Button>
                    <Button color="primary" type="submit">{t('signup')}</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default AuthComponents