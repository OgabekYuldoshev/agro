import { Button, Col, Row, Input, Label, CardBody, Card } from 'reactstrap'
import { useTranslation } from 'react-i18next'
// import Range from "components/Range"
import InputRange from 'react-input-range'

import { useSelector } from 'react-redux'
import _ from "lodash"
import "react-input-range/lib/css/index.css"
// import { useFormik } from 'formik'
import { useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import QueryString from 'qs'
import { ArrowRight } from 'react-feather'

const Filter = () => {
    const history = useHistory()
    const location = useLocation()
    const defaultQuery = QueryString.parse(location.search, { ignoreQueryPrefix: true })
    const { t, i18n } = useTranslation()
    const { products, category } = useSelector(state => state.category)
    const MIN = parseInt(_.get(_.minBy(products, (e) => parseInt(e?.price)), 'price')) || 0
    const MAX = parseInt(_.get(_.maxBy(products, (e) => parseInt(e?.price)), 'price')) || 100
    const [minMax, setMinMax] = useState({ min: MIN, max: MAX })
    console.log(category)

    const units = _.uniqBy(products, (i) => i.unit_id)
    // const categories = _.uniqBy(products, (i) => i.units?.id)
    const partners = _.uniqBy(products, (i) => i.partner_id)
    return (
        <Card>
            <CardBody className='d-flex flex-column justify-content-between gap-3' >
                <Row sm={1} className="gap-2">
                    <Col>
                        <Label className='mb-2'>{t('category')}</Label>
                        <div className='d-flex gap-1'>
                            {
                                category?.parent_categories?.map((item, index) => (
                                    <>
                                        {
                                            item?.parent_categories?.map((pro, i) => (
                                                <>
                                                    <Link to={`/category/${pro?.id}`} key={i}>
                                                        {pro[`name_${i18n.language}`]}
                                                    </Link>
                                                    <ArrowRight size={15} />
                                                </>
                                            ))
                                        }
                                        <Link to={`/category/${item?.id}`} key={index}>
                                            {item[`name_${i18n.language}`]}
                                        </Link>
                                        <ArrowRight size={15} />

                                    </>
                                ))
                            }
                            <b className='text-danger font-bold align-items-center'>{category[`name_${i18n.language}`]}</b>
                        </div>
                    </Col>
                    <Col>
                        <Label className='mb-2'>{t('price')}</Label>
                        {/* <Range values={minMax} onChange={(value) => setMinMax(value)} /> */}
                        <InputRange
                            maxValue={MAX}
                            minValue={MIN}
                            value={minMax}
                            onChangeComplete={value => {
                                setMinMax(value)
                                history.push({
                                    pathname: location.pathname,
                                    search: QueryString.stringify({ ...defaultQuery, max: value.max, min: value.min })
                                })
                            }} />
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
                                                        search: QueryString.stringify({ ...defaultQuery, units: e.target.value })
                                                    })
                                                }} type="radio" name={`units`} value={_.get(item, 'units.id')} />
                                                <label htmlFor={_.get(item, 'units.id')}>{_.get(item, 'units.long_name')}</label>
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
                                <div className='d-flex flex-column mt-1 gap-2'>
                                    {
                                        partners?.map((item, index) => (
                                            <div key={index} className="d-flex gap-1">
                                                <Input type="radio" onChange={(e) => {
                                                    history.push({
                                                        pathname: location.pathname,
                                                        search: QueryString.stringify({ ...defaultQuery, partners: e.target.value })
                                                    })
                                                }} name={`partners`} value={_.get(item, 'partners.id')} />
                                                <label htmlFor={_.get(item, 'partners.id')}>{_.get(item, 'partners.name')}</label>
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