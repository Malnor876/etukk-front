import "./UserLogs.scss"

import SellerPreview from "app/components/business/SellerPreview/SellerPreview"

interface UserLogsProps { }

function UserLogs(props: UserLogsProps) {
  return (
    <div className="user-logs">
      <div className="user-logs__user">
        <SellerPreview
          avatar=""
          name="ИП ПОВЕЛИТЕЛЬ МЕБЕЛИ и мира в целом"
          city="Москва"
          likes={5}
          dislikes={1}
          lotsCount={1}
        />
      </div>
      .user-logs__
    </div>
  )
}

function LogsContainer() {
  return (
    <div className="logs-container">

    </div>
  )
}

// function Log() {
//   return (

//   )
// }

export default UserLogs
