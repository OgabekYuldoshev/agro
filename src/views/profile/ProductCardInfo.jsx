import { Card, CardBody, Label, Row, Col } from "reactstrap"
import Avatar from '@components/avatar'
import { Heart, ShoppingCart } from "react-feather"
import { useSelector } from "react-redux"

const ProfilePage = ({ data }) => {
    const cart = useSelector(state => state.ecommerce?.cart)
    return (
        <Card>
            <CardBody className="d-flex flex-column align-items-center ">
                <Avatar color='light-danger' content={data.first_name} initials size="xl" />
                <h4 className="mt-2">{data.first_name} {data.last_name} {data.second_name}</h4>
                <hr />
                <Row className="justify-content-between">
                    <Col className="d-flex gap-1 align-items-center">
                        <Avatar color='light-primary' icon={<ShoppingCart size={20} />} />
                        <b>{cart.length}</b>
                    </Col>
                    <Col className="d-flex gap-1 align-items-center">
                        <Avatar color='light-danger' icon={<Heart size={20} />} />
                        <b>12</b>
                    </Col>
                    <Col className="d-flex gap-1 align-items-center">
                        <Avatar color='light-primary' icon={<Clipboard size={20} />} />
                        <b>1</b>
                    </Col>
                </Row>
                <Row sm={1} className="gap-2">
                    <Col className="d-flex align-items-center gap-2">
                        <span>Username:</span>
                        <b>{data.username}</b>
                    </Col>
                    <Col className="d-flex align-items-center gap-2">
                        <span>Phone:</span>
                        <b>{data.phone_number}</b>
                    </Col>
                    <Col className="d-flex align-items-center gap-2">
                        <span>Phone:</span>
                        <b>{data.phone_number}</b>
                    </Col>
                    <Col className="d-flex align-items-center gap-2">
                        <span>Phone:</span>
                        <b>{data.phone_number}</b>
                    </Col>
                    <Col className="d-flex align-items-center gap-2">
                        <span>Phone:</span>
                        <b>{data.phone_number}</b>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}
export default ProfilePage