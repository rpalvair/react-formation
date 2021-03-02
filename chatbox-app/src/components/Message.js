import { Fragment } from "react"

const Message = ({ message, pseudo }) => {
  return <p className="user-message">{message ? message : "Mon Message"}</p>
}

export default Message
