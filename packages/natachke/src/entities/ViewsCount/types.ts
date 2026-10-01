export interface IPreparedViewHistory {
  [CATEGORY: string]: {
    count: number
    date: string
  }[]
}

export interface IState {
  ui: {
    loading: boolean
  }
  errors: null | string
  history: {
    ui: {
      loading: boolean
    }
    data: IPreparedViewHistory
    isEmptyHistory: boolean
    errors: null | string
  }
}
