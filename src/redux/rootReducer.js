// ** Reducers Imports
import auth from './Auth'
import app from './App'
import ecommerce from './Ecommerce'
import product from './Product'
import wishlist from './Wishlist'


const rootReducer = {
  auth,
  ecommerce,
  app,
  product,
  wishlist
}

export default rootReducer
