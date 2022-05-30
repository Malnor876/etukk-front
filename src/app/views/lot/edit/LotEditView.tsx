import "./LotEditView.scss"

import { ReactError } from "app/components/containers/ErrorBoundary/ErrorBoundary.errors"
import QueryContainer from "app/components/containers/QueryContainer/QueryContainer"
import Backward from "app/components/UI/Backward/Backward"
import Button from "app/components/UI/Button/Button"
import ChooseImage from "app/components/UI/ChooseImage/ChooseImage"
import CloseButton from "app/components/UI/CloseButton/CloseButton"
import Input from "app/components/UI/Input/Input"
import Radio from "app/components/UI/Radio/Radio"
import Selector from "app/components/UI/Selector/Selector"
import Specifications from "app/components/UI/Specifications/Specifications"
import Textarea from "app/components/UI/Textarea/Textarea"
import Choices from "app/layouts/Choices/Choices"
import Form, { FormState } from "app/layouts/Form/Form"
import { getGetLotsById, postCabinetLotsAdd } from "infrastructure/persistence/api/data/actions"
import { SchemaUsersLotsFormData } from "infrastructure/persistence/api/data/schemas"
import { mapLotsContentItem } from "infrastructure/persistence/api/mappings/lots"
import { ReactNode, useEffect, useState } from "react"
import { useMutation } from "react-fetching-library"
import { useNavigate, useParams } from "react-router"
import { FileToURLDataBase64, getFileFromURL } from "utils/file"

enum FormInputs {
  title = "name",
  images = "picture",
  video = "video",
  startBid = "price",
  publicationPeriod = "trading_start",
  city = "city",
  delivery = "delivery",
  description = "content",
  specifications = "specifications",
  category = "category",

  tradingStart = "trading_start",
  tradingEnd = "trading_end"
}

interface FormValues extends SchemaUsersLotsFormData { }

function LotEditView() {
  const { lotId } = useParams<"lotId">()
  if (lotId == null) {
    throw new ReactError(LotEditView, "got no lotId")
  }
  if (isNaN(+lotId)) {
    throw new ReactError(LotEditView, "lotId is not number")
  }

  const navigate = useNavigate()
  const { mutate } = useMutation(postCabinetLotsAdd)
  const [files, setFiles] = useState<File[]>([])
  async function onSubmit(state: FormState<FormInputs, FormValues>) {
    if (lotId == null) return

    const { error } = await mutate({ ...state.values, id: +lotId, picture: await Promise.all(files.map(FileToURLDataBase64)) })
    if (error) return

    navigate("..")
  }

  return (
    <QueryContainer action={getGetLotsById(+lotId)} mapping={mapLotsContentItem}>
      {payload => (
        <Form className="lot-edit-view" onSubmit={onSubmit}>
          <div className="lot-edit-view__header">
            <h2 className="heading">Редактировать лот</h2>
            <Backward />
          </div>
          <div className="lot-edit-view__container">
            <LotEditSetting label="Название лота">
              <Input width="18em" placeholder="Название лота" defaultValue={payload.title} name={FormInputs.title} />
              <CloseButton />
            </LotEditSetting>
            <LotEditSetting label="Фото">
              <AwaitPromise state={Promise.all(payload.slides.map(getFileFromURL))}>
                {files => (
                  <ChooseImage defaultValue={files} onChange={setFiles} />
                )}
              </AwaitPromise>
            </LotEditSetting>
            <LotEditSetting label="Видео">
              <Input width="35em" placeholder="Ссылка на видео..." name={FormInputs.video} />
              <CloseButton />
            </LotEditSetting>
            <LotEditSetting label="Начальная ставка">
              <Input width="16em" type="number" placeholder="Введите  сумму..." iconName="rub" name={FormInputs.startBid} />
              <CloseButton />
            </LotEditSetting>
            <LotEditSetting label="Период публикации лота и проведения торгов">
              <div style={{ paddingTop: "0.5em" }}>
                <Choices>
                  <Radio name={FormInputs.publicationPeriod} value="1">Сегодня 21.09.21 в 20:00 - 22:00</Radio>
                  <Radio name={FormInputs.publicationPeriod} value="2" defaultChecked>Сегодня 21.09.21 в 20:00 - 22:00</Radio>
                  <Radio name={FormInputs.publicationPeriod} value="3">Сегодня 21.09.21 в 20:00 - 22:00</Radio>
                  <Radio name={FormInputs.publicationPeriod} value="4">Сегодня 21.09.21 в 20:00 - 22:00</Radio>
                </Choices>
              </div>
            </LotEditSetting>
            <LotEditSetting label="Укажите ваш город">
              <Input width="16em" placeholder="Укажите город..." name={FormInputs.city} />
              <CloseButton />
            </LotEditSetting>
            <LotEditSetting label="Вариант доставки">
              <Selector width="16em" defaultValue="all" name={FormInputs.delivery}>
                <option value="all">Доставка в регионы</option>
                <option value="locally">Доставка по городу продажи</option>
              </Selector>
            </LotEditSetting>
            <LotEditSetting label="Описание лота">
              <Textarea width="33.5em" rows={16} name={FormInputs.description} defaultValue="Продается шайтан-арба,не бит, не крашен, валиком подшаманен. Ездила девушка от дома до работы в Краснодарский край. От души отрываю, мамой клянусь. Арбузы не возил, все щапчасти заводские. Год выпуска 1985." />
              <CloseButton />
            </LotEditSetting>
            <LotEditSetting label="Характеристики">
              <Specifications name={FormInputs.specifications} />
            </LotEditSetting>
          </div>
          <div className="lot-edit-view__buttons">
            <Button type="submit">Сохранить</Button>
            <Button outline>Отмена</Button>
          </div>
        </Form>
      )}
    </QueryContainer>
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


interface AwaitPromiseProps<T> {
  state: Promise<T>
  children: (result: T) => ReactNode
}

function AwaitPromise<T>(props: AwaitPromiseProps<T>) {
  const [result, setResult] = useState<T | null>(null)

  useEffect(() => {
    async function awaitPromises() {
      // if (props.state instanceof Array) {
      //   return await Promise.all(props.state)
      // }
      return await props.state
    }

    awaitPromises().then(setResult)
  }, [props.children])

  if (result === null) return null
  return <>{props.children(result)}</>
}

export default LotEditView
