import * as RS from "reactstrap"
import * as I from "react-feather"
import { useFormik } from "formik"
import { useDispatch } from "react-redux"
import * as yup from "yup"
import { sendMessage } from "@store/App"

const ValidateSchema = yup.object({
    name: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string().required(),
    text: yup.string().required()
})
export default () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        validationSchema: ValidateSchema,
        initialValues: {
            name: '',
            phone: '',
            email: '',
            text: ''
        },
        onSubmit: (values, { resetForm }) => {
            dispatch(sendMessage(values))
            resetForm()
        }
    })
    return (
        <footer className="bg-primary layout text-white">
            <RS.Row xl={3} md={2} sm={1} className="py-4">
                <RS.Col className="mb-1" xl={3}>
                    <h3 className="text-white mb-1">
                        Foydali havolalar
                    </h3>
                    <div className="d-flex flex-column">
                        <p className="cursor-pointer">Shaxsiy Kabinet</p>
                        <p className="cursor-pointer">Shaxsiy Kabinet</p>
                        <p className="cursor-pointer">Shaxsiy Kabinet</p>
                        <p className="cursor-pointer">Shaxsiy Kabinet</p>
                    </div>
                </RS.Col>
                <RS.Col className="mb-1" xl={3}>
                    <h3 className="text-white mb-1">
                        Bog'lanish uchun ma'lumot
                    </h3>
                    <div className="d-flex flex-column">
                        <div className="d-flex gap-1">
                            <I.MapPin />
                            <p className="cursor-pointer">QFY Hasanboy, TKAY yoqasida</p>
                        </div>
                        <div className="d-flex gap-1">
                            <I.Map />
                            <p className="cursor-pointer">O'zbekiston, Toshkent viloyati</p>
                        </div>
                        <div className="d-flex gap-1">
                            <I.Phone />
                            <p className="cursor-pointer">+998(71) 209-68-68, 209-68-26</p>
                        </div>
                        <div className="d-flex gap-1">
                            <I.Mail />
                            <p className="cursor-pointer">info@agro.house</p>
                        </div>
                    </div>
                </RS.Col>
                <RS.Col md={12} xl={6} className="mb-1">
                    <h3 className="text-white mb-1">
                        Murojaatlar uchun
                    </h3>
                    <RS.Form onSubmit={formik.handleSubmit}>
                        <RS.Row xl={2} >
                            <RS.Col xl={12} className="mb-2">
                                <RS.Label className="text-white">F.I.O</RS.Label>
                                <RS.Input type="name" name="name" placeholder="Kiriting..." onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            </RS.Col>
                            <RS.Col className="mb-2">
                                <RS.Label className="text-white">Telfon Raqam</RS.Label>
                                <RS.Input type="tel" name="phone" placeholder="ex: 998 9x xxx xx xx" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            </RS.Col>
                            <RS.Col className="mb-2">
                                <RS.Label className="text-white">Email</RS.Label>
                                <RS.Input type="email" name="email" placeholder="Kiriting..." onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            </RS.Col>
                            <RS.Col xl={12} className="mb-2">
                                <RS.Label className="text-white">Mavzu haqida</RS.Label>
                                <RS.Input type="textarea" name="text" placeholder="Kiriting..." onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            </RS.Col>
                        </RS.Row>
                        <div className="d-flex justify-content-end">
                            <RS.Button color="success" type="submit" disabled={!(formik.isValid && formik.dirty)} >Yuborish</RS.Button>
                        </div>
                    </RS.Form>
                </RS.Col>
            </RS.Row>
            <p className="py-1 border-top text-center">
                Developed by <a href="https://yuldoshev.vercel.app/">Ogabek Yuldoshev</a>, 2022
            </p>
        </footer>
    )
}