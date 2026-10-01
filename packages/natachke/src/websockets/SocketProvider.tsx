import React, { createContext, useContext, useMemo } from 'react'
import { io } from 'socket.io-client'
import { getAuthToken } from '../utils'
import config from '../config'
import { UseSocketAPI } from './types'
import { useSelector } from 'react-redux'
import { getIsAuthorized } from '../entities/Bootstrap/selectors'
const { websocketApiURL, authToken } = config

const defaultValue = {
  isConnected: false,
  socket: null,
}

const SocketContext = createContext<UseSocketAPI>(defaultValue)

const SocketProvider = ({ children }) => {
  const isAuthorized = useSelector(getIsAuthorized)
  const socket = useMemo(() => {
    if (isAuthorized)
      return io(websocketApiURL, {
        transports: ['polling', 'websocket'],
        withCredentials: true,
        extraHeaders: {
          Authorization: `Token ${getAuthToken(authToken)}`,
        },
      })
  }, [isAuthorized])

  return (
    <SocketContext.Provider
      value={{
        socket: socket || null,
      }}
    >
      {children}
    </SocketContext.Provider>
  )
}

function useSocket(): any {
  const context = useContext(SocketContext)
  if (context === defaultValue) {
    throw new Error('useBreakpoint must be used within MediaQueriesProvider')
  }
  return context
}
export { useSocket, SocketProvider }
