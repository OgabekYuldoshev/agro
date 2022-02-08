import { Label, Row, Col, Input, Form, Button } from "reactstrap"
import { useFormik } from "formik"
const Address = () => {
    const formik = useFormik({
        initialValues: {
            fullname: '',
            region: '',
            district: '',
            address: '',
            phone: '',
            postal_code: ''
        },
        onSubmit: (values) => {
            console.log(values)
        }
    })
    return (
        <>
            <h2>Address Qoshish</h2>
            <Form onSubmit={formik.handleSubmit}>
                <Row xl={2} xs={1}>
                    <Col className="mb-1">
                        <Label>Qabul qiluvchi ismi</Label>
                        <Input
                            onChange={formik.handleChange}
                            name="fullname"
                            type="text"
                            placeholder="Kiriting..." />
                    </Col>
                    <Col className="mb-1">
                        <Label>Viloyat</Label>
                        <Input
                            onChange={formik.handleChange}
                            name="region"
                            type="text"
                            placeholder="Kiriting..." />
                    </Col>
                    <Col className="mb-1">
                        <Label>Tuman</Label>
                        <Input
                            onChange={formik.handleChange}
                            name="district"
                            type="text"
                            placeholder="Kiriting..." />
                    </Col>
                    <Col className="mb-1">
                        <Label>Manzil</Label>
                        <Input
                            onChange={formik.handleChange}
                            name="address"
                            type="text"
                            placeholder="Kiriting..." />
                    </Col>
                    <Col className="mb-1">
                        <Label>Telefon nomer</Label>
                        <Input
                            onChange={formik.handleChange}
                            name="phone"
                            type="text"
                            placeholder="Kiriting..." />
                    </Col>
                    <Col className="mb-1">
                        <Label>Pochta indeksi</Label>
                        <Input
                            onChange={formik.handleChange}
                            name="postal_code"
                            type="text"
                            placeholder="Kiriting..." />
                    </Col>
                </Row>
                <div className="d-flex justify-content-end gap-2">
                    {/* <Button onClick={formik.handleReset} color="primary" outline>Formani tozalash</Button> */}
                    <Button type="submit" color="success">Saqlash</Button>
                </div>
            </Form>
        </>
    )
}
export default Address