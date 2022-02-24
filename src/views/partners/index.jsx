import { Card, CardBody, Row, Col } from "reactstrap"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPartners } from "@store/app"
import { baseUrl } from '@utils'

const Contacts = () => {
    const { allPartners } = useSelector(state => state.app)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPartners())
    }, [])

    const main_partners = allPartners?.filter(part => part?.type_id === 1)
    const partners = allPartners?.filter(part => part?.type_id === 2)
    const client = allPartners?.filter(part => part?.type_id === 3)

    return (
        <>
            <h1 className="my-1">Hamkorlar</h1>
            {
                main_partners?.length ? (
                    <Card>
                        <CardBody>
                            <h3 className="mb-2">Asosiy hamkorlar</h3>
                            <Row xl={9} md={6} sm={3} xs={2}>
                                {
                                    main_partners?.map((item, index) => (
                                        <Col key={index}>
                                            <a target="_blank" href={item?.link} className="d-flex flex-column align-items-center">
                                                <img width={100} height={100} src={baseUrl + item?.image} alt={item.id} />
                                                <p className="text-center mt-1">{item.name}</p>
                                            </a>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </CardBody>
                    </Card>
                ) : null
            }
            {
                partners?.length ? (
                    <Card>
                        <CardBody>
                            <h3 className="mb-2">Hamkorlar</h3>
                            <Row xl={9} md={6} sm={3} xs={2}>
                                {
                                    partners?.map((item, index) => (
                                        <Col key={index}>
                                            <a target="_blank" href={item?.link} className="d-flex flex-column align-items-center">
                                                <img width={100} height={100} src={baseUrl + item?.image} alt={item.id} />
                                                <p className="text-center mt-1">{item.name}</p>
                                            </a>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </CardBody>
                    </Card>
                ) : null
            }
            {
                client?.length ? (
                    <Card>
                        <CardBody>
                            <h3 className="mb-2">Mijozlar</h3>
                            <Row xl={9} md={6} sm={3} xs={2}>
                                {
                                    client?.map((item, index) => (
                                        <Col key={index}>
                                            <a target="_blank" href={item?.link} className="d-flex flex-column align-items-center">
                                                <img width={100} height={100} src={baseUrl + item?.image} alt={item.id} />
                                                <p className="text-center mt-1">{item.name}</p>
                                            </a>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </CardBody>
                    </Card>
                ) : null
            }
        </>
    )
}

export default Contacts