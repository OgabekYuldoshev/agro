import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - HeloF'

// ** Default Route
const DefaultRoute = '/'

// ** Merge Routes
const Routes = [
  {
    path: '/',
    component: lazy(() => import('../../views/home')),
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

export { DefaultRoute, TemplateTitle, Routes }
