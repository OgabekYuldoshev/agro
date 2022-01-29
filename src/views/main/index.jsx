import SwiperNavigation from "../../components/SwiperNavigation"
import HoverCard from "../../components/HoverCards"
import * as RS from "reactstrap"
import SwiperPartner from "../../components/SwiperPartner"
import SwiperProducts from "../../components/SwiperProducts"

const dataFake = [
  {
    name: "O'g'itlar",
    slug: 'ogit'
  },
  {
    name: "O'g'itlar",
    slug: 'ogit'
  },
  {
    name: "O'g'itlar",
    slug: 'ogit'
  },
  {
    name: "O'g'itlar",
    slug: 'ogit'
  },
  {
    name: "O'g'itlar",
    slug: 'ogit'
  },
  {
    name: "O'g'itlar",
    slug: 'ogit'
  }
]


const Main = () => {
  return (
    <>
      <div className="mt-2">
        <SwiperNavigation />
      </div>
      <RS.Row xl={3} className="mt-2">
        {
          dataFake?.map((item, index) => (
            <RS.Col key={index}>
              <HoverCard {...item} />
            </RS.Col>
          ))
        }
      </RS.Row>
      <SwiperProducts title="Yangilari" />
      <SwiperPartner title="Hamkorlar" />
      <SwiperProducts title="Tavfsiya etilganlari" />
    </>
  )
}

export default Main
