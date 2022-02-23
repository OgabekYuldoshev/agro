import { useEffect, useState } from "react"
import FilterCom from './Filter'
import Products from './products'
import { Button } from "reactstrap"
import { Filter } from "react-feather"
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryProducts } from '@store/Category'
import { useParams, useLocation } from "react-router-dom"
import qs from "qs"
import '@styles/react/apps/app-ecommerce.scss'

const Shop = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(cur => !cur)
    const { products } = useSelector(state => state.category)
    const params = useParams()
    const defaultQs = qs.parse(location.search, { ignoreQueryPrefix: true })
    const query = {
        ...defaultQs,
        category_id: params?.id
    }

    useEffect(() => {
        dispatch(getCategoryProducts(query))
    }, [location])

    return (
        <div className='my-2'>
            <div className="d-flex align-items-center justify-content-between">
                <h1>Shopname</h1>
                <Button.Ripple color="primary" outline onClick={toggle}>
                    <Filter size={16} />
                </Button.Ripple>
            </div>
            <FilterCom toggle={toggle} open={open} />

            <Products items={products} />
        </div>
    )
}

export default Shop
