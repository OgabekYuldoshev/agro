
import HoverCard from "../../components/HoverCards"
import * as RS from "reactstrap"
import SwiperPartner from "../../components/SwiperPartner"
import SwiperProducts from "../../components/SwiperProducts"
import SwiperNavigation from "../../components/SwiperNavigation"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"


const Main = () => {
  const app = useSelector(state => state.app)
  const { t } = useTranslation()
  return (
    <>
      <SwiperNavigation className='mt-2' sliders={app?.sliders} />
      <SwiperProducts data={app?.newProducts} title={t('new_products')} />
      <RS.Row xl={3} md={2} sm={1} xs={1} className="mt-2">
        {
          app?.categories?.map((item, index) => (
            <RS.Col key={index}>
              <HoverCard item={item} />
            </RS.Col>
          ))
        }
      </RS.Row>
      <SwiperPartner data={app?.partners} t={t} title={t('partners')} />
      <SwiperProducts data={app?.recProducts} title={t('recommended_products')} />
    </>
  )
}

export default Main
