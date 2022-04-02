import "./LotEditView.scss"

import { ReactError } from "app/components/services/ErrorBoundary/ErrorBoundary.errors"
import Backward from "app/components/UI/Backward/Backward"
import ChooseImage from "app/components/UI/ChooseImage/ChooseImage"
import CloseButton from "app/components/UI/CloseButton/CloseButton"
import Input from "app/components/UI/Input/Input"
import Radio from "app/components/UI/Radio/Radio"
import Selector from "app/components/UI/Selector/Selector"
import Specifications from "app/components/UI/Specifications/Specifications"
import Textarea from "app/components/UI/Textarea/Textarea"
import Choices from "app/layouts/Choices/Choices"
import { ReactNode } from "react"
import { useParams } from "react-router"

function LotEditView() {
  const { lotId } = useParams<"lotId">()
  if (lotId == null) {
    throw new ReactError(LotEditView, "got no lotId")
  }
  if (isNaN(+lotId)) {
    throw new ReactError(LotEditView, "lotId is not number")
  }
  return (
    <div className="lot-edit-view">
      <div className="lot-edit-view__header">
        <h2 className="heading">Редактировать лот</h2>
        <Backward />
      </div>
      <div className="lot-edit-view__container">
        <LotEditSetting label="Название лота">
          <Input width="18em" placeholder="Название лота" defaultValue="ВАЗ 2110 в шикарном состоянии" />
          <CloseButton />
        </LotEditSetting>
        <LotEditSetting label="Фото">
          <ChooseImage />
        </LotEditSetting>
        <LotEditSetting label="Видео">
          <Input width="35em" placeholder="Ссылка на видео..." />
          <CloseButton />
        </LotEditSetting>
        <LotEditSetting label="Начальная ставка">
          <Input width="16em" type="number" placeholder="Введите  сумму..." iconName="rub" />
          <CloseButton />
        </LotEditSetting>
        <LotEditSetting label="Период публикации лота и проведения торгов">
          <Choices>
            <Radio value="">Сегодня 21.09.21 в 20:00 - 22:00</Radio>
            <Radio value="" checked>Сегодня 21.09.21 в 20:00 - 22:00</Radio>
            <Radio value="">Сегодня 21.09.21 в 20:00 - 22:00</Radio>
            <Radio value="">Сегодня 21.09.21 в 20:00 - 22:00</Radio>
          </Choices>
        </LotEditSetting>
        <LotEditSetting label="Укажите ваш город">
          <Input width="16em" placeholder="Укажите город..." />
          <CloseButton />
        </LotEditSetting>
        <LotEditSetting label="Вариант доставки">
          <Selector width="16em">
            <option value="1">2</option>
            <option value="2">1</option>
          </Selector>
        </LotEditSetting>
        <LotEditSetting label="Описание лота">
          <Textarea width="35em" rows={4} defaultValue="Продается шайтан-арба,не бит, не крашен, валиком подшаманен. Ездила девушка от дома до работы в Краснодарский край. От души отрываю, мамой клянусь. Арбузы не возил, все щапчасти заводские. Год выпуска 1985." />
          <CloseButton />
        </LotEditSetting>
        <LotEditSetting label="Характеристики">
          <Specifications />
        </LotEditSetting>
      </div>
    </div>
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

export default LotEditView
