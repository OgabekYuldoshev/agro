// ** React Imports
import { Fragment, useRef, useState } from 'react'

// ** Custom Components
import Wizard from '@components/wizard'
// ** Steps
import Cart from './steps/Cart'
import Address from './steps/Address'
import Info from './steps/Info'

// ** Third Party Components
import { ShoppingCart, Home, CreditCard, Check } from 'react-feather'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { deleteAllProducts, removeFromCart, updateProduct } from '@store/ecommerce'
import Empty from '../../components/Empty'
import { createOrder } from '@store/app'
import { unwrapResult } from '@reduxjs/toolkit'
import { useHistory } from 'react-router-dom'

const Checkout = () => {
  // ** Ref & State
  const history = useHistory()
  const ref = useRef(null)
  const [stepper, setStepper] = useState(null)
  const [address, setAddress] = useState(null)
  const [form, setForm] = useState({
    currency_id: null,
    notes: null
  })
  console.log(form)

  // // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.ecommerce)

  const handleSubmit = () => {
    const order_lists = []
    store?.cart.forEach((product) => {
      order_lists.push({
        product_id: product?.item?.id,
        price_per_unit: product?.item?.id,
        amount: product?.qty,
        unit_id: product?.item?.unit_id,
        nett_weight: product?.item?.nett_weight
      })
    })
    dispatch(createOrder({
      notes: form?.notes,
      currency_id: form?.currency_id,
      address_id: address?.id,
      order_lists
    })).then(unwrapResult).then(() => {
      dispatch(deleteAllProducts())
      history.push('/profile')
    })
  }

  const steps = [
    {
      id: 'cart',
      title: 'Savat',
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
      id: 'address',
      title: 'Manzil',
      subtitle: 'Enter Your Address',
      icon: <Home size={18} />,
      content: <Address setAddress={setAddress} stepper={stepper} />
    },
    {
      id: 'confirm',
      title: 'Tasdiqlash',
      subtitle: 'Select Payment Method',
      icon: <Check size={18} />,
      content: <Info handleSubmit={handleSubmit} address={address} cart={store.cart} stepper={stepper} form setForm={setForm} form={form} />
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
          // options={{
          //   linear: false
          // }}
          />
        ) : <Empty label="Your cart is empty!" type="empty" />
      }
    </Fragment>
  )
}

export default Checkout
