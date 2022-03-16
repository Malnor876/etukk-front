import LotPreview from "app/components/business/LotPreview/LotPreview"
import FiltersContainer from "app/components/containers/Filters/FiltersContainer"
import SortingToggle from "app/components/UI/SortingToggle/SortingToggle"
import Container from "app/layouts/Container/Container"
import Previews from "app/layouts/Previews/Previews"

import mock3JPG from "./mock-3.jpg"

function LotPreviews() {
  return (
    <Container row>
      <SortingToggle />
      <Container>
        <Previews>
          {[...Array(16)].map((_, i) => (
            <LotPreview
              city="Москва"
              title="ЗАГОЛОВОК ВМЕСТИТСЯ 2 СТРОКИ НЕ БОЛЬШЕ ЗАГОЛОВОК ВМЕСТИТСЯ 2 СТРОКИ НЕ БОЛЬШЕ"
              image={mock3JPG}
              startBid={100}
              startedAt={new Date}
              key={i}
            />
          ))}
        </Previews>
        <FiltersContainer onSubmit={console.log} />
      </Container>
    </Container>
  )
}

export default LotPreviews
