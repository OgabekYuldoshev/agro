import { Label, Row, Col, Input, Form, Button } from "reactstrap"

const Account = ({ data }) => {
    return (
        <>
            <h2>Account Sozlamalari</h2>
            <Form>
                <Row xl={3} xs={1}>
                    <Col className="mb-1">
                        <Label>Ismi</Label>
                        <Input type="text" placeholder="Kiriting..." value={data.first_name} />
                    </Col>
                    <Col className="mb-1">
                        <Label>Familya</Label>
                        <Input type="text" placeholder="Kiriting..." value={data.last_name} />
                    </Col>
                    <Col className="mb-1">
                        <Label>Sharfi</Label>
                        <Input type="text" placeholder="Kiriting..." value={data.second_name} />
                    </Col>
                    <Col xl={6} className="mb-1">
                        <Label>Username</Label>
                        <Input type="text" disabled placeholder="Kiriting..." value={data.username} />
                    </Col>
                    <Col xl={6} className="mb-1">
                        <Label>Telefon</Label>
                        <Input type="text" placeholder="Kiriting..." value={data.phone_number} />
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