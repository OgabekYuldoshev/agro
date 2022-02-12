import { Link } from 'react-router-dom'
import * as RS from 'reactstrap'
import * as I from 'react-feather'
import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart } from "@store/Ecommerce"
import { addToWishList, deleteFromWishList } from "@store/Wishlist"
import { inCart, inWishList } from "@utils"
import { toast } from 'react-toastify'
// import { useSelector } from 'react-redux'

export default ({ item }) => {
    const dispatch = useDispatch()
    const wishlist = useSelector(state => state.wishlist?.wishlist)
    const handleAddToCart = () => {
        dispatch(addToCart({
            item,
            qty: 1
        }))
    }
    const handleRemove = () => {
        dispatch(removeFromCart(item))
    }
    const handleRemoveFromWishlist = () => {
        const found = wishlist?.find((product) => product.products.id === item.id)
        if (found) return dispatch(deleteFromWishList(found.id))
        return toast.error("Bunaqa mahsulot wishlistda topilmadi!")
    }
    return (
        <RS.Card className='border rounded'>
            <div>
                <Link to={`/product/${item?.id}`}>
                    <img className='img-fluid card-img-top' src={require('@src/assets/images/pages/eCommerce/26.png').default} alt="he" />
                </Link>
            </div>
            <RS.CardBody>
                <Link to={`/product/${item?.id}`}>
                    <h6>{item?.name}</h6>
                </Link>
                <div>
                    ${item?.price}
                </div>
            </RS.CardBody>
            <div className='border-top py-1 mx-1 d-flex justify-content-between'>
                {
                    inWishList(item) ? (
                        <RS.Button.Ripple onClick={handleRemoveFromWishlist} size='sm' className='btn-icon rounded-circle cursor-pointer' outline color='danger'>
                            <I.Heart size={16} color="red" fill="red" />
                        </RS.Button.Ripple>
                    ) : (
                        <RS.Button.Ripple onClick={() => dispatch(addToWishList(item.id))} size='sm' className='btn-icon rounded-circle cursor-pointer' outline color='primary'>
                            <I.Heart size={16} />
                        </RS.Button.Ripple>
                    )
                }
                {
                    inCart(item) ? (
                        <RS.Button.Ripple onClick={handleRemove} size='sm' className='btn-icon rounded-circle cursor-pointer' outline color='danger'>
                            <I.Trash size={16} />
                        </RS.Button.Ripple>
                    ) : (
                        <RS.Button.Ripple onClick={handleAddToCart} size='sm' className='btn-icon rounded-circle cursor-pointer' outline color='primary'>
                            <I.ShoppingCart size={16} />
                        </RS.Button.Ripple>
                    )
                }

            </div>
        </RS.Card>
    )
}