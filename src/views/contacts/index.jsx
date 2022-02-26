import { Card, CardBody, Row, Col } from "reactstrap"
import { useSelector } from "react-redux"
import { useTranslation } from 'react-i18next'

const Contacts = () => {
    const { contacts } = useSelector(state => state.app)
    const { t } = useTranslation()
    return (
        <>
            <h1 className="my-1">{t('network')}</h1>
            {
                contacts?.map((item, index) => (
                    <Card key={index}>
                        <CardBody>
                            <Row xl={2} xs={1}>
                                <Col>
                                    <h3>{item?.title}</h3>
                                    <div style={{ fontSize: '16px' }} className="h-100 p-2 d-flex flex-column align-items-center justify-center">
                                        <div className="d-flex gap-2">
                                            <b>{t('address')}:</b>
                                            <span>{item?.address}</span>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <b>{t('phone_number')}:</b>
                                            <span>{item?.tel}</span>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <b>{t('additional_phone_numbers')}:</b>
                                            <span>{item?.shop_phone_number}</span>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <b>{t('email')}:</b>
                                            <span>{item?.email}</span>
                                        </div>
                                        {
                                            item?.instagram ? (
                                                <div className="d-flex gap-2">
                                                    <b>Instagram:</b>
                                                    <a href={item?.instagram}>{item?.instagram}</a>
                                                </div>
                                            ) : null
                                        }
                                        {
                                            item?.telegram ? (
                                                <div className="d-flex gap-2">
                                                    <b>Telegram:</b>
                                                    <a href={item?.telegram}>{item?.telegram}</a>
                                                </div>
                                            ) : null
                                        }
                                        {
                                            item?.facebook ? (
                                                <div className="d-flex gap-2">
                                                    <b>Facebook:</b>
                                                    <a href={item?.facebook}>{item?.facebook}</a>
                                                </div>
                                            ) : null
                                        }
                                    </div>
                                </Col>
                                <Col>
                                    <iframe width="100%" height="300" id="gmap_canvas" src={`https://maps.google.com/maps?q=${item?.map}&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                ))
            }
        </>
    )
}

export default Contacts