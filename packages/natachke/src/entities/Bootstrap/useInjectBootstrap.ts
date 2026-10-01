import { useLayoutEffect, useEffect } from 'react'
import { useInjectReducer, useInjectSaga } from 'redux-injectors'
import { actions, reducer, sliceKey } from './slice'
import { actions as favoriteActions } from 'entities/Favorites/slice'
import saga from './saga'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { getIsAuthorized } from './selectors'
import { actions as homeActions } from 'entities/HomeCars/slice'

const useInjectBootstrap = () => {
  const dispatch = useDispatch()
  const { i18n } = useTranslation()
  useInjectReducer({ key: sliceKey, reducer })
  useInjectSaga({ key: sliceKey, saga })

  const isAuth = useSelector(getIsAuthorized)

  useLayoutEffect(() => {
    dispatch(actions.bootstrap())
    dispatch(actions.setCurrentLanguage(i18n.language))
    dispatch(homeActions.startGettingLatestCars())
    dispatch(homeActions.startGettingHomeTopCars())
    dispatch(homeActions.startGettingMostViewedCars())
    dispatch(homeActions.startGettingTrueCars())
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    dispatch(actions.setCurrentLanguage(i18n.language))
  }, [dispatch, i18n.language])

  useEffect(() => {
    if (isAuth) dispatch(favoriteActions.startGettingFavoriteCars())
  }, [dispatch, isAuth])
}

export default useInjectBootstrap
