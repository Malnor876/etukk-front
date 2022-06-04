import QueryContainer from "app/components/containers/QueryContainer/QueryContainer"
import ButtonLink from "app/components/UI/Button/ButtonLink"
import Dropper from "app/components/UI/Droppers/Dropper"
import Droppers from "app/components/UI/Droppers/Droppers"
import Switcher from "app/components/UI/Switcher/Switcher"
import Previews from "app/layouts/Previews/Previews"
import Reviews from "app/layouts/Reviews/Reviews"
import LotPreview from "domain/Lot/LotPreview/LotPreview"
import { LotPreviewType, LotStatus } from "domain/Lot/types"
import useDeviceWidth from "hooks/useDeviceWidth"
import { DeviceWidths } from "hooks/useResizeObserverEntry"
import { getLot, getUserReview } from "infrastructure/persistence/api/data/actions"
import { mapLotsLists } from "infrastructure/persistence/api/mappings/lots"
import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"

type ProfileLotsReviewsType = "sales" | "purchases"

interface ProfileLotsReviewsViewProps {
  type: ProfileLotsReviewsType
}

function ProfileLotsReviewsView(props: ProfileLotsReviewsViewProps) {
  // const [currentPreview, setCurrentPreview] = useState<LotPreviewType | null>(null)

  // if (currentPreview) {
  //   return (
  //     <LotPage spaceAround>
  //       <div>
  //         <Slider slides={IMAGE_MOCKS} />
  //         <FAQ>
  //           <FAQClause summary="Описание лота">
  //             Описание лота
  //           </FAQClause>
  //           <FAQClause summary="Характеристики">
  //             Характеристики
  //           </FAQClause>
  //         </FAQ>
  //       </div>
  //       <div>
  //         <Backward onClick={() => setCurrentPreview(null)}>
  //           <h2 className="heading">ЗАГОЛОВОК ВМЕСТИТСЯ 2 СТРОКИ НЕ БОЛЬШЕ</h2>
  //         </Backward>
  //         <Entries>
  //           <Author avatar={IMAGE_MOCKS[0]} city="г. Иваново" firstName="Петр" />
  //           <Entry><span>Сумма выкупа</span><big>11 000 ₽</big></Entry>
  //           <hr />
  //           <Entry><em>Претензия на рассмотрении</em><big>00 : 12 : 34 : 09</big></Entry>
  //         </Entries>
  //         <div>
  //           <Button>Посмотреть содержание претензии</Button>
  //         </div>
  //       </div>
  //     </LotPage>
  //   )
  // }

  return (
    <>
      <Switcher>
        <ButtonLink to="" end>Статус лотов</ButtonLink>
        <ButtonLink to="reviews">Отзывы</ButtonLink>
      </Switcher>
      <Routes>
        <Route index element={<ProfileSalesLotsByStatusView />} />
        <Route path="reviews" element={<ProfileSalesReviewsView />} />
      </Routes>
    </>
  )
}

function ProfileSalesLotsByStatusView() {
  const [isMobile] = useDeviceWidth(DeviceWidths.Mobile)
  const user = useSelector(state => state.user)
  if (!user.auth) return null
  return (
    <QueryContainer action={getLot<{ user_id: number }>(0, 0, { user_id: user.id })} mapping={mapLotsLists}>
      {payload => {
        const moderation = payload.items.filter(item => item.status === LotStatus.MODERATION)
        const published = payload.items.filter(item => item.status === LotStatus.PUBLISHED)
        const rejected = payload.items.filter(item => item.status === LotStatus.REJECTED)
        const sold = payload.items.filter(item => item.status === LotStatus.SOLD)

        const archived = payload.items.filter(item => item) //! no filter
        const disputed = payload.items.filter(item => item) //! no filter
        return (
          <Droppers type={isMobile ? "__NAMING__1" : "__NAMING__2"}>
            <Dropper name="moderation" label="На проверке" amount={moderation.length}>
              <PreviewLots list={moderation} />
            </Dropper>
            <Dropper name="published" label="Опубликовано" amount={published.length}>
              <PreviewLots list={published} />
            </Dropper>
            <Dropper name="rejected" label="Отклонено" amount={rejected.length}>
              <PreviewLots list={rejected} />
            </Dropper>
            <Dropper name="sold" label="Продано" amount={sold.length}>
              <PreviewLots list={sold} />
            </Dropper>
            <Dropper name="archived" label="Архив" amount={archived.length}>
              <PreviewLots list={archived} />
            </Dropper>
            <Dropper name="disputed" label="Открыто споров" amount={disputed.length}>
              <PreviewLots list={disputed} />
            </Dropper>
          </Droppers>
        )
      }}
    </QueryContainer>
  )
}


function ProfileSalesReviewsView() {
  const user = useSelector(state => state.user)
  if (!user.auth) return null
  return (
    <QueryContainer action={getUserReview<{ user_id: number }>({ user_id: user.id })}>
      {payload => (
        <Reviews>
          {/* {payload.map(review => (
            <Review
              user={ }
              attachments={[]}
              comment={review.text || "..."}
              date={new Date(review.created_at)}
              product={"review."}
              key={review.id}
            />
          ))} */}
        </Reviews>
      )}
    </QueryContainer>
  )
}

export default ProfileLotsReviewsView

function PreviewLots(props: { list: LotPreviewType[] }) {
  return (
    <Previews>
      {props.list.map(lotPreview => (
        <LotPreview {...lotPreview} key={lotPreview.id} />
      ))}
    </Previews>
  )
}