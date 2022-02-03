// ** React Imports
import { Fragment } from 'react'
import { Row, Col } from "reactstrap"
// ** Shop Components
import Sidebar from './sidebar'
import Products from './products'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// // ** Store & Actions
// import { useDispatch, useSelector } from 'react-redux'
// import { addToCart, getProducts, getCartItems, addToWishlist, deleteCartItem, deleteWishlistItem } from '../store'

// ** Styles
import '@styles/react/apps/app-ecommerce.scss'

const Shop = () => {
    // ** States
    // const [activeView, setActiveView] = useState('grid')
    // const [sidebarOpen, setSidebarOpen] = useState(false)

    // ** Vars
    // const dispatch = useDispatch()
    // const store = useSelector(state => state.ecommerce)

    // // ** Get products
    // useEffect(() => {
    //     dispatch(
    //         getProducts({
    //             q: '',
    //             sortBy: 'featured',
    //             perPage: 9,
    //             page: 1
    //         })
    //     )
    // }, [dispatch])

    return (
        <div className='my-2'>
            <Breadcrumbs breadCrumbTitle='Shop' breadCrumbParent='eCommerce' breadCrumbActive='Shop' />
            <Row xl={2}>
                <Col xl={3}>
                    <Sidebar sidebarOpen={true} />
                </Col>
                <Col xl={9}>
                    <Products
                    // store={store}
                    // dispatch={dispatch}
                    // addToCart={addToCart}
                    // activeView={activeView}
                    // getProducts={getProducts}
                    // sidebarOpen={sidebarOpen}
                    // getCartItems={getCartItems}
                    // setActiveView={setActiveView}
                    // addToWishlist={addToWishlist}
                    // setSidebarOpen={setSidebarOpen}
                    // deleteCartItem={deleteCartItem}
                    // deleteWishlistItem={deleteWishlistItem}
                    />
                </Col>
            </Row>
        </div>
    )
}
export default Shop
