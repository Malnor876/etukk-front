import QueryContainer from "app/components/containers/QueryContainer/QueryContainer"
import Slider from "app/components/containers/Slider/Slider"
import Author from "app/components/UI/Author/Author"
import Backward from "app/components/UI/Backward/Backward"
import Button from "app/components/UI/Button/Button"
import ButtonLink from "app/components/UI/Button/ButtonLink"
import Dropper from "app/components/UI/Dropper/Dropper"
import { FAQ, FAQClause } from "app/components/UI/FAQ/FAQ"
import { Column } from "app/layouts/BaseLayouts/BaseLayouts"
import Container from "app/layouts/Container/Container"
import Entries from "app/layouts/Entries/Entries"
import Entry from "app/layouts/Entries/Entry"
import LotPage from "app/layouts/LotPage/LotPage"
import Previews from "app/layouts/Previews/Previews"
import { IMAGE_MOCKS } from "constants/mocks"
import LotPreview from "domain/Lot/LotPreview/LotPreview"
import { LotPreviewType } from "domain/Lot/types"
import { getCabinetLotsPurchasesArchive, getCabinetLotsPurchasesDisputes, getCabinetLotsPurchasesInspection, getCabinetLotsPurchasesPublished, getCabinetLotsPurchasesRejected, getCabinetLotsPurchasesSold, getCabinetLotsSalesCompleting, getCabinetLotsSalesConfirm, getCabinetLotsSalesDisputes, getCabinetLotsSalesWay, getCabinetLotsSalesWon } from "infrastructure/persistence/api/data/actions"
import { mapLotDisputesLists } from "infrastructure/persistence/api/mappings/cabinet"
import { useState } from "react"
import { Route, Routes } from "react-router-dom"

// function ProfileSalesView() {
//   // const [currentPreview, setCurrentPreview] = useState<LotPreviewType | null>(null)

//   // if (currentPreview) {
//   //   return (
//   //     <LotPage spaceAround>
//   //       <div>
//   //         <Slider slides={IMAGE_MOCKS} />
//   //         <FAQ>
//   //           <FAQClause summary="Описание лота">
//   //             Описание лота
//   //           </FAQClause>
//   //           <FAQClause summary="Характеристики">
//   //             Характеристики
//   //           </FAQClause>
//   //         </FAQ>
//   //       </div>
//   //       <div>
//   //         <Backward onClick={() => setCurrentPreview(null)}>
//   //           <h2 className="heading">ЗАГОЛОВОК ВМЕСТИТСЯ 2 СТРОКИ НЕ БОЛЬШЕ</h2>
//   //         </Backward>
//   //         <Entries>
//   //           <Author avatar={IMAGE_MOCKS[0]} city="г. Иваново" firstName="Петр" />
//   //           <Entry><span>Сумма выкупа</span><big>11 000 ₽</big></Entry>
//   //           <hr />
//   //           <Entry><em>Претензия на рассмотрении</em><big>00 : 12 : 34 : 09</big></Entry>
//   //         </Entries>
//   //         <div>
//   //           <Button>Посмотреть содержание претензии</Button>
//   //         </div>
//   //       </div>
//   //     </LotPage>
//   //   )
//   // }

//   return (
//     <>
//       <Routes>
//         <Route path="sales/*" element={<ProfileSalesContainer />} />
//         <Route path="purchases/*" element={<ProfilePurchasesContainer />} />
//       </Routes>
//     </>
//   )
// }

function ProfileSalesView() {
  return (
    <Container>
      <Routes>
        <Route index element={<ProfileSalesWon />} />
        <Route path="way" element={<ProfileSalesWay />} />
        <Route path="confirm" element={<ProfileSalesConfirm />} />
        <Route path="completing" element={<ProfileSalesCompleting />} />
        <Route path="disputes" element={<ProfileSalesDisputes />} />
      </Routes>
      <div style={{ width: "18.75em" }}>
        <Column>
          <div style={{ display: "grid" }}>
            <Dropper to="" amount="1">Выиграно</Dropper>
            <Dropper to="way" amount="1">В пути</Dropper>
            <Dropper to="confirm" amount="1">Подтвердить получение</Dropper>
            <Dropper to="completing" amount="1">Завершенные покупки</Dropper>
            <Dropper to="disputes" amount="1">Открыто споров</Dropper>
          </div>
          <div>
            <ButtonLink to="/support">Перейти в FAQ</ButtonLink>
          </div>
        </Column>
      </div>
    </Container>
  )
}

export function ProfilePurchasesView() {
  return (
    <Container>
      <Routes>
        <Route index element={<ProfilePurchasesInspection />} />
        <Route path="published" element={<ProfilePurchasesPublished />} />
        <Route path="rejected" element={<ProfilePurchasesRejected />} />
        <Route path="sold" element={<ProfilePurchasesSold />} />
        <Route path="archive" element={<ProfilePurchasesArchive />} />
        <Route path="disputes" element={<ProfilePurchasesDisputes />} />
      </Routes>
      <div style={{ width: "18.75em" }}>
        <Column>
          <div style={{ display: "grid" }}>
            <Dropper to="" amount="1">На проверке</Dropper>
            <Dropper to="published" amount="1">Опубликовано</Dropper>
            <Dropper to="rejected" amount="1">Отклонено</Dropper>
            <Dropper to="sold" amount="1">Продано</Dropper>
            <Dropper to="archive" amount="1">Архив</Dropper>
            <Dropper to="disputes" amount="1">Открыто споров</Dropper>
          </div>
          <div>
            <ButtonLink to="/support">Перейти в FAQ</ButtonLink>
          </div>
        </Column>
      </div>
    </Container>
  )
}

function ProfileSalesCompleting() {
  return (
    <QueryContainer action={getCabinetLotsSalesCompleting(15)} mapping={mapLotDisputesLists}>
      {payload => (
        <Previews>
          {payload.items.map(lot => (
            <LotPreview {...lot} key={lot.id} />
          ))}
        </Previews>
      )}
    </QueryContainer>
  )
}

function ProfileSalesConfirm() {
  return (
    <QueryContainer action={getCabinetLotsSalesConfirm(15)} mapping={mapLotDisputesLists}>
      {payload => (
        <Previews>
          {payload.items.map(lot => (
            <LotPreview {...lot} key={lot.id} />
          ))}
        </Previews>
      )}
    </QueryContainer>
  )
}

function ProfileSalesDisputes() {
  return (
    <QueryContainer action={getCabinetLotsSalesDisputes(15)} mapping={mapLotDisputesLists}>
      {payload => (
        <Previews>
          {payload.items.map(lot => (
            <LotPreview {...lot} key={lot.id} />
          ))}
        </Previews>
      )}
    </QueryContainer>
  )
}

function ProfileSalesWay() {
  return (
    <QueryContainer action={getCabinetLotsSalesWay(15)} mapping={mapLotDisputesLists}>
      {payload => (
        <Previews>
          {payload.items.map(lot => (
            <LotPreview {...lot} key={lot.id} />
          ))}
        </Previews>
      )}
    </QueryContainer>
  )
}

function ProfileSalesWon() {
  return (
    <QueryContainer action={getCabinetLotsSalesWon(15)} mapping={mapLotDisputesLists}>
      {payload => (
        <Previews>
          {payload.items.map(lot => (
            <LotPreview {...lot} key={lot.id} />
          ))}
        </Previews>
      )}
    </QueryContainer>
  )
}

function ProfilePurchasesArchive() {
  return (
    <QueryContainer action={getCabinetLotsPurchasesArchive(15)} mapping={mapLotDisputesLists}>
      {payload => (
        <Previews>
          {payload.items.map(lot => (
            <LotPreview {...lot} key={lot.id} />
          ))}
        </Previews>
      )}
    </QueryContainer>
  )
}

function ProfilePurchasesDisputes() {
  return (
    <QueryContainer action={getCabinetLotsPurchasesDisputes(15)} mapping={mapLotDisputesLists}>
      {payload => (
        <Previews>
          {payload.items.map(lot => (
            <LotPreview {...lot} key={lot.id} />
          ))}
        </Previews>
      )}
    </QueryContainer>
  )
}

function ProfilePurchasesInspection() {
  return (
    <QueryContainer action={getCabinetLotsPurchasesInspection(15)} mapping={mapLotDisputesLists}>
      {payload => (
        <Previews>
          {payload.items.map(lot => (
            <LotPreview {...lot} key={lot.id} />
          ))}
        </Previews>
      )}
    </QueryContainer>
  )
}

function ProfilePurchasesPublished() {
  return (
    <QueryContainer action={getCabinetLotsPurchasesPublished(15)} mapping={mapLotDisputesLists}>
      {payload => (
        <Previews>
          {payload.items.map(lot => (
            <LotPreview {...lot} key={lot.id} />
          ))}
        </Previews>
      )}
    </QueryContainer>
  )
}

function ProfilePurchasesRejected() {
  return (
    <QueryContainer action={getCabinetLotsPurchasesRejected(15)} mapping={mapLotDisputesLists}>
      {payload => (
        <Previews>
          {payload.items.map(lot => (
            <LotPreview {...lot} key={lot.id} />
          ))}
        </Previews>
      )}
    </QueryContainer>
  )
}

function ProfilePurchasesSold() {
  return (
    <QueryContainer action={getCabinetLotsPurchasesSold(15)} mapping={mapLotDisputesLists}>
      {payload => (
        <Previews>
          {payload.items.map(lot => (
            <LotPreview {...lot} key={lot.id} />
          ))}
        </Previews>
      )}
    </QueryContainer>
  )
}

export default ProfileSalesView