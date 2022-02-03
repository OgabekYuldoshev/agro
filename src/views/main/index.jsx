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
      <SwiperProducts title="Yangilari" />
      <RS.Row xl={3} md={2} sm={1} xs={1} className="mt-2">
        {
          dataFake?.map((item, index) => (
            <RS.Col key={index}>
              <HoverCard {...item} />
            </RS.Col>
          ))
        }
      </RS.Row>
      <SwiperPartner title="Hamkorlar" />
      <SwiperProducts title="Tavfsiya etilganlari" />
    </>
  )
}

export default Main
