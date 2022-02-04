// ** Reducers Imports
import auth from './Auth'
import app from './app'
import ecommerce from './ecommerce'
import product from './product'

const rootReducer = {
  auth,
  ecommerce,
  app,
  product
}

export default rootReducer
