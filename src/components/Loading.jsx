import { Grid } from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const Loader = () => {
    return (
        <div className='my-3 py-3 d-flex align-items-center justify-content-center'>
            <Grid
                heigth="100"
                width="100"
                color='#074C8F'
                ariaLabel='loading'
            />
        </div>
    )
}
export default Loader