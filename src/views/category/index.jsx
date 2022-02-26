import { useEffect, useState } from "react"
import FilterCom from './Filter'
import Products from './products'
import { Button, Card, CardBody, CardImg, CardImgOverlay } from "reactstrap"
import { Filter } from "react-feather"
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryProducts } from '@store/Category'
import { useParams, useLocation } from "react-router-dom"
import qs from "qs"
import '@styles/react/apps/app-ecommerce.scss'
import { useTranslation } from "react-i18next"
import { baseUrl } from "@utils"

const Shop = () => {
    const dispatch = useDispatch()
    const { t, i18n } = useTranslation()
    const location = useLocation()
    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(cur => !cur)
    const { products, category, currentPage, perPage, totalPages, total } = useSelector(state => state.category)
    const params = useParams()
    const defaultQs = qs.parse(location.search, { ignoreQueryPrefix: true })
    const query = {
        ...defaultQs,
        main_parent_id: params?.id
    }
    const props = {
        currentPage,
        perPage,
        totalPages,
        total
    }
    useEffect(() => {
        dispatch(getCategoryProducts(query))
    }, [location])

    const style = {
        background: `url(${baseUrl + category?.image})`,
        backgroundSize: "cover",
        height: "150px",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    }

    return (
        <div className='my-2'>
            <div style={style} className="d-flex align-items-center justify-content-center p-2 bg-overlay rounded shadow">
                <h1 className="text-white">{category[`name_${i18n.language}`]}</h1>
            </div>
            {/* <Card className='text-white border-0'>
                <CardImg top width={300} height={300} src={baseUrl + category?.image} alt='card-overlay' />
                <CardImgOverlay className='bg-overlay'>
                    <CardBody>
                        <CardBody>
                            ss
                        </CardBody>
                    </CardBody>
                </CardImgOverlay>
            </Card> */}
            <div className="mt-2 d-flex align-items-center justify-content-between">
                <h3>{t('items')}</h3>
                <Button.Ripple color="primary" outline onClick={toggle}>
                    <Filter size={16} />
                </Button.Ripple>
            </div>
            <FilterCom toggle={toggle} open={open} />
            <Products items={products} {...props} />
        </div>
    )
}

export default Shop
