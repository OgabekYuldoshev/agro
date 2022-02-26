import { Row, Col } from "reactstrap"
import ProductCard from "components/ProductCard"
import Empty from "components/Empty"
import NotAuth from "@src/views/NotAuthorized"
import { useTranslation } from "react-i18next"
// import { products } from "@db"
import { useSelector } from "react-redux"
const WishListPage = () => {
    const wishlist = useSelector(state => state.wishlist?.wishlist)
    const { t } = useTranslation()
    const auth = useSelector(state => state.auth?.isAuth)
    if (!auth) {
        return <NotAuth />
    }
    return (
        <>
            <h1 className="my-2">{t('wishlist')}</h1>
            {
                wishlist.length !== 0 ? (
                    <Row xl={4} lg={3} md={2} sm={1}>
                        {
                            wishlist?.map((item, index) => (
                                <Col key={index}>
                                    <ProductCard item={item?.products} />
                                </Col>
                            ))
                        }
                    </Row>
                ) : <Empty label={t('wishlist_empty')} />
            }
        </>
    )
}

export default WishListPage