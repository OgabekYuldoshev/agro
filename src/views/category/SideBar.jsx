import { Button, Col, Row, Input, Label, CardBody, Card } from 'reactstrap'
import { useTranslation } from 'react-i18next'
// import Range from "components/Range"
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

import { useSelector } from 'react-redux'
import _ from "lodash"

// import { useFormik } from 'formik'
// import { useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import QueryString from 'qs'
const Filter = () => {
    const history = useHistory()
    const location = useLocation()
    const defaultQuery = QueryString.parse(location.search, { ignoreQueryPrefix: true })
    const { t, i18n } = useTranslation()
    const { category, min, max, partners, units } = useSelector(state => state.category)
    console.log(parseInt(min), parseInt(max))

    // const [minMax, setMinMax] = useState({ min: parseInt(min), max: parseInt(max) })

    return (
        <Card>
            <CardBody className='d-flex flex-column justify-content-between gap-3' >
                <Row sm={1} className="gap-2">
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
                        {/* <Range values={minMax} onChange={(value) => setMinMax(value)} /> */}
                        <Slider range allowCross={false} defaultValue={[parseInt(min), parseInt(max)]} onChange={(e) => console.log(e)} />
                        {/* <InputRange
                            maxValue={max}
                            minValue={min}
                            value={minMax}
                            onChangeComplete={value => {
                                setMinMax(value)
                                history.push({
                                    pathname: location.pathname,
                                    search: QueryString.stringify({ ...defaultQuery, max: value.max, min: value.min })
                                })
                            }} /> */}
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
                        Tozlash
                    </Button>
                </div>
            </CardBody>
        </Card>
    )
}

export default Filter