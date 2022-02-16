// ** React Imports
import { Row, Col } from "reactstrap"
import { useEffect } from "react"
import ReactSelect from "react-select"
// ** Shop Components
import Sidebar from './sidebar'
import Products from './products'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// // ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryProducts } from '@store/Category'
import { useParams } from "react-router-dom"
// import qs from "qs"
import '@styles/react/apps/app-ecommerce.scss'

const Shop = () => {
    // ** States
    // const [activeView, setActiveView] = useState('grid')
    // const [sidebarOpen, setSidebarOpen] = useState(false)

    // ** Vars
    const dispatch = useDispatch()
    const { products } = useSelector(state => state.category)
    const params = useParams()

    const query = {
        category_id: params?.id
    }
    // const param = qs.stringify(query)

    useEffect(() => {
        dispatch(getCategoryProducts(query))
    }, [dispatch])

    return (
        <div className='my-2'>
            <Breadcrumbs breadCrumbTitle='Shop' breadCrumbParent='eCommerce' breadCrumbActive='Shop' />
            <Row xl={2}>
                <Col xl={3}>
                    <Sidebar sidebarOpen={true} />
                </Col>
                <Col xl={9}>
                    <HeaderBar />
                    <Products
                        data={products}
                    />
                </Col>
            </Row>
        </div>
    )
}

const HeaderBar = () => {
    return (
        <>
            <ReactSelect
                options={[25, 50, 75]}
                getOptionLabel={option => option}
                getOptionValue={option => option} />
        </>
    )
}
export default Shop
