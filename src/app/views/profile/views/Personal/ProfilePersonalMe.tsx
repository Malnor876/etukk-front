import Button from "app/components/UI/Button/Button"
import Input from "app/components/UI/Input/Input"
import Form from "app/layouts/Form/Form"

function ProfilePersonalMe() {
  return (
    <>
      <h5 className="heading">Личная информация</h5>
      <Form>
        <Input placeholder="Имя" defaultValue="Игорь" width="25em" />
        <Input defaultValue="Частное лицо" readOnly width="25em" />
        <Input placeholder="Email" type="email" defaultValue="KGHJ@mail.ru" width="25em" />
        <Input placeholder="Телефон" type="tel" defaultValue="+7 (900) 777-76-76" width="25em" />
        <div><Button type="submit">Сохранить</Button></div>
      </Form>
    </>
  )
}

export default ProfilePersonalMe
