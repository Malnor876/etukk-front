import Button from "app/components/UI/Button/Button"
import Input from "app/components/UI/Input/Input"
import Form from "app/layouts/Form/Form"
import { useSelector } from "react-redux"

function ProfilePersonalMe() {
  const user = useSelector(state => state.user.auth ? state.user : undefined)
  return (
    <>
      <h5 className="heading">Личная информация</h5>
      <Form gap="2em">
        <Input placeholder="Имя" defaultValue={user?.fullName} width="25em" />
        <Input defaultValue={user?.type} readOnly width="25em" />
        <Input placeholder="Email" type="email" defaultValue={user?.email} width="25em" />
        <Input placeholder="Телефон" type="tel" defaultValue={user?.phone} width="25em" />
        <div><Button type="submit">Сохранить</Button></div>
      </Form>
    </>
  )
}

export default ProfilePersonalMe
