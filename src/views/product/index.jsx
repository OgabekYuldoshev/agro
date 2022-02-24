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
import { useTranslation } from "react-i18next"
// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '@store/ecommerce'
import { addToWishList, deleteFromWishList } from "@store/Wishlist"
import { useParams } from "react-router-dom"
import '@styles/base/pages/app-ecommerce-details.scss'
import Loading from "components/Loading"

const Details = () => {
  const params = useParams()
  const { i18n } = useTranslation()
  const dispatch = useDispatch()
  const store = useSelector(state => state.product)
  const wishlist = useSelector(state => state.wishlist?.wishlist)
  useEffect(() => {
    dispatch(getProductDetails(params.id))
  }, [params.id])

  if (store.isLoading) {
    return <Loading />
  }
  const handleRemoveFromWishlist = (item) => {
    const found = wishlist?.find((product) => product.products.id === item.id)
    if (found) return dispatch(deleteFromWishList(found.id))
    return toast.error("Bunaqa mahsulot wishlistda topilmadi!")
  }
  console.log(store?.productDetails)

  return (
    <div className="mt-2">
      <BreadCrumbs breadCrumbTitle='Product Details' breadCrumbParent='Details' breadCrumbActive={store.productDetails[`name_${i18n.language}`]} />
      <div className='app-ecommerce-details'>
        <Card>
          <CardBody>
            <ProductDetails
              dispatch={dispatch}
              addToCart={addToCart}
              item={store.productDetails}
              handleRemoveFromWishlist={handleRemoveFromWishlist}
              addToWishList={addToWishList}
            />
          </CardBody>
          <ItemFeatures />
          <CardBody>
            <RelatedProducts data={store?.review_products} />
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Details
