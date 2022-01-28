import { Row, Col } from "reactstrap"
import ProductCard from "components/ProductCard"
const WishListPage = () => {
    return (
        <>
            <h1 className="my-2">Wishlist</h1>
            <Row xl={5} lg={3} sm={1}>
                {
                    new Array(10).fill().map(() => (
                        <Col>
                            <ProductCard />
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}

export default WishListPage