import { useEffect } from "react"
import { Card, CardBody } from "reactstrap"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getPageContent } from "@store/App"
import Empty from "components/Empty"

const Page = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { pages } = useSelector(state => state.app)
    const page = pages[0]
    useEffect(() => {
        dispatch(getPageContent({ page_id: id }))
    }, [id])
    console.log(pages)
    return pages?.length && page ? (
        <>
            <h2 className="my-2">{page?.title}</h2>
            <Card>
                <CardBody>
                    <div dangerouslySetInnerHTML={{ __html: page?.content }} />
                </CardBody>
            </Card>
        </>
    ) : <Empty label="Sahifa topilmadi" />

}
export default Page