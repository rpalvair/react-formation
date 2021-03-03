const Message = ({ message, pseudo, sameUser }) => {
  return (
    <p className={sameUser ? "user-message" : "not-user-message"}>
      {!sameUser ? <strong>{pseudo} : </strong> : null}
      {message ? message : "Mon Message"}
    </p>
  )
}

export default Message
