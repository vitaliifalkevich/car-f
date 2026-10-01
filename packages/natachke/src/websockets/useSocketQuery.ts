import { useCallback, useEffect, useRef, useState } from 'react'
import { useSocket } from 'websockets/SocketProvider'
import { equals } from 'ramda'

interface UseSocketResponse<TypeResponse> {
  data?: TypeResponse
  isLoading: boolean
  error: null | string
}

interface PayloadType {
  event: string
  eventSubscribe: string
  data: any
}

export const useSocketQuery = <TypeResponse>(
  payload: PayloadType,
): UseSocketResponse<TypeResponse> => {
  const { socket } = useSocket()
  const [data, setData] = useState<TypeResponse>()
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState<null | string>(null)
  const prevState = useRef<any>(null)

  const sendMessage = useCallback(() => {
    socket?.emit(payload.event, payload.data)
  }, [payload, socket])

  useEffect(() => {
    if (equals(prevState.current, payload.data)) return

    if (socket?.connected && payload.data) {
      setLoading(true)
      setError(null)
      sendMessage()
      prevState.current = payload.data
    }
  }, [payload.data, error, sendMessage, socket, isLoading])

  useEffect(() => {
    const listener = data => {
      setData(data)
      setLoading(false)
      setError(null)
    }
    socket?.on(payload.eventSubscribe, listener)
    return () => {
      socket.off(payload.eventSubscribe, listener)
    }
    //eslint-disable-next-line
  }, [])

  return {
    data,
    isLoading,
    error,
  }
}
