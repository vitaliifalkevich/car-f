import config from 'config'
import { useSocketQuery } from './useSocketQuery'
const { socketEvents } = config

interface GetMessagesPayload {
  chat_uuid?: string | null
}

export interface UseMessagesResponse {
  id: number
  is_delivered: boolean
  is_read: boolean
  text: string
  created_at: string
  author: {
    id: number
  }
}

export const useMessagesSocket = (payload: GetMessagesPayload) => {
  const { data, isLoading, error } = useSocketQuery<UseMessagesResponse[]>({
    event: socketEvents.MESSAGES_GET,
    eventSubscribe: socketEvents.MESSAGES_GET_SUCCESS,
    data: {
      chat_uuid: payload.chat_uuid,
    },
  })
  return {
    data: data || [],
    isLoading,
    error,
  }
}
