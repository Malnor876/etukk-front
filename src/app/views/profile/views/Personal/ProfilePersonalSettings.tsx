import Button from "app/components/UI/Button/Button"
import Checkbox from "app/components/UI/Checkbox/Checkbox"
import { Column } from "app/layouts/BaseLayouts/BaseLayouts"
import Form from "app/layouts/Form/Form"

function ProfilePersonalSettings() {
  return (
    <>
      <h5 className="heading">Настройки</h5>
      <Form>
        <Column>
          <Checkbox>Не запрашивать подтверждение о повышении ставки</Checkbox>
          <Checkbox>Получать смс-уведомления о изменениях в моих подписках</Checkbox>
          <Checkbox>Получать смс-уведомления о изменениях в торгах в которых я принял участие</Checkbox>
          <div><Button type="submit">Сохранить</Button></div>
        </Column>
      </Form>
    </>
  )
}

export default ProfilePersonalSettings