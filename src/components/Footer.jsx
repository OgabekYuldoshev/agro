import * as RS from "reactstrap"
import * as I from "react-feather"

export default () => {
    return (
        <footer className="px-5 bg-success text-white">
            <RS.Row xl={2} className="py-4">
                <RS.Col>
                    <RS.Row>
                        <RS.Col>
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
                        <RS.Col>
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
                    </RS.Row>
                </RS.Col>
                <RS.Col>
                    <RS.Row xl={2} >
                        <RS.Col className="mb-2">
                            <RS.Label className="text-white">F.I.O</RS.Label>
                            <RS.Input type="text" placeholder="Kiriting..." />
                        </RS.Col>
                        <RS.Col className="mb-2">
                            <RS.Label className="text-white">Email</RS.Label>
                            <RS.Input type="email" placeholder="Kiriting..." />
                        </RS.Col>
                        <RS.Col xl={12} className="mb-2">
                            <RS.Label className="text-white">Mavzu haqida</RS.Label>
                            <RS.Input type="textarea" placeholder="Kiriting..." />
                        </RS.Col>
                    </RS.Row>
                    <div className="d-flex justify-content-end">
                        <RS.Button color="primary">Yuborish</RS.Button>
                    </div>
                </RS.Col>
            </RS.Row>
            <p className="py-1 border-top">
                Developed by <a href="https://yuldoshev.vercel.app/">Ogabek Yuldoshev</a>, 2022
            </p>
        </footer>
    )
}