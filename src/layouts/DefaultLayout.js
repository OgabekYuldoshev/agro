import { useEffect } from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { useDispatch } from 'react-redux'
import { checkLocalStorage } from "@store/ecommerce"

export default props => {
    const dispatch = useDispatch()
    useEffect(() => dispatch(checkLocalStorage()), [])

    return (
        <main>
            <NavBar />
            <div className="px-5">
                {props.children}
            </div>
            <Footer />
        </main>
    )
}