import { useState } from 'react'
import { Offcanvas, OffcanvasHeader, OffcanvasBody, Button, Col, Row } from 'reactstrap'
import { useTranslation } from 'react-i18next'
import Range from "components/Range"


const Filter = ({ open, toggle }) => {
    const { t } = useTranslation()
    const [minMax, setMinMax] = useState([21, 69])
    console.log(minMax)
    return (
        <div className='demo-inline-spacing'>
            <Offcanvas direction="end" isOpen={open} toggle={toggle}>
                <OffcanvasHeader toggle={toggle} className="h2">{t('filter')}</OffcanvasHeader>
                <OffcanvasBody className='d-flex flex-column justify-content-between'>
                    <Row>
                        <Col>
                            <div className="mb-2 d-flex justify-content-between align-item-center">
                                <span>
                                    Narx
                                </span>
                                <span>
                                    {minMax[0]} - {minMax[1]}
                                </span>
                            </div>
                            <Range values={minMax} onChange={(value) => setMinMax(value)} />
                        </Col>
                    </Row>
                    <div className='d-flex gap-1'>
                        <Button block color='danger' outline>
                            Tozlash
                        </Button>
                        <Button block color='success'>
                            Filter qilish
                        </Button>
                    </div>
                </OffcanvasBody>
            </Offcanvas>
        </div>
    )
}

export default Filter