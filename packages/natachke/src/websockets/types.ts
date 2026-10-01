import { Socket } from 'socket.io-client'

export interface UseSocketAPI {
  socket: Socket | null
}

export interface Pagination {
  start: number
  count: number
}
