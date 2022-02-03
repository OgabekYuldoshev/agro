import { useEffect } from "react"
import NavBar from "../components/NavBar"
import SwiperNavigation from "../components/SwiperNavigation"
import Footer from "../components/Footer"
import { useDispatch } from 'react-redux'
import { checkLocalStorage } from "@store/ecommerce"

export default props => {
    const dispatch = useDispatch()
    useEffect(() => dispatch(checkLocalStorage()), [])

    return (
        <main>
            <NavBar />
            <SwiperNavigation />
            <div className="px-xl-5 px-2">
                {props.children}
            </div>
            <Footer />
        </main>
    )
}