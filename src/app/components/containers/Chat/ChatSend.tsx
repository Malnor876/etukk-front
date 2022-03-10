import Icon from "app/components/UI/Icon/Icon"
import { Dispatch, useState } from "react"

import ChatInput from "./ChatInput"

interface ChatSendProps {
  onSubmit?: Dispatch<string>
}

function ChatSend(props: ChatSendProps) {
  const [message, setMessage] = useState("")
  function onSubmit() {
    props.onSubmit?.(message)
    setMessage("")
  }
  return (
    <div className="chat-send">
      <ChatInput />
      <button className="chat-send__button" onClick={onSubmit}>
        <Icon name="send" />
      </button>
    </div>
  )
}

export default ChatSend
