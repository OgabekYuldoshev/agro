import { lazy } from 'react'

// ** Merge Routes
const Routes = [
  {
    path: '/',
    component: lazy(() => import('../../views/main')),
    exact: true
  },
  {
    path: '/wishlist',
    component: lazy(() => import('../../views/wishlist')),
    exact: true
  },
  {
    path: '/checkout',
    component: lazy(() => import('../../views/checkout')),
    exact: true
  },
  {
    path: '/product/:slug',
    component: lazy(() => import('../../views/product')),
    exact: true
  },
  {
    path: '/login',
    component: lazy(() => import('../../views/Login')),
    meta: {
      authRoute: true
    }
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error'))
  }
]

export { Routes }
