import { axiosClient } from '@/apis/clients'
// import { DateTime } from 'luxon'

class ChatMessageService {
  async list() {
    // const now = DateTime.local(2023, 9, 1, 0, 0).setZone('Asia/Tokyo')
    // const now = DateTime.now().setZone('Asia/Tokyo')
    return await axiosClient
      .get('/chat_messages/', {
        // params: {
        //   latest_timestamp: now.toISO(),
        // },
      })
      .then((res) => {
        console.log("chat get success")
        return res.data
      })
      .catch((err) => {
        console.log(err)
        return err
      })
  }
  async create(body: { text: string }) {
    return await axiosClient
      .post('/chat_messages/', body)
      .then((res) => {
        console.log("chat post success")
        return res.data
      })
      .catch((err) => {
        console.log(err)
        return err
      })
  }
}

export const chatMessageService = new ChatMessageService()
