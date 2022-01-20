import * as RS from "reactstrap"
import * as I from "react-feather"

import img3 from '@src/assets/images/banner/banner-8.jpg'

export default ({ name, slug }) => {
    return (
        <RS.Card className='text-white border-0'>
            <RS.CardImg top width={300} height={300} src={img3} alt='card-overlay' />
            <RS.CardImgOverlay className='bg-overlay'>
                <RS.CardBody>
                    <RS.CardBody>
                        <RS.Button.Ripple color='primary'>
                            <I.ShoppingCart onClick={() => router.push(`/products/${slug}`)} size={14} />
                            <span className='align-middle ms-25'>{name}</span>
                        </RS.Button.Ripple>
                    </RS.CardBody>
                </RS.CardBody>
            </RS.CardImgOverlay>
        </RS.Card>
    )
}