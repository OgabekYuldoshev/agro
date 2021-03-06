import { useState } from "react"
import { Row, Col, TabContent, TabPane, Nav, NavItem, NavLink, Card, CardBody, CardHeader, CardFooter } from "reactstrap"
import { Home, Lock, Navigation, Trash } from "react-feather"
import UserCard from "./UserCard"
import Account from "./Account"
import Address from "./Address"
import Sercurity from "./Sercurity"
import { useSelector, useDispatch } from "react-redux"
import NotAuthorized from "../NotAuthorized"
import { deleteAddress } from "@store/app"
import { useTranslation } from "react-i18next"

const ProfilePage = () => {
    const store = useSelector(state => state.auth)
    const [active, setActive] = useState('1')
    const { t } = useTranslation()

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
                <UserCard data={store.userData} />
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
                            {t('account')}
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
                            {t('address')}
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
                            {t('security')}
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
                        <Row xl={3} sm={2} xs={1}>
                            <CardAddress />
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
    const address = useSelector(state => state.app?.address)
    const dispatch = useDispatch()
    return address.map((add, index) => (
        <Col>
            <Card key={index}>
                <CardBody>
                    <h5>{add.receiver_name}</h5>
                    <p>{add.street_name}, {add.district_name}, {add.region_name}, {add.phone_number}</p>
                </CardBody>
                <div className="px-2 py-1 border-top d-flex justify-content-end">
                    <Trash color="red" onClick={() => dispatch(deleteAddress(add.id))} onclick className="cursor-pointer" />
                </div>
            </Card>
        </Col>
    ))
}

export default ProfilePage