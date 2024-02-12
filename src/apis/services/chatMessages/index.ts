import { axiosClient } from '@/apis/clients'
import {
  ChatMessage,
  ChatMessageRequest,
  PaginatedChatMessageList,
} from '@/schema/_generated/API'
// import { DateTime } from 'luxon'

class ChatMessageService {
  async list(): Promise<PaginatedChatMessageList> {
    // const now = DateTime.local(2023, 9, 1, 0, 0).setZone('Asia/Tokyo')
    // const now = DateTime.now().setZone('Asia/Tokyo')
    return await axiosClient.chatMessages
      .chatMessagesList()
      .then((res) => {
        console.log('chat get success')
        return res.data
      })
      .catch((err) => {
        console.log(err)
        return err
      })
  }

  async create(body: ChatMessageRequest): Promise<ChatMessage> {
    return await axiosClient.chatMessages
      .chatMessagesCreate(body)
      .then((res) => {
        console.log('chat post success')
        return res.data
      })
      .catch((err) => {
        console.log(err)
        return err
      })
  }
}

export const chatMessageService = new ChatMessageService()
