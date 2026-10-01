import React, { useEffect } from 'react'
import AddCar from 'features/AddCar'
import { Redirect, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from 'entities/Car/slice'
import { CREATE_CAR_TYPE } from '../config'
import useGetEditCarData from 'features/AddCar/CarForm/useGetEditCarData'
import { EDIT_CAR_DATA_STATE } from '../entities/Car/types'
import {
  getEditMyCarDataLoading,
  getEditMyCarDataState,
  getIsCarCanBeEdited,
} from '../entities/Car/selectors'
import MainLoader from '../ui/Loaders/MainLoader'
import { useGenerateUrlWithLang } from '../hooks'

const SellCar: React.FC = () => {
  const dispatch = useDispatch()
  const { carUrl } = useParams()
  const editCarData = useGetEditCarData()
  const editMyCarDataState = useSelector(getEditMyCarDataState)
  const getEditCarDataLoading = useSelector(getEditMyCarDataLoading)
  const isCarCanBeEdited = useSelector(getIsCarCanBeEdited)
  const generateUrlWithLang = useGenerateUrlWithLang()

  useEffect(() => {
    dispatch(actions.startGettingEditCarData(carUrl))
    return () => {
      dispatch(actions.resetEditCarData())
      dispatch(actions.clearCarPhotosFromStateAfterCarCreated())
    }
  }, [carUrl, dispatch])

  if (getEditCarDataLoading) return <MainLoader />
  if (
    editMyCarDataState !== EDIT_CAR_DATA_STATE.INITIAL &&
    !isCarCanBeEdited &&
    !getEditCarDataLoading
  )
    return <Redirect to={generateUrlWithLang(`/cars/${carUrl}`)} />

  if (editMyCarDataState === EDIT_CAR_DATA_STATE.INITIAL) return null

  return <AddCar type={CREATE_CAR_TYPE.EDIT} initialValues={editCarData} />
}

export default SellCar
