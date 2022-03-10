import "./Chat.scss"

import { Dispatch } from "react"
import { UserSigned } from "redux/reducers/user/types"

import { ChatMessageType } from "./Chat.types"
import ChatMessage from "./ChatMessage"
import ChatSend from "./ChatSend"

interface ChatProps {
  recipient: Pick<UserSigned, "firstName" | "avatar">
  messages: ChatMessageType[]
  onSubmit?: Dispatch<string>
}

function Chat(props: ChatProps) {
  return (
    <div className="chat">
      <div className="chat-recipient">
        <img src={props.recipient.avatar} alt="avatar" className="chat-recipient__avatar" />
        <div className="chat-recipient__name">{props.recipient.firstName}</div>
      </div>
      <div className="chat__field">
        {props.messages.map((message, index) => (
          <ChatMessage {...message} key={index} />
        ))}
      </div>
      <ChatSend onSubmit={props.onSubmit} />
    </div>
  )
}

export default Chat
