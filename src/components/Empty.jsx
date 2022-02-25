import { useTranslation } from "react-i18next"

export default ({ type = 'nodata' }) => {
    const { t } = useTranslation()
    return (
        <div className="d-flex flex-column align-items-center justify-content-center gap-2 py-3">
            <img src={require(`@src/assets/images/site/${type}.svg`).default} width={250} />
            <h2 className="text-center">{t(type)}</h2>
        </div>
    )
}