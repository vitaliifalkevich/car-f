export interface INote {
  message: string
  date: number
}
export interface IState {
  data: {
    [URL: string]: INote
  }
}

export interface IAddNote {
  carUrl: string
  text: string
}

export interface IDeleteNote {
  carUrl: string
}
