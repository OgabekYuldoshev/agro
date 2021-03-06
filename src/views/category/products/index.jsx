import { Row, Col } from "reactstrap"
// ** Product components
import ProductCard from "components/ProductCard"
import ReactPaginate from "react-paginate"
import { useHistory, useLocation } from 'react-router-dom'
import qs from 'qs'
import UILoader from '@components/ui-loader'
import Spinner from '@components/spinner/Loading-spinner'
const ProductsPage = ({ items, currentPage, totalPages, isLoading }) => {
  const history = useHistory()
  const location = useLocation()
  const defaultQs = qs.parse(location.search, { ignoreQueryPrefix: true })

  const handlePageClick = (e) => {
    const query = {
      ...defaultQs,
      page: e?.selected + 1
    }
    history.push({
      pathname: location.pathname,
      search: qs.stringify(query)
    })
  }

  return (
    <div>
      <div>
        {items?.length ? (
          <UILoader blocking={isLoading} loader={<Spinner />}>
            <Row xl={3} lg={3} sm={2} xs={2}>
              {
                items?.map((item, index) => (
                  <Col key={index}>
                    <ProductCard item={item} />
                  </Col>
                ))
              }
            </Row>
            <div>
              <ReactPaginate
                previousLabel={''}
                nextLabel={''}
                forcePage={currentPage - 1}
                onPageChange={handlePageClick}
                pageCount={totalPages}
                breakLabel={'...'}
                pageRangeDisplayed={2}
                marginPagesDisplayed={2}
                activeClassName='active'
                pageClassName='page-item'
                breakClassName='page-item'
                nextLinkClassName='page-link'
                pageLinkClassName='page-link'
                breakLinkClassName='page-link'
                previousLinkClassName='page-link'
                nextClassName='page-item next-item'
                previousClassName='page-item prev-item'
                containerClassName={'pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1'}
              />
            </div>
          </UILoader>
        ) : (
          <div className='d-flex justify-content-center'>
            <p>No Results</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductsPage
