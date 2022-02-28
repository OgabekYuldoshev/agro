// import { useRef } from 'react'
import { Offcanvas, OffcanvasHeader, OffcanvasBody, Button, Col, Row, Input, Label, Form } from 'reactstrap'
import { useTranslation } from 'react-i18next'
// import Range from "components/Range"
import { useSelector } from 'react-redux'
import _ from "lodash"

const Filter = ({ open, toggle }) => {
    const { t } = useTranslation()
    const { products } = useSelector(state => state.category)
    // const sorted = products?.sort((a, b) => parseInt(a.price) - parseInt(b.price))
    // const MIN = sorted[0]?.price || 0
    // const MAX = sorted[sorted.length - 1]?.price || 0
    // console.log(sorted)
    // const [minMax, setMinMax] = useState([2, 3])

    const units = _.uniqBy(products, (i) => i.unit_id)
    const categories = _.uniqBy(products, (i) => i.units?.id)
    const partners = _.uniqBy(products, (i) => i.partner_id)

    console.log(units, categories, partners)

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const queryString = new URLSearchParams(formData).toString()
        console.log(queryString)
    }

    return (
        <div className='demo-inline-spacing'>
            <Offcanvas direction="end" isOpen={open} toggle={toggle}>
                <OffcanvasHeader toggle={toggle} className="h2">{t('filter')}</OffcanvasHeader>
                <OffcanvasBody >
                    <Form onSubmit={handleSubmit} className='d-flex flex-column justify-content-between gap-3'>
                        <Row>
                            {/* <Col>
                            <div className="mb-2 d-flex justify-content-between align-item-center">
                                <span>
                                    Narx
                                </span>
                                <span>
                                    {1} - {2}
                                </span>
                            </div>
                            <Range values={minMax} onChange={(value) => setMinMax(value)} />
                        </Col> */}
                            {
                                units?.length ? (
                                    <Col>
                                        <Label>{t('size')}</Label>
                                        <div className='d-flex flex-column mt-1 gap-2'>
                                            {
                                                units?.map((item, index) => (
                                                    <div key={index} className="d-flex gap-1">
                                                        <Input type="checkbox" name={`units[${_.get(item, 'units.id')}]`} />
                                                        <label htmlFor={_.get(item, 'units.id')}>{_.get(item, 'units.long_name')}</label>
                                                    </div>
                                                ))
                                            }

                                        </div>
                                    </Col>
                                ) : null
                            }

                        </Row>
                        <div className='d-flex gap-1'>
                            <Button block color='danger' type='reset' outline>
                                Tozlash
                            </Button>
                            <Button block type='submit' color='success'>
                                Filter qilish
                            </Button>
                        </div>
                    </Form>
                </OffcanvasBody>
            </Offcanvas>
        </div>
    )
}

export default Filter