import { Row, Col } from "reactstrap"
// ** Product components
import ProductCard from "components/ProductCard"
import ReactPaginate from "react-paginate"
import { useHistory, useLocation } from 'react-router-dom'
import qs from 'qs'

const ProductsPage = ({ items }) => {
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
        {items?.data?.length ? (
          <>
            <Row xl={4}>
              {
                items?.data?.map((item, index) => (
                  <Col key={index} className="mt-2">
                    <ProductCard item={item} />
                  </Col>
                ))
              }
            </Row>
            <div>
              <ReactPaginate
                previousLabel={''}
                nextLabel={''}
                forcePage={items?.current_page - 1}
                onPageChange={handlePageClick}
                pageCount={items?.last_page}
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
          </>
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
