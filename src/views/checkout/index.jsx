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
import { useTranslation } from 'react-i18next'

const Checkout = () => {
  // ** Ref & State
  const history = useHistory()
  const { t, i18n } = useTranslation()
  const ref = useRef(null)
  const [stepper, setStepper] = useState(null)
  const [address, setAddress] = useState(null)
  const [form, setForm] = useState({
    currency_id: null,
    notes: null
  })

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
      title: t('my_cart'),
      icon: <ShoppingCart size={18} />,
      content: (
        <Cart
          t={t}
          i18n={i18n}
          stepper={stepper}
          dispatch={dispatch}
          products={store.cart}
          deleteAllProducts={deleteAllProducts}
          removeFromCart={removeFromCart}
          updateProduct={updateProduct}
        />
      )
    },
    {
      id: 'address',
      title: t('address'),
      icon: <Home size={18} />,
      content: <Address t={t} setAddress={setAddress} stepper={stepper} />
    },
    {
      id: 'confirm',
      title: t('confirmation'),
      icon: <Check size={18} />,
      content: <Info t={t} handleSubmit={handleSubmit} address={address} cart={store.cart} stepper={stepper} form setForm={setForm} form={form} />
    }
  ]

  return (
    <Fragment>
      <h1 className='mt-2'>{t('checkout')}</h1>
      {
        store?.cart?.length ? (
          <Wizard
            ref={ref}
            steps={steps}
            type='modern-horizontal'
            className="mb-2"
            instance={el => setStepper(el)}
          />
        ) : <Empty type="empty" />
      }
    </Fragment>
  )
}

export default Checkout
