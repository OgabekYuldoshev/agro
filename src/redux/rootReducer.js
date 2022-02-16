// ** Reducers Imports
import auth from './Auth'
import app from './App'
import ecommerce from './Ecommerce'
import product from './Product'
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
