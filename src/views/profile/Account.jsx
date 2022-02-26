import { useFormik } from "formik"
import { Label, Row, Col, Input, Form, Button } from "reactstrap"
import { updateUser } from "@store/Auth"
import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"

const Account = ({ data }) => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const formik = useFormik({
        initialValues: {
            first_name: data.first_name,
            last_name: data.last_name,
            second_name: data.second_name,
            email: data.email,
            phone_number: data.phone_number
        },
        onSubmit: (val) => {
            dispatch(updateUser(val))
        }
    })
    return (
        <>
            <h2>{t('account_settings')}</h2>
            <Form onSubmit={formik.handleSubmit}>
                <Row xl={3} xs={1}>
                    <Col className="mb-1">
                        <Label>{t('first_name')}</Label>
                        <Input type="text" name="first_name" placeholder={t('placeholder:enter')} onChange={formik.handleChange} defaultValue={formik.values.first_name} />
                    </Col>
                    <Col className="mb-1">
                        <Label>{t('last_name')}</Label>
                        <Input type="text" name="last_name" placeholder={t('placeholder:enter')} onChange={formik.handleChange} defaultValue={formik.values.last_name} />
                    </Col>
                    <Col className="mb-1">
                        <Label>{t('seccond_name')}</Label>
                        <Input type="text" name="second_name" placeholder={t('placeholder:enter')} onChange={formik.handleChange} defaultValue={formik.values.second_name} />
                    </Col>
                    <Col xl={6} className="mb-1">
                        <Label>{t('email')}</Label>
                        <Input type="text" name="email" disabled placeholder={t('placeholder:enter')} onChange={formik.handleChange} defaultValue={formik.values.email} />
                    </Col>
                    <Col xl={6} className="mb-1">
                        <Label>{t('phone_number')}</Label>
                        <Input type="tel" name="phone_number" placeholder={t('placeholder:enter')} onChange={formik.handleChange} defaultValue={formik.values.phone_number} />
                    </Col>
                </Row>
                <div className="d-flex justify-content-end">
                    <Button color="success" type="submit">{t('save')}</Button>
                </div>
            </Form>
        </>
    )
}
export default Account