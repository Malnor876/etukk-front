import QueryContainer from "app/components/containers/QueryContainer/QueryContainer"
import ButtonLink from "app/components/UI/Button/ButtonLink"
import Dropper from "app/components/UI/Dropper/Dropper"
import { Column } from "app/layouts/BaseLayouts/BaseLayouts"
import Container from "app/layouts/Container/Container"
import Previews from "app/layouts/Previews/Previews"
import LotPreview from "domain/Lot/LotPreview/LotPreview"
import { mapLotDisputesLists } from "infrastructure/persistence/api/mappings/cabinet"
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
  return null
  // return (
  //   <QueryContainer action={getCabinetLotsSalesCompleting(15)} mapping={mapLotDisputesLists}>
  //     {payload => (
  //       <Previews>
  //         {payload.items.map(lot => (
  //           <LotPreview {...lot} key={lot.id} />
  //         ))}
  //       </Previews>
  //     )}
  //   </QueryContainer>
  // )
}

function ProfileSalesConfirm() {
  return null
  // return (
  //   <QueryContainer action={getCabinetLotsSalesConfirm(15)} mapping={mapLotDisputesLists}>
  //     {payload => (
  //       <Previews>
  //         {payload.items.map(lot => (
  //           <LotPreview {...lot} key={lot.id} />
  //         ))}
  //       </Previews>
  //     )}
  //   </QueryContainer>
  // )
}

function ProfileSalesDisputes() {
  return null
  // return (
  //   <QueryContainer action={getCabinetLotsSalesDisputes(15)} mapping={mapLotDisputesLists}>
  //     {payload => (
  //       <Previews>
  //         {payload.items.map(lot => (
  //           <LotPreview {...lot} key={lot.id} />
  //         ))}
  //       </Previews>
  //     )}
  //   </QueryContainer>
  // )
}

function ProfileSalesWay() {
  return null
  // return (
  //   <QueryContainer action={getCabinetLotsSalesWay(15)} mapping={mapLotDisputesLists}>
  //     {payload => (
  //       <Previews>
  //         {payload.items.map(lot => (
  //           <LotPreview {...lot} key={lot.id} />
  //         ))}
  //       </Previews>
  //     )}
  //   </QueryContainer>
  // )
}

function ProfileSalesWon() {
  return null
  // return (
  //   <QueryContainer action={getCabinetLotsSalesWon(15)} mapping={mapLotDisputesLists}>
  //     {payload => (
  //       <Previews>
  //         {payload.items.map(lot => (
  //           <LotPreview {...lot} key={lot.id} />
  //         ))}
  //       </Previews>
  //     )}
  //   </QueryContainer>
  // )
}

function ProfilePurchasesArchive() {
  return null
  // return (
  //   <QueryContainer action={getCabinetLotsPurchasesArchive(15)} mapping={mapLotDisputesLists}>
  //     {payload => (
  //       <Previews>
  //         {payload.items.map(lot => (
  //           <LotPreview {...lot} key={lot.id} />
  //         ))}
  //       </Previews>
  //     )}
  //   </QueryContainer>
  // )
}

function ProfilePurchasesDisputes() {
  return null
  // return (
  //   <QueryContainer action={getCabinetLotsPurchasesDisputes(15)} mapping={mapLotDisputesLists}>
  //     {payload => (
  //       <Previews>
  //         {payload.items.map(lot => (
  //           <LotPreview {...lot} key={lot.id} />
  //         ))}
  //       </Previews>
  //     )}
  //   </QueryContainer>
  // )
}

function ProfilePurchasesInspection() {
  return null
  // return (
  //   <QueryContainer action={getCabinetLotsPurchasesInspection(15)} mapping={mapLotDisputesLists}>
  //     {payload => (
  //       <Previews>
  //         {payload.items.map(lot => (
  //           <LotPreview {...lot} key={lot.id} />
  //         ))}
  //       </Previews>
  //     )}
  //   </QueryContainer>
  // )
}

function ProfilePurchasesPublished() {
  return null
  // return (
  //   <QueryContainer action={getCabinetLotsPurchasesPublished(15)} mapping={mapLotDisputesLists}>
  //     {payload => (
  //       <Previews>
  //         {payload.items.map(lot => (
  //           <LotPreview {...lot} key={lot.id} />
  //         ))}
  //       </Previews>
  //     )}
  //   </QueryContainer>
  // )
}

function ProfilePurchasesRejected() {
  return null
  // return (
  //   <QueryContainer action={getCabinetLotsPurchasesRejected(15)} mapping={mapLotDisputesLists}>
  //     {payload => (
  //       <Previews>
  //         {payload.items.map(lot => (
  //           <LotPreview {...lot} key={lot.id} />
  //         ))}
  //       </Previews>
  //     )}
  //   </QueryContainer>
  // )
}

function ProfilePurchasesSold() {
  return null
  // return (
  //   <QueryContainer action={getCabinetLotsPurchasesSold(15)} mapping={mapLotDisputesLists}>
  //     {payload => (
  //       <Previews>
  //         {payload.items.map(lot => (
  //           <LotPreview {...lot} key={lot.id} />
  //         ))}
  //       </Previews>
  //     )}
  //   </QueryContainer>
  // )
}

export default ProfileSalesView