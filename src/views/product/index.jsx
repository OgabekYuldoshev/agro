// ** React Imports
// import { useEffect, Fragment } from 'react'
// import { useParams } from 'react-router-dom'

// ** Product detail components
import ItemFeatures from './ItemFeatures'
import ProductDetails from './ProductDetails'
import RelatedProducts from './RelatedProducts'

// ** Custom Components
import BreadCrumbs from '@components/breadcrumbs'

// ** Reactstrap Imports
import { Card, CardBody } from 'reactstrap'

// ** Store & Actions
import { useDispatch } from 'react-redux'
import { addToCart } from '@store/ecommerce'
import { products } from "@db"
import { useParams } from "react-router-dom"
import '@styles/base/pages/app-ecommerce-details.scss'

const Details = () => {
  // ** Vars
  // const params = useParams().product
  // const productId = params.substring(params.lastIndexOf('-') + 1)
  const params = useParams()
  // // ** Store Vars
  const dispatch = useDispatch()
  // const store = useSelector(state => state.ecommerce)
  const item = products.find(item => item.slug === params.slug)

  // // ** ComponentDidMount : Get product
  // useEffect(() => {
  //   dispatch(getProduct(productId))
  // }, [])

  return (
    <div className="mt-2">
      <BreadCrumbs breadCrumbTitle='Product Details' breadCrumbParent='Details' breadCrumbActive='Apple' />
      <div className='app-ecommerce-details'>
        <Card>
          <CardBody>
            <ProductDetails
              dispatch={dispatch}
              addToCart={addToCart}
              item={item}
            // productId={productId}
            // getProduct={getProduct}
            // data={store.productDetail}
            // addToWishlist={addToWishlist}
            // deleteWishlistItem={deleteWishlistItem}
            />
          </CardBody>
          <ItemFeatures />
          <CardBody>
            <RelatedProducts />
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Details
