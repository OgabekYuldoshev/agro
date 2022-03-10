import { useLayoutEffect } from "react"
import SideBar from './SideBar'
import Products from './products'
import { Col, Row } from "reactstrap"
import { Filter } from "react-feather"
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryProducts } from '@store/Category'
import { useParams, useLocation } from "react-router-dom"
import qs from "qs"
import '@styles/react/apps/app-ecommerce.scss'
import { useTranslation } from "react-i18next"
// import { baseUrl } from "@utils"

const Shop = () => {
    const dispatch = useDispatch()
    const { i18n } = useTranslation()
    const location = useLocation()
    const { products, category, currentPage, perPage, totalPages, total, isLoading } = useSelector(state => state.category)
    const params = useParams()
    const defaultQs = qs.parse(location.search, { ignoreQueryPrefix: true })
    const query = {
        ...defaultQs,
        category_id: params?.id
    }
    const props = {
        isLoading,
        currentPage,
        perPage,
        totalPages,
        total
    }
    useLayoutEffect(() => {
        dispatch(getCategoryProducts(query))
    }, [location])

    // const style = {
    //     background: `url(${category?.image ? baseUrl + category?.image : 'https://images.unsplash.com/photo-1481437156560-3205f6a55735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1495&q=80'})`,
    //     backgroundSize: "cover",
    //     height: "150px",
    //     backgroundRepeat: "no-repeat",
    //     backgroundPosition: "center"
    // }

    return (
        <div className='my-2'>
            {/* <div style={style} className="d-flex align-items-center justify-content-center p-2 bg-overlay rounded shadow">
                <h1 className="text-white bg-black"></h1>
            </div> */}
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
            <div className="my-2 d-flex align-items-center justify-content-between">
                <h2 className="h1">{category[`name_${i18n.language}`]}</h2>
            </div>
            <Row sm={1} md={1} xl={2}>
                <Col xl={3}>
                    <SideBar />
                </Col>
                <Col xl={9}>
                    <Products items={products} {...props} />
                </Col>
            </Row>
        </div>
    )
}

export default Shop
