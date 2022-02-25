// import { useEffect } from "react"
import { Card, CardBody } from "reactstrap"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
// import { getPageContent } from "@store/app"
import Empty from "components/Empty"
import { useTranslation } from "react-i18next"

const Page = () => {
    const { id } = useParams()
    const { i18n } = useTranslation()
    const { pages } = useSelector(state => state.app)
    const page = () => { return pages?.find(p => { return p?.id === parseInt(id) }) }

    return pages?.length && page() ? (
        <>
            <h2 className="my-2">{page()[`title_${i18n.language}`]}</h2>
            <Card>
                <CardBody className="overflow-auto">
                    <div dangerouslySetInnerHTML={{ __html: page()[`content_${i18n.language}`] }} />
                </CardBody>
            </Card>
        </>
    ) : <Empty label="Sahifa topilmadi" />

}
export default Page