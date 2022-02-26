import { useEffect } from "react"
import { Label, Row, Col, Input, Form, Button } from "reactstrap"
import { getAddress, addAddress } from "@store/app"
import { useFormik } from "formik"
import { useDispatch } from "react-redux"
import * as Yup from "yup"
import { useTranslation } from "react-i18next"

const ValidSchema = Yup.object({
    receiver_name: Yup.string()
        .max(15)
        .min(3)
        .required("Required"),
    region_name: Yup.string()
        .min(3)
        .max(20)
        .required("Required"),
    district_name: Yup.string()
        .min(3)
        .max(20)
        .required("Required"),
    street_name: Yup.string()
        .min(3)
        .max(20)
        .required("Required"),
    phone_number: Yup.string()
        .min(3)
        .max(20)
        .required("Required")
})
const Address = () => {

    const dispatch = useDispatch()
    const { t } = useTranslation()

    useEffect(() => {
        dispatch(getAddress())
    }, [])

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
    return (
        <>
            <h2>{t('add_new_address')}</h2>
            <Form onSubmit={formik.handleSubmit}>
                <Row xl={2} xs={1}>
                    <Col className="mb-1">
                        <Label>{t('recipient_name')}</Label>
                        <Input
                            onChange={formik.handleChange}
                            name="receiver_name"
                            type="text"
                            placeholder={t('placeholder:enter')} />
                    </Col>
                    <Col className="mb-1">
                        <Label>{t('region')}</Label>
                        <Input
                            onChange={formik.handleChange}
                            name="region_name"
                            type="text"
                            placeholder={t('placeholder:enter')} />
                    </Col>
                    <Col className="mb-1">
                        <Label>{t('sub_region')}</Label>
                        <Input
                            onChange={formik.handleChange}
                            name="district_name"
                            type="text"
                            placeholder={t('placeholder:enter')} />
                    </Col>
                    <Col className="mb-1">
                        <Label>{t('address')}</Label>
                        <Input
                            onChange={formik.handleChange}
                            name="street_name"
                            type="text"
                            placeholder={t('placeholder:enter')} />
                    </Col>
                    <Col className="mb-1">
                        <Label>{t('phone_number')}</Label>
                        <Input
                            onChange={formik.handleChange}
                            name="phone_number"
                            type="text"
                            placeholder={t('placeholder:enter')} />
                    </Col>
                </Row>
                <div className="d-flex justify-content-end gap-2">
                    <Button type="submit" disabled={!(formik.isValid && formik.dirty)} color="success">{t('save')}</Button>
                </div>
            </Form>
        </>
    )
}
export default Address