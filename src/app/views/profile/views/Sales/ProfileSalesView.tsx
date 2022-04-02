import Slider from "app/components/containers/Slider/Slider"
import Author from "app/components/UI/Author/Author"
import Backward from "app/components/UI/Backward/Backward"
import Button from "app/components/UI/Button/Button"
import ButtonLink from "app/components/UI/Button/ButtonLink"
import Dropper from "app/components/UI/Dropper/Dropper"
import { FAQ, FAQClause } from "app/components/UI/FAQ/FAQ"
import Switcher from "app/components/UI/Switcher/Switcher"
import { Column } from "app/layouts/BaseLayouts/BaseLayouts"
import Container from "app/layouts/Container/Container"
import Entries from "app/layouts/Entries/Entries"
import Entry from "app/layouts/Entries/Entry"
import LotPage from "app/layouts/LotPage/LotPage"
import Previews from "app/layouts/Previews/Previews"
import { IMAGE_MOCKS, LOT_PREVIEW_MOCK } from "constants/mocks"
import LotPreview from "domain/Lot/LotPreview/LotPreview"
import { LotPreviewType } from "domain/Lot/types"
import { useState } from "react"
import { Link, NavLink, Route, Routes } from "react-router-dom"

function ProfileSalesView() {
  const [dropper, setDropper] = useState(0)
  const [currentPreview, setCurrentPreview] = useState<LotPreviewType | null>(null)

  if (currentPreview) {
    return (
      <LotPage spaceAround>
        <div>
          <Slider slides={IMAGE_MOCKS} />
          <FAQ>
            <FAQClause summary="Описание лота">
              Описание лота
            </FAQClause>
            <FAQClause summary="Характеристики">
              Характеристики
            </FAQClause>
          </FAQ>
        </div>
        <div>
          <Backward onClick={() => setCurrentPreview(null)}>
            <h2 className="heading">ЗАГОЛОВОК ВМЕСТИТСЯ 2 СТРОКИ НЕ БОЛЬШЕ</h2>
          </Backward>
          <Entries>
            <Author avatar={IMAGE_MOCKS[0]} city="г. Иваново" firstName="Петр" />
            <Entry><span>Сумма выкупа</span><big>11 000 ₽</big></Entry>
            <hr />
            <Entry><em>Претензия на рассмотрении</em><big>00 : 12 : 34 : 09</big></Entry>
          </Entries>
          <div>
            <Button>Посмотреть содержание претензии</Button>
          </div>
        </div>
      </LotPage>
    )
  }

  return (
    <>
      <Switcher>
        <NavLink to="" end>Статус лотов</NavLink>
        <Link to="reviews">Отзывы</Link>
      </Switcher>
      <Container>
        <Routes>
          <Route index element={
            <Previews>
              {[...Array(12)].map((_, index) => (
                <LotPreview {...LOT_PREVIEW_MOCK} onClick={() => setCurrentPreview(LOT_PREVIEW_MOCK)} key={index} />
              ))}
            </Previews>
          } />
          <Route path="reviews" element={
            <Previews>
              <LotPreview {...LOT_PREVIEW_MOCK} onClick={() => setCurrentPreview(LOT_PREVIEW_MOCK)} />
            </Previews>
          } />
        </Routes>
        <div style={{ width: "18.75em" }}>
          <Column>
            <div style={{ display: "grid" }}>
              <Dropper amount="1" active={dropper === 0} onClick={() => setDropper(0)}>На проверке</Dropper>
              <Dropper amount="1" active={dropper === 1} onClick={() => setDropper(1)}>Опубликовано</Dropper>
              <Dropper amount="1" active={dropper === 2} onClick={() => setDropper(2)}>Отклонено</Dropper>
              <Dropper amount="1" active={dropper === 3} onClick={() => setDropper(3)}>Продано</Dropper>
              <Dropper amount="1" active={dropper === 4} onClick={() => setDropper(4)}>Архив</Dropper>
              <Dropper amount="1" active={dropper === 5} onClick={() => setDropper(5)}>Открыто споров</Dropper>
            </div>
            <div>
              <ButtonLink to="/support">Перейти в FAQ</ButtonLink>
            </div>
          </Column>
        </div>
      </Container>
    </>
  )
}

export default ProfileSalesView