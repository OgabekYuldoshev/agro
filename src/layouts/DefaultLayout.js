import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export default props => {
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