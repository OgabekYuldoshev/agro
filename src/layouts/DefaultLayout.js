import { useEffect } from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { useDispatch } from 'react-redux'
import { checkLocalStorage } from "@store/Ecommerce"

export default props => {
    const dispatch = useDispatch()
    useEffect(() => dispatch(checkLocalStorage()), [])

    return (
        <main>
            <NavBar />
            <div className="layout">
                {props.children}
            </div>
            <Footer />
        </main>
    )
}