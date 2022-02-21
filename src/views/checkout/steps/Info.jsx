import { Row, Col, Label, Input, Button, Card, CardHeader, CardTitle, CardBody, Modal, ModalBody, ModalHeader } from 'reactstrap'
import DataTable from 'react-data-table-component'
import { useState, useEffect } from 'react'
import ReactSelect from 'react-select'
import { useSelector, useDispatch } from 'react-redux'
import { getCurrency } from '@store/App'

const Payment = ({ handleSubmit, address, cart, setForm, form }) => {
  const [open, setOpen] = useState(false)
  const { currency } = useSelector(state => state.app)
  const dispatch = useDispatch()

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
      selector: row => row.item?.name
    },
    {
      name: 'Mahsulot soni',
      selector: row => row.qty
    },
    {
      name: 'Mahsulot narxi',
      selector: row => row.item?.price
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

  return (
    <div
      className='list-view product-checkout'
    >
      <Row xl={2}>
        <Col xl={9}>
          <Card>
            <CardHeader className='flex-column align-items-start'>
              <CardTitle tag='h2'>Ma'lumotlar</CardTitle>
            </CardHeader>

            <CardBody>
              <h6>Manzil</h6>
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
              <h6>Mahsulotlar</h6>
              <DataTable columns={columns} data={cart} />
            </CardBody>
          </Card>
        </Col>
        <Col xl={3}>
          <Card>
            <CardHeader>
              <CardTitle tag='h4'>Price Details</CardTitle>
            </CardHeader>
            <CardBody>
              <ul className='list-unstyled price-details'>
                <li className='price-detail'>
                  <div className='details-title'>Price of 3 items</div>
                  <div className='detail-amt'>
                    <strong>$699.30</strong>
                  </div>
                </li>
                <li className='price-detail'>
                  <div className='details-title'>Delivery Charges</div>
                  <div className='detail-amt discount-amt text-success'>Free</div>
                </li>
              </ul>
              <hr />
              <ul className='list-unstyled price-details'>
                <li className='price-detail'>
                  <div className='details-title'>Amount Payable</div>
                  <div className='detail-amt fw-bolder'>$699.30</div>
                </li>
              </ul>
            </CardBody>
          </Card>
          <Button block color='primary' onClick={() => setOpen(current => !current)}>Buyurtma berish</Button>
          <Modal isOpen={open}
            toggle={() => setOpen(current => !current)}
            className='modal-dialog-centered'>
            <ModalHeader className='bg-transparent' toggle={() => setOpen(current => !current)}>Buyurtmani tasdiqlash</ModalHeader>
            <ModalBody>
              <Row xs={1}>
                <Col>
                  <Label>To'lov pul birligi</Label>
                  <ReactSelect placeholder="Pul birligini tanlang..." getOptionLabel={option => option?.desc} getOptionValue={option => option?.id} options={currency} onChange={(e) => setForm(current => {
                    return { ...current, currency_id: e?.id }
                  })} />
                </Col>
                <Col className="mt-2">
                  <Label>Izoh Yozish</Label>
                  <Input type="textarea" onChange={(e) => setForm(current => {
                    return { ...current, notes: e.target.value }
                  })} />
                </Col>
                <Col className="mt-2 d-flex justify-content-end gap-1">
                  <Button onClick={() => setOpen(current => !current)} type="reset" color="danger" outline>Bekor Qilish</Button>
                  <Button disabled={form?.currency_id === null} onClick={handleSubmit} type="submit" color="primary">Tasdiqlash</Button>
                </Col>
              </Row>
            </ModalBody>
          </Modal>
        </Col>
      </Row>
    </div>
  )
}

export default Payment
