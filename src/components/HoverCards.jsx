import * as RS from "reactstrap"
import * as I from "react-feather"
import { useHistory } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { baseUrl } from "@utils"

export default ({ item }) => {
    const history = useHistory()
    const { i18n } = useTranslation()

    return (
        <RS.Card className='text-white border-0'>
            <RS.CardImg top width={300} height={300} src={baseUrl + item?.image} alt='card-overlay' />
            <RS.CardImgOverlay className='bg-overlay'>
                <RS.CardBody>
                    <RS.CardBody>
                        <RS.Button.Ripple onClick={() => history.push(`/category/${item?.id}`)} color='primary'>
                            <I.ShoppingCart size={14} />
                            <span className='align-middle ms-25'>{item[`name_${i18n?.language}`]}</span>
                        </RS.Button.Ripple>
                        <RS.CardText>{item[`description_${i18n?.language}`]}</RS.CardText>
                    </RS.CardBody>
                </RS.CardBody>
            </RS.CardImgOverlay>
        </RS.Card>
    )
}