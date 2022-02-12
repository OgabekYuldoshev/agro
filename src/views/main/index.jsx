import { useEffect } from "react"
import HoverCard from "../../components/HoverCards"
import * as RS from "reactstrap"
import SwiperPartner from "../../components/SwiperPartner"
import SwiperProducts from "../../components/SwiperProducts"
import SwiperNavigation from "../../components/SwiperNavigation"

import { home } from '@store/App'
import { useDispatch, useSelector } from "react-redux"


const Main = () => {
  const dispatch = useDispatch()
  const app = useSelector(state => state.app)

  useEffect(() => {
    dispatch(home())
  }, [])

  return (
    <>
      <SwiperNavigation />
      <SwiperProducts data={app?.newProducts} title="Yangilari" />
      <RS.Row xl={3} md={2} sm={1} xs={1} className="mt-2">
        {
          app?.categories?.map((item, index) => (
            <RS.Col key={index}>
              <HoverCard {...item} />
            </RS.Col>
          ))
        }
      </RS.Row>
      <SwiperPartner title="Hamkorlar" />
      <SwiperProducts data={app?.recProducts} title="Tavfsiya etilganlari" />
    </>
  )
}

export default Main
