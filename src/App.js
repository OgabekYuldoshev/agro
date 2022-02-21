// ** Router Import
import Router from './router/Router'
import { loadUser } from "@store/Auth"
import { getWishLists } from "@store/Wishlist"
import { home, getPageContent } from "@store/App"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react'

const App = () => {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    useEffect(() => {
        dispatch(home())
        dispatch(getPageContent())
    }, [])
    useEffect(() => {
        if (auth.accessToken) {
            dispatch(loadUser())
            dispatch(getWishLists())
        }
    }, [auth.accessToken])
    return <Router />
}

export default App
