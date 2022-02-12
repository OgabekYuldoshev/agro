import { useFormik } from "formik"
import { Label, Row, Col, Input, Form, Button } from "reactstrap"
import { changePassword } from "@store/Auth"
import { useDispatch } from "react-redux"

import * as Yup from "yup"
const ValidSchema = Yup.object({
    old_password: Yup.string()
        .max(15)
        .min(6)
        .required("Required"),
    new_password: Yup.string()
        .min(6)
        .max(20)
        .required("Required"),
    confirm_password: Yup.string().oneOf([Yup.ref('new_password'), null], 'Passwords must match')
})

const Account = () => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            old_password: null,
            new_password: null,
            confirm_password: null
        },
        validationSchema: ValidSchema,
        onSubmit: (val, { resetForm }) => {
            dispatch(changePassword(val))
            resetForm()
        }
    })
    return (
        <>
            <h2>Xavfsizlik Sozlamalari</h2>
            <Form onSubmit={formik.handleSubmit}>
                <Row xl={3} xs={1}>
                    <Col className="mb-1">
                        <Label>Eski parol</Label>
                        <Input name="old_password" onChange={formik.handleChange} type="text" placeholder="Kiriting..." defaultValue={formik.values.old_password} />
                    </Col>
                    <Col className="mb-1">
                        <Label>Yangi parol</Label>
                        <Input name="new_password" onChange={formik.handleChange} type="password" placeholder="Kiriting..." defaultValue={formik.values.new_password} />
                    </Col>
                    <Col className="mb-1">
                        <Label>Parolni tasdiqlang</Label>
                        <Input name="confirm_password" onChange={formik.handleChange} type="password" placeholder="Kiriting..." defaultValue={formik.values.confirm_password} />
                    </Col>
                </Row>
                <div className="d-flex justify-content-end">
                    <Button type="submit" disabled={!(formik.isValid && formik.dirty)} color="success">Saqlash</Button>
                </div>
            </Form>
        </>
    )
}
export default Account