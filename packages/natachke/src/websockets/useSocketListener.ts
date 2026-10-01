import { useEffect, useState } from 'react'
import { useSocket } from 'websockets/SocketProvider'

interface UseSocketListenerResponse<TypeResponse> {
  data?: TypeResponse
}

interface PayloadType {
  eventSubscribe: string
}

export const useSocketListener = <TypeResponse>(
  payload: PayloadType,
): UseSocketListenerResponse<TypeResponse> => {
  const { socket } = useSocket()
  const [data, setData] = useState<TypeResponse>()

  useEffect(() => {
    const listener = newData => {
      setData(newData)
    }
    socket?.on(payload.eventSubscribe, listener)
    return () => {
      socket.off(payload.eventSubscribe, listener)
    }
    //eslint-disable-next-line
  }, [])

  return {
    data,
  }
}
