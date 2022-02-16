// ** React Imports
import { Fragment } from 'react'
import { Row, Col } from "reactstrap"
// ** Product components
import ProductCard from "components/ProductCard"
// ** Third Party Components
// import classnames from 'classnames'

// // ** Reactstrap Imports
// import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const ProductsPage = ({ data }) => {
  // ** Props
  // const {
  //   store,
  //   dispatch,
  //   addToCart,
  //   activeView,
  //   sidebarOpen,
  //   getProducts,
  //   getCartItems,
  //   addToWishlist,
  //   setActiveView,
  //   deleteCartItem,
  //   setSidebarOpen,
  //   deleteWishlistItem
  // } = props

  // ** Handles pagination
  // const handlePageChange = val => {
  //   if (val === 'next') {
  //     dispatch(getProducts({ ...store.params, page: store.params.page + 1 }))
  //   } else if (val === 'prev') {
  //     dispatch(getProducts({ ...store.params, page: store.params.page - 1 }))
  //   } else {
  //     dispatch(getProducts({ ...store.params, page: val }))
  //   }
  // }

  // ** Render pages
  // const renderPageItems = () => {
  //   const arrLength =
  //     store.totalProducts !== 0 && store.products.length !== 0 ? Number(store.totalProducts) / store.products.length : 3

  //   return new Array(Math.trunc(arrLength)).fill().map((item, index) => {
  //     return (
  //       <PaginationItem
  //         key={index}
  //         active={store.params.page === index + 1}
  //         onClick={() => handlePageChange(index + 1)}
  //       >
  //         <PaginationLink href='/' onClick={e => e.preventDefault()}>
  //           {index + 1}
  //         </PaginationLink>
  //       </PaginationItem>
  //     )
  //   })
  // }

  // // ** handle next page click
  // const handleNext = () => {
  //   if (store.params.page !== Number(store.totalProducts) / products.length) {
  //     handlePageChange('next')
  //   }
  // }

  return (
    <div>
      <div>
        {data.length ? (
          <Fragment>
            <Row xl={4}>
              {
                data?.map((item, index) => (
                  <Col key={index} className="mt-2">
                    <ProductCard item={item} />
                  </Col>
                ))
              }
            </Row>

            {/* <Pagination className='d-flex justify-content-center ecommerce-shop-pagination mt-2'>
              <PaginationItem
                disabled={store.params.page === 1}
                className='prev-item'
                onClick={() => (store.params.page !== 1 ? handlePageChange('prev') : null)}
              >
                <PaginationLink href='/' onClick={e => e.preventDefault()}></PaginationLink>
              </PaginationItem>
              {renderPageItems()}
              <PaginationItem
                className='next-item'
                onClick={() => handleNext()}
                disabled={store.params.page === Number(store.totalProducts) / store.products.length}
              >
                <PaginationLink href='/' onClick={e => e.preventDefault()}></PaginationLink>
              </PaginationItem>
            </Pagination> */}
          </Fragment>
        ) : (
          <div className='d-flex justify-content-center mt-2'>
            <p>No Results</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductsPage
