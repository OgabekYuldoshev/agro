import { Row, Col, Label, Input, Button, Card, CardHeader, CardTitle, CardBody, Modal, ModalBody, ModalHeader } from 'reactstrap'
import DataTable from 'react-data-table-component'
import { useState, useEffect } from 'react'
import ReactSelect from 'react-select'
import { useSelector, useDispatch } from 'react-redux'
import { getCurrency } from '@store/app'
import { useTranslation } from "react-i18next"

const Payment = ({ stepper, handleSubmit, address, cart, setForm, form }) => {
  const [open, setOpen] = useState(false)
  const { currency } = useSelector(state => state.app)
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()

  useEffect(() => {
    dispatch(getCurrency())
  }, [])

  const columns = [
    {
      name: 'Mahsulot kodi',
      selector: row => row.item?.code
    },
    {
      name: 'Mahsulot Nomi',
      selector: row => row.item[`name_${i18n.language}`]
    },
    {
      name: 'Mahsulot soni',
      selector: row => row.qty
    },
    {
      name: 'Mahsulot narxi',
      cell: row => <span>{row.item?.price}{' '}{t('som')}</span>
    }
  ]

  const defaultAddress = [
    {
      name: 'Qabul qiluvchi',
      value: address?.receiver_name
    },
    {
      name: 'Telfon raqam',
      value: address?.phone_number
    },
    {
      name: 'Manzil',
      value: `${address?.region_name} ${address?.district_name} ${address?.street_name}`
    }
  ]

  const allPrice = cart?.reduce((t, c) => t + (c?.qty * c?.item?.price), 0)

  return (
    <div
      className='list-view product-checkout'
    >
      <Row xl={2}>
        <Col xl={9}>
          <Card>
            <CardHeader className='flex-column align-items-start'>
              <CardTitle tag='h2'>{t('info')}</CardTitle>
            </CardHeader>

            <CardBody>
              <h6>{t('address')}</h6>
              <Row sm={2} md={3} xl={3}>
                {
                  defaultAddress?.map((data, index) => (
                    <Col key={index} className='d-flex justify-content-between mt-1'>
                      <span>{data?.name}:</span>
                      <b>{data?.value}</b>
                    </Col>
                  ))
                }
              </Row>
              <hr className='my-2' />
              <h6>{t('products')}</h6>
              <DataTable columns={columns} data={cart} />
            </CardBody>
          </Card>
        </Col>
        <Col xl={3}>
          <Card>
            <CardHeader>
              <CardTitle tag='h4'>{t('price_details')}</CardTitle>
            </CardHeader>
            <CardBody>
              <ul className='list-unstyled price-details'>
                <li className='price-detail'>
                  <div className='details-title'>{t("price_of_items")}</div>
                  <div className='detail-amt'>
                    <strong>{allPrice}{' '}{t('som')}</strong>
                  </div>
                </li>
                <li className='price-detail'>
                  <div className='details-title'>{t('delevery_changes')}</div>
                  <div className='detail-amt discount-amt text-success'>{t('free')}</div>
                </li>
              </ul>
              <hr />
              <ul className='list-unstyled price-details'>
                <li className='price-detail'>
                  <div className='details-title'>{t('amount_payable')}</div>
                  <div className='detail-amt fw-bolder'>{allPrice}{' '}{t('som')}</div>
                </li>
              </ul>
            </CardBody>
          </Card>
          <Button block color='primary' onClick={() => setOpen(current => !current)}>{t('order')}</Button>
          <Modal isOpen={open}
            toggle={() => setOpen(current => !current)}
            className='modal-dialog-centered'>
            <ModalHeader className='bg-transparent' toggle={() => setOpen(current => !current)}>{t('confirmation_order')}</ModalHeader>
            <ModalBody>
              <Row xs={1}>
                <Col>
                  <Label>{t('type_money')}</Label>
                  <ReactSelect placeholder={t('placeholder:select')} getOptionLabel={option => option?.desc} getOptionValue={option => option?.id} options={currency} onChange={(e) => setForm(current => {
                    return { ...current, currency_id: e?.id }
                  })} />
                </Col>
                <Col className="mt-2">
                  <Label>{t('comment')}</Label>
                  <Input type="textarea" onChange={(e) => setForm(current => {
                    return { ...current, notes: e.target.value }
                  })} />
                </Col>
                <Col className="mt-2 d-flex justify-content-end gap-1">
                  <Button onClick={() => setOpen(current => !current)} type="reset" color="danger" outline>{t("button:cancel")}</Button>
                  <Button disabled={form?.currency_id === null} onClick={handleSubmit} type="submit" color="primary">{t('confirmation_order')}</Button>
                </Col>
              </Row>
            </ModalBody>
          </Modal>
        </Col>
        <Col xl={12}>
          <Button outline color='danger' onClick={() => stepper.previous()}>Orqaga</Button>
        </Col>
      </Row>
    </div>
  )
}

export default Payment
