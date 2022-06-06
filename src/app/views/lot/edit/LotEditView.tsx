import "./LotEditView.scss"

import { ReactError } from "app/components/containers/ErrorBoundary/ErrorBoundary.errors"
import QueryContainer from "app/components/containers/QueryContainer/QueryContainer"
import Backward from "app/components/UI/Backward/Backward"
import Button from "app/components/UI/Button/Button"
import CloseButton from "app/components/UI/CloseButton/CloseButton"
import ErrorCover from "app/components/UI/ErrorCover/ErrorCover"
import Input from "app/components/UI/Input/Input"
import Selector from "app/components/UI/Selector/Selector"
import Specifications from "app/components/UI/Specifications/Specifications"
import Textarea from "app/components/UI/Textarea/Textarea"
import Form, { FormState } from "app/layouts/Form/Form"
import { LotDelivery } from "domain/Lot/types"
import { getLot, getLotByLotId, getLotDraftByDraftId, patchLotDraftByDraftId } from "infrastructure/persistence/api/data/actions"
import { SchemaLotDeliveryOptions } from "infrastructure/persistence/api/data/schemas"
import { mapLot } from "infrastructure/persistence/api/mappings/lots"
import { MutableRefObject, ReactNode, useRef, useState } from "react"
import { useClient } from "react-fetching-library"
import { Helmet } from "react-helmet"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"

enum FormInputs {
  title = "name",
  images = "photos",
  video = "video_url",
  startPrice = "start_price",
  // publicationPeriod = "trading_start",
  city = "city",
  delivery = "delivery_options",
  description = "description",
  specifications = "specifications",
  category = "categories",

  biddingStartTime = "bidding_start_time",
  biddingEndTime = "bidding_end_time"
}

interface FormValues {
  name: string
  description: string
  start_price: number
  categories: number[] | number
  city: string
  delivery_options: SchemaLotDeliveryOptions
  bidding_start_time: string
  bidding_end_time: string
  video_url: string
  photos: string[]
}

function LotEditView() {
  const { lotId } = useParams<"lotId">()
  if (lotId == null) {
    throw new ReactError(LotEditView, "got no lotId")
  }
  if (isNaN(+lotId)) {
    throw new ReactError(LotEditView, "lotId is not number")
  }

  const navigate = useNavigate()
  const client = useClient()
  const [files, setFiles] = useState<File[]>([])
  async function onSubmit(state: FormState<FormInputs, FormValues>) {
    if (lotId == null) return

    const { error } = await client.query(patchLotDraftByDraftId(+lotId, state.values))
    if (error) return

    navigate("/lots/" + lotId)
  }

  const formRef = useRef<HTMLFormElement | null>(null)
  const user = useSelector(state => state.user)
  if (!user.auth) return null

  return (
    <>
      <Helmet>
        <title>Редактировать лот | etukk.ru</title>
      </Helmet>
      <QueryContainer action={getLotByLotId(+lotId)} mapping={mapLot}>
        {payload => {
          if (payload.creatorId !== user.id) return (
            <ErrorCover>
              Это не ваш лот
            </ErrorCover>
          )

          return (
            <Form className="lot-edit-view" onSubmit={onSubmit} formRef={formRef}>
              <div className="lot-edit-view__header">
                <h2 className="heading">Редактировать лот</h2>
                <Backward />
              </div>
              <div className="lot-edit-view__container">
                <LotEditSetting label="Название лота">
                  <Input width="18em" placeholder="Название лота" defaultValue={payload.title} name={FormInputs.title} />
                  <InputResetButton name={FormInputs.title} in={formRef} defaultValue={payload.title} />
                </LotEditSetting>
                <LotEditSetting label="Начальная ставка">
                  <Input width="16em" type="number" placeholder="Введите  сумму..." iconName="rub" name={FormInputs.startPrice} defaultValue={+payload.startPrice} />
                  <InputResetButton name={FormInputs.startPrice} in={formRef} defaultValue={+payload.startPrice} />
                </LotEditSetting>
                <LotEditSetting label="Укажите ваш город">
                  <Input width="16em" placeholder="Укажите город..." name={FormInputs.city} defaultValue={payload.city} />
                  <InputResetButton name={FormInputs.city} in={formRef} defaultValue={payload.city} />
                </LotEditSetting>
                <LotEditSetting label="Вариант доставки">
                  <Selector width="16em" defaultValue={payload.delivery} name={FormInputs.delivery}>
                    <option value={LotDelivery.all}>Доставка в регионы</option>
                    <option value={LotDelivery.local}>Доставка по городу продажи</option>
                  </Selector>
                </LotEditSetting>
                <LotEditSetting label="Описание лота">
                  <Textarea width="33.5em" rows={16} name={FormInputs.description} defaultValue={payload.description} />
                  <InputResetButton name={FormInputs.description} in={formRef} defaultValue={payload.description} />
                </LotEditSetting>
                <LotEditSetting label="Характеристики">
                  <Specifications name={FormInputs.specifications} defaultValue={payload.specifications} />
                </LotEditSetting>
              </div>
              <div className="lot-edit-view__buttons">
                <Button type="submit">Сохранить</Button>
                <Button type="reset" outline>Отмена</Button>
              </div>
            </Form>
          )
        }}
      </QueryContainer>
    </>
  )
}


interface InputResetButtonProps {
  name: string
  in: MutableRefObject<HTMLFormElement | null | undefined>

  defaultValue: unknown
}

function InputResetButton(props: InputResetButtonProps) {
  function onClick() {
    if (props.in.current == null) return

    const inputElement = props.in.current.elements.namedItem(props.name)
    if (!(inputElement instanceof HTMLInputElement)) return

    inputElement.value = String(props.defaultValue)
  }
  return (
    <CloseButton onClick={onClick} />
  )
}


interface LotEditSettingProps {
  label: string
  children: ReactNode
}

function LotEditSetting(props: LotEditSettingProps) {
  return (
    <div className="lot-edit-setting">
      <div className="lot-edit-setting__label">{props.label}</div>
      <div className="lot-edit-setting__container">{props.children}</div>
    </div>
  )
}



// interface AwaitPromiseProps<T> {
//   state: Promise<T>
//   children: (result: T) => ReactNode
// }

// function AwaitPromise<T>(props: AwaitPromiseProps<T>) {
//   const [result, setResult] = useState<T | null>(null)

//   useEffect(() => {
//     async function awaitPromises() {
//       // if (props.state instanceof Array) {
//       //   return await Promise.all(props.state)
//       // }
//       return await props.state
//     }

//     awaitPromises().then(setResult)
//   }, [props.children])

//   if (result === null) return <Loader />
//   return <>{props.children(result)}</>
// }

export default LotEditView
