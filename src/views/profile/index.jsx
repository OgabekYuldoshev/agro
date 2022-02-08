import { useState } from "react"
import { Row, Col, TabContent, TabPane, Nav, NavItem, NavLink, Card, CardBody, CardHeader, CardFooter } from "reactstrap"
import { Home, Lock, Navigation, Trash } from "react-feather"
import ProductCardInfo from "./ProductCardInfo"
import Account from "./Account"
import Address from "./Address"
import Sercurity from "./Sercurity"
import { useSelector } from "react-redux"
import NotAuthorized from "../NotAuthorized"

const ProfilePage = () => {
    const store = useSelector(state => state.auth)
    const [active, setActive] = useState('1')

    const toggle = tab => {
        if (active !== tab) {
            setActive(tab)
        }
    }
    if (!store.isAuth) {
        return <NotAuthorized />
    }
    return (
        <Row xl={2} className="my-2">
            <Col xl={3}>
                <ProductCardInfo data={store.userData} />
            </Col>
            <Col xl={9}>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            active={active === '1'}
                            onClick={() => {
                                toggle('1')
                            }}
                        >
                            <Home size={18} />
                            Account
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            active={active === '2'}
                            onClick={() => {
                                toggle('2')
                            }}
                        >
                            <Navigation size={18} />
                            Address
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            active={active === '3'}
                            onClick={() => {
                                toggle('3')
                            }}
                        >
                            <Lock size={18} />
                            Security
                        </NavLink>
                    </NavItem>
                </Nav>

                <TabContent className='py-50' activeTab={active}>
                    <TabPane tabId='1'>
                        <Card>
                            <CardBody>
                                <Account data={store.userData} />
                            </CardBody>
                        </Card>
                    </TabPane>
                    <TabPane tabId='2'>
                        <Card>
                            <CardBody>
                                <Address data={store.userData} />
                            </CardBody>
                        </Card>
                        <Row xl={3}>
                            <Col>
                                <CardAddress />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId='3'>
                        <Card>
                            <CardBody>
                                <Sercurity data={store.userData} />
                            </CardBody>
                        </Card>
                    </TabPane>
                </TabContent>

            </Col>
        </Row >
    )
}

const CardAddress = () => {
    return (
        <Card>
            <CardBody>
                <h5>Ogabek Yuldoshev</h5>
                <p>9447 Glen Eagles Drive Lewis Center, OH 43035, 998945360773</p>
            </CardBody>
            <div className="px-2 py-1 border-top d-flex justify-content-end">
                <Trash color="red" className="cursor-pointer" />
            </div>
        </Card>
    )
}

export default ProfilePage