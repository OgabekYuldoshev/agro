import { Row, Col } from "reactstrap"
import ProductCard from "components/ProductCard"
import { products } from "@db"
const WishListPage = () => {
    return (
        <>
            <h1 className="my-2">Wishlist</h1>
            <Row xl={5} lg={3} sm={1}>
                {
                    products.map((item, index) => (
                        <Col key={index}>
                            <ProductCard item={item} />
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}

export default WishListPage