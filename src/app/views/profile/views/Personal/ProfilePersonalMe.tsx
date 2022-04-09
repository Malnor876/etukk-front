import QueryContainer from "app/components/containers/QueryContainer/QueryContainer"
import Button from "app/components/UI/Button/Button"
import Input from "app/components/UI/Input/Input"
import Form from "app/layouts/Form/Form"
import { getCabinet } from "infrastructure/persistence/api/data/actions"
import { mapCabinet } from "infrastructure/persistence/api/mappings/cabinet"

function ProfilePersonalMe() {
  return (
    <QueryContainer action={getCabinet()} mapping={mapCabinet}>
      {payload => (
        <>
          <h5 className="heading">Личная информация</h5>
          <Form gap="2em">
            <Input placeholder="Имя" defaultValue={payload.name} width="25em" />
            <Input defaultValue={payload.type} readOnly width="25em" />
            <Input placeholder="Email" type="email" defaultValue={payload.email} width="25em" />
            <Input placeholder="Телефон" type="tel" defaultValue={payload.phone} width="25em" />
            <div><Button type="submit">Сохранить</Button></div>
          </Form>
        </>
      )}
    </QueryContainer>
  )
}

export default ProfilePersonalMe
