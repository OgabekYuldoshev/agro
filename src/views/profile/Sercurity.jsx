import { Label, Row, Col, Input, Form, Button } from "reactstrap"

const Account = ({ data }) => {
    return (
        <>
            <h2>Xavfsizlik Sozlamalari</h2>
            <Form>
                <Row xl={3} xs={1}>
                    <Col className="mb-1">
                        <Label>Eski parol</Label>
                        <Input type="text" placeholder="Kiriting..." value={data.first_name} />
                    </Col>
                    <Col className="mb-1">
                        <Label>Yangi parol</Label>
                        <Input type="password" placeholder="Kiriting..." value={data.last_name} />
                    </Col>
                    <Col className="mb-1">
                        <Label>Parolni tasdiqlang</Label>
                        <Input type="password" placeholder="Kiriting..." value={data.second_name} />
                    </Col>
                </Row>
                <div className="d-flex justify-content-end">
                    <Button color="success">Saqlash</Button>
                </div>
            </Form>
        </>
    )
}
export default Account