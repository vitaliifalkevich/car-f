import {
  CarInitialOptionsResponse,
  CreateCarResponseCarImages,
  CreateCarPayload,
  CarInfoResponse,
  EditCarPayload,
} from '@handber/natachke-api-client'

export interface CarCreatePayloadWithAction {
  data: CreateCarPayload
  successAction: () => void
  recaptchaToken?: string
}

export interface CarEditPayloadWithAction {
  data: EditCarPayload
  successAction: () => void
  recaptchaToken?: string
}

export enum EDIT_CAR_DATA_STATE {
  INITIAL = 'initial',
  READY = 'ready',
}

export interface ModelsByBrandResponse {
  id: number
  value: string
  name: string
  brand: {
    id: number
    value: string
    name: string
  }
}

export interface IState {
  initialOptions: {
    ui: {
      loading: boolean
    }
    data: CarInitialOptionsResponse | null
    errors: string | null
  }
  models: {
    ui: {
      loading: boolean
    }
    data: ModelsByBrandResponse[]
    errors: string | null
  }
  allModelsByBrand: {
    ui: {
      loading: boolean
    }
    data: {
      [BRAND: string]: ModelsByBrandResponse[]
    }
    errors: string | null
  }
  createCar: {
    data: {
      url: string | null
    }
    ui: {
      loading: boolean
    }
    errors: string | null
  }
  editCar: {
    prevData: null | CarInfoResponse
    prevDataState: EDIT_CAR_DATA_STATE
    ui: {
      carDataLoading: boolean
      editLoading: boolean
    }
    errors: string | null
  }
  photos: {
    add: {
      loading: boolean
    }
    remove: {
      loading: boolean
    }
    data: {
      images: CreateCarResponseCarImages[]
      guestKey: string | null
      defaultImage?: string
    }
    errors: string | null
  }
}
