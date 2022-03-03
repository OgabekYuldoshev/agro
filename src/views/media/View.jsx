import { Card, CardBody, Row, Col, CardImgOverlay, CardImg, CardText } from "reactstrap"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSingleMedia } from "@store/app"
// import { baseUrl } from '@utils'
import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"
import ImageGallery from 'react-image-gallery'
import { baseUrl } from "../../utility/Utils"
import "react-image-gallery/styles/css/image-gallery.css"
import Empty from "../../components/Empty"

const Contacts = () => {
    const { singleMedia } = useSelector(state => state.app)
    const { id } = useParams()
    const dispatch = useDispatch()
    const { i18n } = useTranslation()

    useEffect(() => {
        dispatch(getSingleMedia(id))
    }, [id])

    if (!singleMedia) {
        return <Empty />
    }

    const images = []

    singleMedia?.media_images?.forEach(item => images.push({
        original: baseUrl + item?.image,
        thumbnail: baseUrl + item?.image
    }))

    console.log(images)
    return (
        <>
            <h1 className="my-2">{singleMedia && singleMedia[`title_${i18n.language}`]}</h1>
            <ImageGallery items={images} />
        </>
    )
}

export default Contacts