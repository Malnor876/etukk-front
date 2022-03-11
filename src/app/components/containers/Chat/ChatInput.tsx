import Icon from "app/components/UI/Icon/Icon"

interface ChatInputProps {

}

function ChatInput(props: ChatInputProps) {
  return (
    <label className="chat-input">
      <input type="text" autoComplete="message" placeholder="Ваше сообщение..." className="chat-input__input" />
      <div className="chat-input__buttons">
        <button className="chat-input__button">
          <Icon name="clip" />
        </button>
        <button className="chat-input__button">
          <Icon name="smile" />
        </button>
      </div>
    </label>
  )
}

export default ChatInput
