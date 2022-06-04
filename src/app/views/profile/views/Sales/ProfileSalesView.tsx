import QueryContainer from "app/components/containers/QueryContainer/QueryContainer"
import ButtonLink from "app/components/UI/Button/ButtonLink"
import Dropper from "app/components/UI/Droppers/Dropper"
import Droppers from "app/components/UI/Droppers/Droppers"
import { Column } from "app/layouts/BaseLayouts/BaseLayouts"
import Container from "app/layouts/Container/Container"
import Previews from "app/layouts/Previews/Previews"
import LotPreview from "domain/Lot/LotPreview/LotPreview"
import useDeviceWidth from "hooks/useDeviceWidth"
import { DeviceWidths } from "hooks/useResizeObserverEntry"
import { getUserNotifications } from "infrastructure/persistence/api/data/actions"
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
  const [isMobile] = useDeviceWidth(DeviceWidths.Mobile)
  return (
    <QueryContainer action={getUserNotifications()}>
      {all => {
        // const 
        return (
          <Droppers type={isMobile ? "__NAMING__1" : "__NAMING__2"}>
            <Dropper name="won" label="Выиграно" amount="1">
              asdasdasdsad
              asdasdasdsad
            </Dropper>
            <Dropper name="way" label="В пути" amount="1">
              asdawrv 23qc
              asdawrv 23qc
            </Dropper>
          </Droppers>
        )
      }}
    </QueryContainer>
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
            {/* <Droppers name="" amount="1">На проверке</Droppers>
            <Droppers name="published" amount="1">Опубликовано</Droppers>
            <Droppers name="rejected" amount="1">Отклонено</Droppers>
            <Droppers name="sold" amount="1">Продано</Droppers>
            <Droppers name="archive" amount="1">Архив</Droppers>
            <Droppers name="disputes" amount="1">Открыто споров</Droppers> */}
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