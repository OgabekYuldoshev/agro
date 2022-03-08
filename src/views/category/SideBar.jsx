import { Button, Col, Row, Input, Label, CardBody, Card, Collapse } from 'reactstrap'
import { useTranslation } from 'react-i18next'
// import Range from "components/Range"
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { Filter } from "react-feather"
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import _ from "lodash"
import { Link, useHistory, useLocation } from 'react-router-dom'
import QueryString from 'qs'

const SideBar = () => {
    const history = useHistory()
    const location = useLocation()
    const defaultQuery = QueryString.parse(location.search, { ignoreQueryPrefix: true })
    const { t, i18n } = useTranslation()
    const { category, min, max, partners, units } = useSelector(state => state.category)
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    useEffect(() => setIsOpen(false), [location])

    return (
        <Card>
            <CardBody className='d-flex flex-column justify-content-between gap-3' >
                <Button block color='primary' className='d-lg-none d-block' onClick={toggle}><Filter /> {t('filter')}</Button>
                <Collapse isOpen={isOpen}>
                    <Row xs={1} className="gap-2">
                        <Col>
                            <Label className='mb-2'>{t('category')}</Label>
                            <div className='d-flex flex-column'>
                                {
                                    category?.parent_categories?.map((item, index) => (
                                        <>
                                            {
                                                item?.parent_categories?.map((pro, i) => (
                                                    <>
                                                        <Link to={`/category/${pro?.id}`} key={i}>
                                                            {pro[`name_${i18n.language}`]}
                                                        </Link>
                                                    </>
                                                ))
                                            }

                                            <Link className='ms-2' to={`/category/${item?.id}`} key={index}>
                                                {item[`name_${i18n.language}`]}
                                            </Link>

                                        </>
                                    ))
                                }
                                <b className='font-bold rounded text-white align-items-center'>{category[`name_${i18n.language}`]}</b>
                                {
                                    category?.childs?.map((item, index) => (
                                        <>
                                            <Link className='ms-2' to={`/category/${item?.id}`} key={index}>
                                                {item[`name_${i18n.language}`]}
                                            </Link>
                                            {
                                                item?.childs?.map((pro, i) => (
                                                    <>
                                                        <Link className='ms-4' to={`/category/${pro?.id}`} key={i}>
                                                            {pro[`name_${i18n.language}`]}
                                                        </Link>
                                                    </>
                                                ))
                                            }

                                        </>
                                    ))
                                }

                            </div>
                        </Col>
                        <Col>
                            <Label className='mb-2'>{t('price')}</Label>
                            <Slider range allowCross={false} defaultValue={[parseInt(min), parseInt(max)]} onChange={(e) => console.log(e)} />
                        </Col>
                        {
                            units?.length ? (
                                <Col>
                                    <Label>{t('size')}</Label>
                                    <div className='d-flex flex-column mt-1 gap-2'>
                                        {
                                            units?.map((item, index) => (
                                                <div key={index} className="d-flex gap-1">
                                                    <Input onChange={(e) => {
                                                        history.push({
                                                            pathname: location.pathname,
                                                            search: QueryString.stringify({ ...defaultQuery, unit_id: e.target.value })
                                                        })
                                                    }} type="radio" name={`unit_id`} value={_.get(item, 'id')} />
                                                    <label htmlFor={_.get(item, 'id')}>{_.get(item, 'long_name')}</label>
                                                </div>
                                            ))
                                        }

                                    </div>
                                </Col>
                            ) : null
                        }
                        {
                            partners?.length ? (
                                <Col>
                                    <Label>{t('partners')}</Label>
                                    <div style={{ height: '300px' }} className='d-flex flex-column mt-1 gap-2 overflow-auto'>
                                        {
                                            partners?.map((item, index) => (
                                                <div key={index} className="d-flex gap-1">
                                                    <Input type="radio" onChange={(e) => {
                                                        history.push({
                                                            pathname: location.pathname,
                                                            search: QueryString.stringify({ ...defaultQuery, partner_id: e.target.value })
                                                        })
                                                    }} name={`partner_id`} value={_.get(item, 'id')} />
                                                    <label htmlFor={_.get(item, 'id')}>{_.get(item, 'name')}</label>
                                                </div>
                                            ))
                                        }

                                    </div>
                                </Col>
                            ) : null
                        }


                    </Row>
                    <div className='d-flex gap-1'>
                        <Button block onClick={() => { history.push(location.pathname) }} color='danger' type='reset' outline>
                            {t('clear')}
                        </Button>
                    </div>
                </Collapse>
                <div className='d-none d-lg-block'>
                    <Row xs={1} className="gap-2">
                        <Col>
                            <Label className='mb-2'>{t('category')}</Label>
                            <div className='d-flex flex-column'>
                                {
                                    category?.parent_categories?.map((item, index) => (
                                        <>
                                            {
                                                item?.parent_categories?.map((pro, i) => (
                                                    <>
                                                        <Link to={`/category/${pro?.id}`} key={i}>
                                                            {pro[`name_${i18n.language}`]}
                                                        </Link>
                                                    </>
                                                ))
                                            }

                                            <Link className='ms-2' to={`/category/${item?.id}`} key={index}>
                                                {item[`name_${i18n.language}`]}
                                            </Link>

                                        </>
                                    ))
                                }
                                <b style={{ padding: '5px' }} className='font-bold bg-primary rounded text-white align-items-center'>{category[`name_${i18n.language}`]}</b>
                                {
                                    category?.childs?.map((item, index) => (
                                        <>
                                            <Link className='ms-2' to={`/category/${item?.id}`} key={index}>
                                                {item[`name_${i18n.language}`]}
                                            </Link>
                                            {
                                                item?.childs?.map((pro, i) => (
                                                    <>
                                                        <Link className='ms-4' to={`/category/${pro?.id}`} key={i}>
                                                            {pro[`name_${i18n.language}`]}
                                                        </Link>
                                                    </>
                                                ))
                                            }

                                        </>
                                    ))
                                }

                            </div>
                        </Col>
                        <Col>
                            <Label className='mb-2'>{t('price')}</Label>
                            <Slider range allowCross={false} defaultValue={[parseInt(min), parseInt(max)]} onChange={(e) => console.log(e)} />
                        </Col>
                        {
                            units?.length ? (
                                <Col>
                                    <Label>{t('size')}</Label>
                                    <div className='d-flex flex-column mt-1 gap-2'>
                                        {
                                            units?.map((item, index) => (
                                                <div key={index} className="d-flex gap-1">
                                                    <Input onChange={(e) => {
                                                        history.push({
                                                            pathname: location.pathname,
                                                            search: QueryString.stringify({ ...defaultQuery, unit_id: e.target.value })
                                                        })
                                                    }} type="radio" name={`unit_id`} value={_.get(item, 'id')} />
                                                    <label htmlFor={_.get(item, 'id')}>{_.get(item, 'long_name')}</label>
                                                </div>
                                            ))
                                        }

                                    </div>
                                </Col>
                            ) : null
                        }
                        {
                            partners?.length ? (
                                <Col>
                                    <Label>{t('partners')}</Label>
                                    <div style={{ height: '300px' }} className='d-flex flex-column mt-1 gap-2 overflow-auto'>
                                        {
                                            partners?.map((item, index) => (
                                                <div key={index} className="d-flex gap-1">
                                                    <Input type="radio" onChange={(e) => {
                                                        history.push({
                                                            pathname: location.pathname,
                                                            search: QueryString.stringify({ ...defaultQuery, partner_id: e.target.value })
                                                        })
                                                    }} name={`partner_id`} value={_.get(item, 'id')} />
                                                    <label htmlFor={_.get(item, 'id')}>{_.get(item, 'name')}</label>
                                                </div>
                                            ))
                                        }

                                    </div>
                                </Col>
                            ) : null
                        }


                    </Row>
                    <div className='d-flex gap-1'>
                        <Button block onClick={() => { history.push(location.pathname) }} color='danger' type='reset' outline>
                            {t('clear')}
                        </Button>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default SideBar