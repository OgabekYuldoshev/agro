import { useFormik } from "formik"
import { Label, Row, Col, Input, Form, Button } from "reactstrap"
import { updateUser } from "@store/Auth"
import { useDispatch } from "react-redux"

const Account = ({ data }) => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            first_name: data.first_name,
            last_name: data.last_name,
            second_name: data.second_name,
            email: data.email,
            phone_number: data.phone_number
        },
        onSubmit: (val) => {
            dispatch(updateUser(val))
        }
    })
    return (
        <>
            <h2>Account Sozlamalari</h2>
            <Form onSubmit={formik.handleSubmit}>
                <Row xl={3} xs={1}>
                    <Col className="mb-1">
                        <Label>Ismi</Label>
                        <Input type="text" name="first_name" placeholder="Kiriting..." onChange={formik.handleChange} defaultValue={formik.values.first_name} />
                    </Col>
                    <Col className="mb-1">
                        <Label>Familya</Label>
                        <Input type="text" name="last_name" placeholder="Kiriting..." onChange={formik.handleChange} defaultValue={formik.values.last_name} />
                    </Col>
                    <Col className="mb-1">
                        <Label>Sharfi</Label>
                        <Input type="text" name="second_name" placeholder="Kiriting..." onChange={formik.handleChange} defaultValue={formik.values.second_name} />
                    </Col>
                    <Col xl={6} className="mb-1">
                        <Label>Email</Label>
                        <Input type="text" name="email" disabled placeholder="Kiriting..." onChange={formik.handleChange} defaultValue={formik.values.email} />
                    </Col>
                    <Col xl={6} className="mb-1">
                        <Label>Telefon</Label>
                        <Input type="tel" name="phone_number" placeholder="Kiriting..." onChange={formik.handleChange} defaultValue={formik.values.phone_number} />
                    </Col>
                </Row>
                <div className="d-flex justify-content-end">
                    <Button color="success" type="submit">Saqlash</Button>
                </div>
            </Form>
        </>
    )
}
export default Account