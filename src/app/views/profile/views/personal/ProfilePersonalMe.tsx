import Button from "app/components/UI/Button/Button"
import Input from "app/components/UI/Input/Input"
import Form, {FormState} from "app/layouts/Form/Form"
import {
  patchUser,
  patchUserByUserId,
} from "infrastructure/persistence/api/data/actions"
import {mapUser} from "infrastructure/persistence/api/mappings/user"
import {userUpdate} from "infrastructure/persistence/redux/reducers/user"
import {UserSigned} from "infrastructure/persistence/redux/reducers/user/types"
import {useEffect, useState} from "react"
import {useClient} from "react-fetching-library"
import {useDispatch, useSelector} from "react-redux"

const typeText = {
  user: "Частное лицо",
  organization: "Организация",
} as const

enum FormInputs {
  fullName = "fullname",
  email = "email",
  phone = "phonenumber",
  password = "password",
}

function ProfilePersonalMe() {
  const dispatch = useDispatch()
  const client = useClient()
  const user = useSelector(state => (state.user.auth ? state.user : undefined))
  console.log("user", user?.phone)
  // const [me, setMe] = useState<UserSigned>()

  // useEffect(() => {

  // }, [])

  async function onSubmit(state: FormState<FormInputs, string>) {
    if (user == null) return

    const {error, payload} = await client.query(patchUser(state.values))
    if (error) return
    if (payload == null) return

    dispatch(userUpdate(mapUser(payload)))
  }
  return (
    <>
      <h5 className="heading">Личная информация</h5>
      <Form gap="2em" onSubmit={onSubmit}>
        <Input
          placeholder="Имя"
          defaultValue={user?.fullName}
          name={FormInputs.fullName}
          width="25em"
          maxLength={10}
        />
        <Input
          defaultValue={user?.type && typeText[user.type]}
          readOnly
          width="25em"
        />
        <Input
          placeholder="Email"
          type="email"
          defaultValue={user?.email}
          name={FormInputs.email}
          width="25em"
        />
        <Input
          placeholder="Телефон"
          type="tel"
          defaultValue={user?.phone}
          name={FormInputs.phone}
          width="25em"
        />
        <div>
          <Button type="submit">Сохранить</Button>
        </div>
      </Form>
    </>
  )
}

export default ProfilePersonalMe
