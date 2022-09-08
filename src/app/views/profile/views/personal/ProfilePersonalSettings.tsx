import QueryContainer from "app/components/containers/QueryContainer/QueryContainer"
import Button from "app/components/UI/Button/Button"
import Checkbox from "app/components/UI/Checkbox/Checkbox"
import {Column} from "app/layouts/BaseLayouts/BaseLayouts"
import Form, {FormState} from "app/layouts/Form/Form"
import useLocalStorage from "hooks/useLocalStorage"
import {isValidResponse} from "infrastructure/persistence/api/client"
import {getUser, patchUser} from "infrastructure/persistence/api/data/actions"
import {mapCabinetUsersSettings} from "infrastructure/persistence/api/mappings/cabinet"
import {mapUser} from "infrastructure/persistence/api/mappings/user"
import {userUpdate} from "infrastructure/persistence/redux/reducers/user"
import {UserSigned} from "infrastructure/persistence/redux/reducers/user/types"
import {useEffect, useState} from "react"
import {useClient, useMutation} from "react-fetching-library"
import {useDispatch, useSelector} from "react-redux"

enum FormInputs {
  bidUpConfirm = "increase",
  smsOnSubscriptionsChange = "subscriptions",
  smsOnBidChange = "bidding",
}

function ProfilePersonalSettings() {
  const user = useSelector(state => state.user) as UserSigned
  const [confirm, setConfirm] = useState(user.bet_confirmation)
  // const {mutate} = useMutation(patchUser)
  // const [pending, setPending] = useState(false)
  const client = useClient()
  const dispatch = useDispatch()
  // async function onSubmit() {
  //   setPending(true)
  //   const {error} = await mutate({bet_confirmation: confirm})
  //   setPending(false)
  //   if (error) return
  // }

  async function settingBetConfirm() {
    const {error, payload} = await client.query(
      patchUser({bet_confirmation: confirm})
    )

    if (error) return
    if (payload == null) return
    dispatch(userUpdate(mapUser(payload)))
  }
  return (
    <>
      <h5 className="heading">Настройки</h5>
      {/* <Form onSubmit={onSubmit}> */}
      {/* <QueryContainer action={getCabinetUsersSettings()} mapping={mapCabinetUsersSettings}>
                {payload => ( */}
      {/* <QueryContainer action={getUser()} mapping={mapUser}>
        {payload => ( */}
      <Column>
        <Checkbox
          name={FormInputs.bidUpConfirm}
          defaultChecked={!confirm}
          onChange={() => setConfirm(!confirm)}>
          Не запрашивать подтверждение о повышении ставки
        </Checkbox>
        {/* <Checkbox name={FormInputs.smsOnSubscriptionsChange} defaultChecked={payload.smsOnSubscriptionsChange}>Получать смс-уведомления о изменениях в моих подписках</Checkbox>
          <Checkbox name={FormInputs.smsOnBidChange} defaultChecked={payload.smsOnBidChange}>Получать смс-уведомления о изменениях в торгах в которых я принял участие</Checkbox> 
      <div><Button pending={pending} type="submit">Сохранить</Button></div>  */}
      </Column>
      {/* )} */}
      {/* </QueryContainer> */}
      <div>
        <Button onClick={settingBetConfirm}>Сохранить</Button>
      </div>
      {/* </Form> */}
    </>
  )
}

export default ProfilePersonalSettings
