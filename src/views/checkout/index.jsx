// ** React Imports
import { Fragment, useRef, useState } from 'react'

// ** Custom Components
import Wizard from '@components/wizard'
import BreadCrumbs from '@components/breadcrumbs'

// ** Steps
import Cart from './steps/Cart'
import Address from './steps/Address'
import Payment from './steps/Payment'

// ** Third Party Components
import { ShoppingCart, Home, CreditCard } from 'react-feather'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { deleteAllProducts, removeFromCart, updateProduct } from '@store/ecommerce'
import Empty from '../../components/Empty'

const Checkout = () => {
  // ** Ref & State
  const ref = useRef(null)
  const [stepper, setStepper] = useState(null)

  // // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.ecommerce)

  // // ** Get Cart Items on mount
  // useEffect(() => {
  //   dispatch(getCartItems())
  // }, [])

  const steps = [
    {
      id: 'cart',
      title: 'Cart',
      subtitle: 'Your Cart Items',
      icon: <ShoppingCart size={18} />,
      content: (
        <Cart
          stepper={stepper}
          dispatch={dispatch}
          products={store.cart}
          deleteAllProducts={deleteAllProducts}
          removeFromCart={removeFromCart}
          updateProduct={updateProduct}
        // addToWishlist={addToWishlist}
        // deleteCartItem={deleteCartItem}
        // deleteWishlistItem={deleteWishlistItem}
        />
      )
    },
    {
      id: 'Address',
      title: 'Address',
      subtitle: 'Enter Your Address',
      icon: <Home size={18} />,
      content: <Address stepper={stepper} />
    },
    {
      id: 'payment',
      title: 'Payment',
      subtitle: 'Select Payment Method',
      icon: <CreditCard size={18} />,
      content: <Payment stepper={stepper} />
    }
  ]

  return (
    <Fragment>
      <h1 className='mt-2'>Checkout</h1>
      {
        store?.cart?.length ? (
          <Wizard
            ref={ref}
            steps={steps}
            type='modern-horizontal'
            className="mb-2"
            instance={el => setStepper(el)}
            options={{
              linear: false
            }}
          />
        ) : <Empty label="Your cart is empty!" />
      }
    </Fragment>
  )
}

export default Checkout
