import useInjectBootstrap from './Bootstrap/useInjectBootstrap'
import useInjectAuth from './Auth/useInjectAuth'
import useInjectResetPassword from './ResetPassword/useInjectResetPassword'
import useInjectSetNewPassword from './SetNewPassword/useInjectSetNewPassword'
import useInjectCar from './Car/useInjectCar'
import useInjectMyCars from './MyCars/useInjectMyCars'
import useInjectCarInfo from './CarInfo/useInjectCarInfo'
import useInjectViewsCount from './ViewsCount/useInjectViewsCount'
import useInjectFavoriteCars from './Favorites/useInjectFavoriteCars'
import useInjectNotes from './Notes/useInjectNotes'
import useInjectHomeCars from './HomeCars/useInjectHomeCars'
import useInjectSearch from './Search/useInjectSearch'

const useInjectEntities = () => {
  useInjectBootstrap()
  useInjectAuth()
  useInjectResetPassword()
  useInjectSetNewPassword()
  useInjectCar()
  useInjectMyCars()
  useInjectCarInfo()
  useInjectViewsCount()
  useInjectFavoriteCars()
  useInjectNotes()
  useInjectHomeCars()
  useInjectSearch()
}

export default useInjectEntities
