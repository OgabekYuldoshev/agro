import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - HeloF'

// ** Default Route
const DefaultRoute = '/'

// ** Merge Routes
const Routes = [
  {
    path: '/',
    component: lazy(() => import('../../views/Home')),
    exact: true
  },
  {
    path: '/product-detail/:slug',
    component: lazy(() => import('../../views/ProductDetail')),
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
