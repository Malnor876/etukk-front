import QueryContainer from "app/components/containers/QueryContainer/QueryContainer"
import Button from "app/components/UI/Button/Button"
import Checkbox from "app/components/UI/Checkbox/Checkbox"
import { Column } from "app/layouts/BaseLayouts/BaseLayouts"
import Form, { FormState } from "app/layouts/Form/Form"
import useLocalStorage from "hooks/useLocalStorage"
import { mapCabinetUsersSettings } from "infrastructure/persistence/api/mappings/cabinet"
import { useState } from "react"
import { useMutation } from "react-fetching-library"

enum FormInputs {
  bidUpConfirm = "increase",
  smsOnSubscriptionsChange = "subscriptions",
  smsOnBidChange = "bidding"
}

function ProfilePersonalSettings() {
  const [getConfirm, setConfirm] = useLocalStorage("bid-up-confirm", "yes")

  // const { mutate } = useMutation(postCabinetUsersSettings)
  // const [pending, setPending] = useState(false)
  // async function onSubmit(state: FormState<FormInputs, boolean>) {
  //   setPending(true)
  //   const { error } = await mutate(state.values)
  //   setPending(false)
  //   if (error) return
  // }
  return (
    <>
      <h5 className="heading">Настройки</h5>
      {/* <Form onSubmit={onSubmit}> */}
      {/* <QueryContainer action={getCabinetUsersSettings()} mapping={mapCabinetUsersSettings}>
          {payload => ( */}
      <Column>
        <Checkbox name={FormInputs.bidUpConfirm} defaultChecked={getConfirm() === "no"} onChange={(_1, _2, checked) => setConfirm(checked ? "yes" : "no")}>Не запрашивать подтверждение о повышении ставки</Checkbox>
        {/* <Checkbox name={FormInputs.smsOnSubscriptionsChange} defaultChecked={payload.smsOnSubscriptionsChange}>Получать смс-уведомления о изменениях в моих подписках</Checkbox>
          <Checkbox name={FormInputs.smsOnBidChange} defaultChecked={payload.smsOnBidChange}>Получать смс-уведомления о изменениях в торгах в которых я принял участие</Checkbox> */}
        {/* <div><Button pending={pending} type="submit">Сохранить</Button></div> */}
      </Column>
      {/* )}
        </QueryContainer> */}
      {/* </Form> */}
    </>
  )
}

export default ProfilePersonalSettings