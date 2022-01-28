import { Link } from 'react-router-dom'
import * as RS from 'reactstrap'
import * as I from 'react-feather'

export default () => {
    return (
        <RS.Card className='border rounded'>
            <div>
                <Link to={`/product/ogabek`}>
                    <img className='img-fluid card-img-top' src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="he" />
                </Link>
            </div>
            <RS.CardBody>
                <Link to={`/product/ogabek`}>
                    <h6>Smart Watch</h6>
                </Link>
                <div>
                    $300
                </div>
            </RS.CardBody>
            <div className='border-top py-1 mx-1 d-flex justify-content-between'>
                <RS.Button.Ripple size='sm' className='btn-icon rounded-circle cursor-pointer' outline color='primary'>
                    <I.Heart size={16} />
                </RS.Button.Ripple>
                <RS.Button.Ripple size='sm' className='btn-icon rounded-circle cursor-pointer' outline color='primary'>
                    <I.ShoppingCart size={16} />
                </RS.Button.Ripple>
            </div>
        </RS.Card>
    )
}