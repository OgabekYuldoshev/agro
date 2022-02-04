// ** React Imports
import { useEffect } from 'react'
// import { useParams } from 'react-router-dom'

// ** Product detail components
import ItemFeatures from './ItemFeatures'
import ProductDetails from './ProductDetails'
import RelatedProducts from './RelatedProducts'
import { getProductDetails } from "@store/product"
// ** Custom Components
import BreadCrumbs from '@components/breadcrumbs'

// ** Reactstrap Imports
import { Card, CardBody } from 'reactstrap'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '@store/ecommerce'
// import { products } from "@db"
import { useParams } from "react-router-dom"
import '@styles/base/pages/app-ecommerce-details.scss'
import Loading from "components/Loading"

const Details = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const store = useSelector(state => state.product)
  useEffect(() => {
    dispatch(getProductDetails(params.id))
  }, [params.id])

  if (store.isLoading) {
    return <Loading />
  }

  return (
    <div className="mt-2">
      <BreadCrumbs breadCrumbTitle='Product Details' breadCrumbParent='Details' breadCrumbActive={store.productDetails?.name} />
      <div className='app-ecommerce-details'>
        <Card>
          <CardBody>
            <ProductDetails
              dispatch={dispatch}
              addToCart={addToCart}
              item={store.productDetails}
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
