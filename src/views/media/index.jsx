import { Card, CardBody, Row, Col, CardImgOverlay, CardImg, CardText } from "reactstrap"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getMedia } from "@store/app"
import { baseUrl } from '@utils'
import { useTranslation } from "react-i18next"
import Empty from "../../components/Empty"

const Media = () => {
    const { media } = useSelector(state => state.app)
    const dispatch = useDispatch()
    const { t, i18n } = useTranslation()
    useEffect(() => {
        dispatch(getMedia())
    }, [])

    const seminar = media?.filter(part => parseInt(part?.type_id) === 1)
    const shop = media?.filter(part => parseInt(part?.type_id) === 2)

    if (!media?.length) {
        return <Empty />
    }

    return (
        <>
            <h1 className="my-2">{t('gallery')}</h1>
            {
                seminar?.length ? (
                    <Card>
                        <CardBody>
                            <h3 className="mb-2">{t('seminar')}</h3>
                            <Row xl={4} md={2} xs={1}>
                                {
                                    seminar?.map((item, index) => (
                                        <Col key={index} className="mt-1">
                                            <Link to={`/media/${item.id}`}>
                                                <Card className='text-white border-0'>
                                                    <CardImg top width={300} height={300} src={item?.image ? baseUrl + item?.image : 'https://via.placeholder.com/150'} alt='card-overlay' />
                                                    <CardImgOverlay className='bg-overlay'>
                                                        <CardBody className="d-flex align-items-center justify-content-center">
                                                            <CardText className="h5 text-white">{item[`title_${i18n?.language}`]}</CardText>
                                                        </CardBody>
                                                    </CardImgOverlay>
                                                </Card>
                                            </Link>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </CardBody>
                    </Card>
                ) : null
            }
            {
                shop?.length ? (
                    <Card>
                        <CardBody>
                            <h3 className="mb-2">{t('shop')}</h3>
                            <Row xl={4} md={2} xs={1}>
                                {
                                    shop?.map((item, index) => (
                                        <Col key={index} className="mt-1">
                                            <Link to={`/media/${item.id}`}>
                                                <Card className='text-white border-0'>
                                                    <CardImg top width={300} height={300} src={item?.image ? baseUrl + item?.image : 'https://via.placeholder.com/150'} alt='card-overlay' />
                                                    <CardImgOverlay className='bg-overlay'>
                                                        <CardBody className="d-flex align-items-center justify-content-center">
                                                            <CardText className="h5 text-white">{item[`title_${i18n?.language}`]}</CardText>
                                                        </CardBody>
                                                    </CardImgOverlay>
                                                </Card>
                                            </Link>
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

export default Media