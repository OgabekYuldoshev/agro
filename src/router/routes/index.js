import { lazy } from 'react'

// ** Merge Routes
const Routes = [
  {
    path: '/',
    component: lazy(() => import('../../views/main')),
    exact: true
  },
  {
    path: '/category/:id',
    component: lazy(() => import('../../views/category')),
    exact: true
  },
  {
    path: '/wishlist',
    component: lazy(() => import('../../views/wishlist')),
    exact: true
  },
  {
    path: '/profile',
    component: lazy(() => import('../../views/profile')),
    exact: true
  },
  {
    path: '/checkout',
    component: lazy(() => import('../../views/checkout')),
    exact: true
  },
  {
    path: '/product/:id',
    component: lazy(() => import('../../views/product')),
    exact: true
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error'))
  }
]

export { Routes }
