import { Row, Col } from "reactstrap"
import ProductCard from "components/ProductCard"
// import { products } from "@db"
import { useSelector } from "react-redux"
const WishListPage = () => {
    const wishlist = useSelector(state => state.wishlist?.wishlist)
    return (
        <>
            <h1 className="my-2">Wishlist</h1>
            <Row xl={5} lg={3} sm={1}>
                {
                    wishlist?.map((item, index) => (
                        <Col key={index}>
                            <ProductCard item={item?.products} />
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}

export default WishListPage