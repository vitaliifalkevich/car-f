import React from 'react'
import CarPublished from 'features/CarPublished'
import { useSelector } from 'react-redux'
import { getCreateCarUrl } from '../entities/Car/selectors'
import { Redirect } from 'react-router-dom'
import { useGenerateUrlWithLang } from '../hooks'

const SellCar: React.FC = () => {
  const generateUrlWithLang = useGenerateUrlWithLang()
  const carUrl = useSelector(getCreateCarUrl)

  if (!carUrl) return <Redirect to={generateUrlWithLang('/sell')} />
  return <CarPublished />
}

export default SellCar
