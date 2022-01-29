// ** Reducers Imports
import navbar from './navbar'
import layout from './layout'
import auth from './authentication'
import ecommerce from './ecommerce'


const rootReducer = {
  auth,
  navbar,
  layout,
  ecommerce
}

export default rootReducer
