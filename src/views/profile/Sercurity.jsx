import { useFormik } from "formik"
import { Label, Row, Col, Input, Form, Button } from "reactstrap"
import { changePassword } from "@store/Auth"
import { useDispatch } from "react-redux"

const Account = () => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            old_password: null,
            new_password: null,
            confirm_password: null
        },
        onSubmit: (val) => {
            dispatch(changePassword(val))
        }
    })
    return (
        <>
            <h2>Xavfsizlik Sozlamalari</h2>
            <Form onSubmit={formik.handleSubmit}>
                <Row xl={3} xs={1}>
                    <Col className="mb-1">
                        <Label>Eski parol</Label>
                        <Input name="old_password" onChange={formik.handleChange} type="text" placeholder="Kiriting..." />
                    </Col>
                    <Col className="mb-1">
                        <Label>Yangi parol</Label>
                        <Input name="new_password" onChange={formik.handleChange} type="password" placeholder="Kiriting..." />
                    </Col>
                    <Col className="mb-1">
                        <Label>Parolni tasdiqlang</Label>
                        <Input name="confirm_password" onChange={formik.handleChange} type="password" placeholder="Kiriting..." />
                    </Col>
                </Row>
                <div className="d-flex justify-content-end">
                    <Button type="submit" color="success">Saqlash</Button>
                </div>
            </Form>
        </>
    )
}
export default Account