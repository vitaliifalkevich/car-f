import { ThemeState } from 'styles/theme/types'
import { IState as SetupApp } from 'entities/Bootstrap/types'
import { IState as Auth } from 'entities/Auth/types'
import { IState as ResetPassword } from 'entities/ResetPassword/types'
import { IState as SetNewPassword } from 'entities/SetNewPassword/types'
import { IState as Car } from 'entities/Car/types'
import { IState as myCars } from 'entities/MyCars/types'
import { IState as carInfo } from 'entities/CarInfo/types'
import { IState as viewsCount } from 'entities/ViewsCount/types'
import { IState as favoriteCars } from 'entities/Favorites/types'
import { IState as notes } from 'entities/Notes/types'
import { IState as homeCars } from 'entities/HomeCars/types'
import { IState as search } from 'entities/Search/types'

export interface RootState {
  theme?: ThemeState
  setupData?: SetupApp
  auth?: Auth
  resetPassword?: ResetPassword
  setNewPassword?: SetNewPassword
  car?: Car
  myCars?: myCars
  carInfo?: carInfo
  viewsCount?: viewsCount
  favoriteCars?: favoriteCars
  notes?: notes
  homeCars?: homeCars
  search?: search
}
