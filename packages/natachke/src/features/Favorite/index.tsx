import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FavoriteIcon from 'ui/FavoriteIcon'
import { getIsAuthorized } from 'entities/Bootstrap/selectors'
import { actions } from 'entities/Favorites/slice'
import {
  addFavoriteCarLoading,
  isCarFavorite,
} from 'entities/Favorites/selectors'
import { useHistory } from 'react-router-dom'
import { useSignUpUrl } from '../../hooks'

interface FavoriteProps {
  size?: 'sm' | 'md'
  carId: number
}

const Favorite: React.FC<FavoriteProps> = ({ size, carId }) => {
  const isFavorite = useSelector(isCarFavorite(carId))
  const isAuth = useSelector(getIsAuthorized)
  const isLoading = useSelector(addFavoriteCarLoading)
  const signUpUrl = useSignUpUrl()
  const dispatch = useDispatch()
  const history = useHistory()
  const signUpNavigate = useCallback(() => {
    history.push(signUpUrl)
  }, [history, signUpUrl])

  const onClickHandler = useCallback(() => {
    if (!isAuth) return signUpNavigate()
    if (!isFavorite) dispatch(actions.startAddingFavoriteCar(carId))
    else dispatch(actions.startDeletingFavoriteCar(carId))
  }, [carId, dispatch, isAuth, isFavorite, signUpNavigate])

  return (
    <FavoriteIcon
      size={size}
      onClick={onClickHandler}
      isFavorite={isFavorite}
      isLoading={isLoading}
    />
  )
}

export default Favorite
