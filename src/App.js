// ** Router Import
import Router from './router/Router'
import { loadUser } from "@store/Auth"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react'

const App = () => {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    useEffect(() => {
        if (!!auth.accessToken) {
            dispatch(loadUser())
        }
    }, [auth.accessToken])

    return <Router />
}

export default App
