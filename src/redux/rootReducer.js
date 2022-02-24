// ** Reducers Imports
import auth from './Auth'
import app from './app'
import ecommerce from './ecommerce'
import product from './product'
import wishlist from './Wishlist'
import category from './Category'

const rootReducer = {
  auth,
  ecommerce,
  app,
  product,
  wishlist,
  category
}

export default rootReducer
