import { v4 as uuidv4 } from 'uuid'
import MessageType from './MessageType'

class Message {
  id: string
  type: MessageType
  text: string
  autoDismiss?: number

  constructor(
    text: string,
    type: MessageType = MessageType.Default,
    autoDismiss: number | undefined = 5
  ) {
    this.id = uuidv4()
    this.type = type
    this.text = text
    this.autoDismiss = autoDismiss
  }
}

export default Message
