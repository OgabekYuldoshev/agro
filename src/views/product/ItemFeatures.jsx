// ** Icon Imports
import { Award, Clock, Shield } from 'react-feather'
// ** Reactstrap Imports
import { Row, Col, CardText } from 'reactstrap'
import { useTranslation } from 'react-i18next'

const ItemFeatures = () => {
  const { t } = useTranslation()
  return (
    <div className='item-features'>
      <Row className='text-center'>
        <Col className='mb-4 mb-md-0' md='4' xs='12'>
          <div className='w-75 mx-auto'>
            <Award />
            <h4 className='mt-2 mb-1'>100% {t('original')}</h4>
            <CardText>{t('chocolate_bar')}</CardText>
          </div>
        </Col>
        <Col className='mb-4 mb-md-0' md='4' xs='12'>
          <div className='w-75 mx-auto'>
            <Clock />
            <h4 className='mt-2 mb-1'>10 {t('day_replacement')}</h4>
            <CardText>{t('marshallow_biscuit')}</CardText>
          </div>
        </Col>
        <Col className='mb-4 mb-md-0' md='4' xs='12'>
          <div className='w-75 mx-auto'>
            <Shield />
            <h4 className='mt-2 mb-1'>{t('year_warranty')}</h4>
            <CardText>{t('cotton_candy')}</CardText>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ItemFeatures
