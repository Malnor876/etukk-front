import Button from "app/components/UI/Button/Button"
import { updateUser } from "infrastructure/persistence/redux/reducers/user"
import { useDispatch } from "react-redux"

function ProfilePersonalExit() {
  const dispatch = useDispatch()
  function logout() {
    dispatch(updateUser({ auth: false }))
  }
  return (
    <>
      <h5 className="heading">Выйти из профиля?</h5>
      <div><Button onClick={logout}>Выйти</Button></div>
    </>
  )
}

export default ProfilePersonalExit