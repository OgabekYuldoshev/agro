// ** Third Party Components
import { useFormik } from 'formik'

// ** Reactstrap Imports
import { Form, Input, Card, Label, CardHeader, CardTitle, CardBody, CardText, Button, Row, Col } from 'reactstrap'

const Address = props => {
  // ** Props
  const { stepper } = props

  const formik = useFormik({
    initialValues: {
      fullname: '',
      region: '',
      district: '',
      address: '',
      phone: '',
      postal_code: ''
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <Row xl={2}>
      <Col xl={9}>
        <Card>
          <CardHeader className='flex-column align-items-start'>
            <CardTitle tag='h4'>Add New Address</CardTitle>
            <CardText className='text-muted mt-25'>
              Be sure to check "Deliver to this address" when you have finished
            </CardText>
          </CardHeader>
          <CardBody>
            <Form onSubmit={formik.handleSubmit}>
              <Row xl={2} xs={1}>
                <Col className="mb-1">
                  <Label>Qabul qiluvchi ismi</Label>
                  <Input
                    onChange={formik.handleChange}
                    name="fullname"
                    type="text"
                    placeholder="Kiriting..." />
                </Col>
                <Col className="mb-1">
                  <Label>Viloyat</Label>
                  <Input
                    onChange={formik.handleChange}
                    name="region"
                    type="text"
                    placeholder="Kiriting..." />
                </Col>
                <Col className="mb-1">
                  <Label>Tuman</Label>
                  <Input
                    onChange={formik.handleChange}
                    name="district"
                    type="text"
                    placeholder="Kiriting..." />
                </Col>
                <Col className="mb-1">
                  <Label>Manzil</Label>
                  <Input
                    onChange={formik.handleChange}
                    name="address"
                    type="text"
                    placeholder="Kiriting..." />
                </Col>
                <Col className="mb-1">
                  <Label>Telefon nomer</Label>
                  <Input
                    onChange={formik.handleChange}
                    name="phone"
                    type="text"
                    placeholder="Kiriting..." />
                </Col>
                <Col className="mb-1">
                  <Label>Pochta indeksi</Label>
                  <Input
                    onChange={formik.handleChange}
                    name="postal_code"
                    type="text"
                    placeholder="Kiriting..." />
                </Col>
              </Row>
              <div className="d-flex justify-content-end gap-2">
                {/* <Button onClick={formik.handleReset} color="primary" outline>Formani tozalash</Button> */}
                <Button type="submit" color="success">Saqlash</Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
      <Col xl={3}>
        <Card>
          <CardHeader>
            <CardTitle tag='h4'>John Doe</CardTitle>
          </CardHeader>
          <CardBody>
            <CardText className='mb-0'>9447 Glen Eagles Drive</CardText>
            <CardText>Lewis Center, OH 43035</CardText>
            <CardText>UTC-5: Eastern Standard Time (EST)</CardText>
            <CardText>202-555-0140</CardText>
            <Button
              block
              type='button'
              color='primary'
              onClick={() => stepper.next()}
              className='btn-next delivery-address mt-2'
            >
              Deliver To This Address
            </Button>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default Address
