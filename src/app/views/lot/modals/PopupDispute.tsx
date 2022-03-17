import Button from "app/components/UI/Button/Button"
import Selector from "app/components/UI/Selector/Selector"
import TextareaAttachments from "app/components/UI/Textarea/TextareaAttachments"
import ToolTipBadge from "app/components/UI/ToolTipBadge/ToolTipBadge"
import You from "app/components/UI/You/You"
import PopupLayout from "app/layouts/PopupLayout/PopupLayout"
import { useModal } from "modules/modal/hook"

function PopupDispute() {
  const { close } = useModal()
  function onSubmit() {
    close()
  }
  return (
    <PopupLayout width="40em">
      <h2>Открыть спор по товару</h2>
      <You />
      <Selector width="20em">
        <option>Товар пришел с повреждениями</option>
        <option>Не соответствует заявленным характеристикам</option>
        <option>Иная причина</option>
      </Selector>
      <TextareaAttachments placeholder="Введите комментарий ..." />
      <div>
        <Button onClick={onSubmit}>Открыть спор</Button>
      </div>
      <ToolTipBadge>
        Для закрытия сделки Вам необходимо оставить отзыв и прикрепить фото полученного лота.
        {"\n\n"}
        Если у Вас есть претензии по качеству товара, откройте спор.
        Для этого необходимо выбрать причину открытия, описать проблему и прикрепить фото и видео подтверждающие дефект или несоответствие товара заявленным характеристикам.
        {"\n\n"}
        ВНИМАНИЕ! Открытие спора после остановки счетчиков - невозможно!
      </ToolTipBadge>
    </PopupLayout>
  )
}

export default PopupDispute
