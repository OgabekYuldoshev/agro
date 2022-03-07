// ** Third Party Components
import { useFormik } from 'formik'
import { getAddress, addAddress, deleteAddress } from "@store/app"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as Yup from "yup"

const ValidSchema = Yup.object({
  receiver_name: Yup.string()
    .required("Required"),
  region_name: Yup.string()
    .required("Required"),
  district_name: Yup.string()
    .required("Required"),
  street_name: Yup.string()
    .required("Required"),
  phone_number: Yup.string()
    .required("Required")
})
// ** Reactstrap Imports
import { Form, Input, Card, Label, CardHeader, CardTitle, CardBody, CardText, Button, Row, Col } from 'reactstrap'
import { Trash } from 'react-feather'

const Address = props => {
  // ** Props
  const { stepper, setAddress, t } = props
  const { isAuth } = useSelector(state => state.auth)

  const dispatch = useDispatch()

  useEffect(() => {
    if (isAuth) {
      dispatch(getAddress())
    }
  }, [isAuth, stepper])

  const address = useSelector(state => state.app?.address)
  const formik = useFormik({
    initialValues: {
      receiver_name: '',
      region_name: '',
      district_name: '',
      street_name: '',
      phone_number: ''
    },
    validationSchema: ValidSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(addAddress(values))
      resetForm()
    }
  })

  const handleSelect = (id) => {
    setAddress(id)
    stepper.next()
  }

  return (
    <Row xl={2}>
      <Col xl={9}>
        <Card>
          <CardHeader className='flex-column align-items-start'>
            <CardTitle tag='h4'>{t('add_new_address')}</CardTitle>
          </CardHeader>
          <CardBody>
            <Form onSubmit={formik.handleSubmit}>
              <Row xl={2} xs={1}>
                <Col className="mb-1">
                  <Label>{t('reciver_name')}</Label>
                  <Input
                    onChange={formik.handleChange}
                    name="receiver_name"
                    type="text"
                    placeholder={t('enter')} />
                </Col>
                <Col className="mb-1">
                  <Label>{t('region')}</Label>
                  <Input
                    onChange={formik.handleChange}
                    name="region_name"
                    type="text"
                    placeholder={t('enter')} />
                </Col>
                <Col className="mb-1">
                  <Label>{t('district')}</Label>
                  <Input
                    onChange={formik.handleChange}
                    name="district_name"
                    type="text"
                    placeholder={t('enter')} />
                </Col>
                <Col className="mb-1">
                  <Label>{t('address')}</Label>
                  <Input
                    onChange={formik.handleChange}
                    name="street_name"
                    type="text"
                    placeholder={t('enter')} />
                </Col>
                <Col className="mb-1">
                  <Label>{t('phone_number')}</Label>
                  <Input
                    onChange={formik.handleChange}
                    name="phone_number"
                    type="text"
                    placeholder={t('enter')} />
                </Col>
              </Row>
              <div className="d-flex justify-content-end gap-2">
                <Button type="submit" disabled={!(formik.isValid && formik.dirty)} color="success">{t('save')}</Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
      <Col xl={3}>
        {
          address?.map((el, index) => (
            <Card key={index}>
              <CardHeader className='d-flex justify-content-between'>
                <CardTitle tag='h4' >{el.receiver_name}</CardTitle>
                <div className='cursor-pointer'>
                  <Trash size={20} color="red" onClick={() => dispatch(deleteAddress(el?.id))} />
                </div>
              </CardHeader>
              <CardBody>
                <CardText className='mb-0'>{el.street_name}, {el.district_name}, {el.region_name}, {el.phone_number}</CardText>
                <Button
                  block
                  type='button'
                  color='primary'
                  onClick={() => handleSelect(el)}
                  className='btn-next delivery-address mt-2'
                >
                  {t('delevery_this')}
                </Button>
              </CardBody>
            </Card>
          ))
        }
      </Col>
      <Col xl={12}>
        <Button outline color='danger' onClick={() => stepper.previous()}>{t('back')}</Button>
      </Col>
    </Row>
  )
}

export default Address
