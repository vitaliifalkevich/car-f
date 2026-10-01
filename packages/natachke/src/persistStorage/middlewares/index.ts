import expireMiddleware from './expireMiddleware'

export const middlewares = {
  expireMiddleware,
}

export const applyMiddleWares = (params: IMiddleWareParams) => {
  Object.values(middlewares).forEach(middleware => middleware(params))
}

interface IMiddleWareParams {
  key: string
  storage: string
  expireSeconds?: number
}
