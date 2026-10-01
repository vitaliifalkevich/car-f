import { useCallback } from 'react'
import { useSocket } from 'websockets/SocketProvider'
import config from 'config'
const { socketEvents } = config

interface ComplaintPayload {
  opponentId?: number
  complaint: string
}

export const useComplainSocket = () => {
  const { socket } = useSocket()

  const complain = useCallback(
    ({ opponentId, complaint }: ComplaintPayload) => {
      if (opponentId)
        socket?.emit(socketEvents.COMPLAINT_ADD, {
          user_id: opponentId,
          complaint,
        })
    },
    [socket],
  )

  return {
    complain,
  }
}
