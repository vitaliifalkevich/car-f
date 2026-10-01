import React, { useEffect, useMemo } from 'react'
import { MainContainer, TwoColumnsContainer } from 'ui/Containers'
import CarsTopNavigation from 'features/CarTopNavigation'
import CarDetailsTitle from 'features/CarDetailsTitle'
import LeftBarCarDetails from 'features/LeftBarCarDetails'
import InfoCarDetails from 'features/InfoCarDetails'
import { useBreakpoint } from 'MediaQueriesProvider'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { actions } from 'entities/CarInfo/slice'
import {
  getCarInfoData,
  getCarInfoErrors,
  getCarIsUnderMarket,
} from 'entities/CarInfo/selectors'
import { generateCarTitle } from 'utils'
import Error404 from './Error404'
import { GROUPS, EXCEPTIONS } from 'config'
import { useFormatPrice } from '../hooks'
import { useIncreaseViewsCount } from 'hooks'
import OnReview from './OnReview'
import { useCarDetailsSEO } from '../hooks/useSeo/pages/useCarDetailsSEO'

const CarDetails: React.FC = () => {
  const breakpoints = useBreakpoint()
  const dispatch = useDispatch()
  const { carUrl } = useParams()
  const carInfo = useSelector(getCarInfoData)
  const carInfoErrors = useSelector(getCarInfoErrors)
  const formatPrice = useFormatPrice()
  const isPriceUnderMarket = useSelector(getCarIsUnderMarket)

  useCarDetailsSEO(carInfo)

  useIncreaseViewsCount({ carId: carInfo?.id, carUrl })

  useEffect(() => {
    dispatch(actions.startGettingCarInfo(carUrl))
    return () => {
      dispatch(actions.resetCarInfo())
    }
  }, [carUrl, dispatch])

  const isCarHasGroupTrueCar = useMemo(() => {
    if (!carInfo) return false
    return !!carInfo?.groups?.find(item => item.value === GROUPS.TRUE_CAR)
  }, [carInfo])

  const isCarHasGroupTopCar = useMemo(() => {
    if (!carInfo) return false
    return !!carInfo?.groups?.find(item => item.value === GROUPS.TOP_CATALOG)
  }, [carInfo])

  if (carInfoErrors === EXCEPTIONS.ON_REVIEW) return <OnReview />
  if (carInfoErrors) return <Error404 />

  // if (!carInfo) return null

  return (
    <MainContainer>
      <CarsTopNavigation carUrl={carInfo?.url} />
      <CarDetailsTitle
        title={generateCarTitle(
          carInfo?.brand?.name,
          carInfo?.model?.name,
          carInfo?.year,
        )}
        isTrueCar={isCarHasGroupTrueCar}
        carInTopCatalog={isCarHasGroupTopCar}
        isLowPrice={isPriceUnderMarket}
        price={formatPrice({ price: carInfo?.price })}
        carId={carInfo?.id}
      />
      <TwoColumnsContainer>
        <aside>
          <LeftBarCarDetails
            url={carInfo?.url}
            user={carInfo?.user}
            date={
              carInfo?.created_at ? new Date(carInfo?.created_at) : undefined
            }
            currentCarId={carInfo?.id}
            carInTopCatalog={isCarHasGroupTopCar}
          />
        </aside>
        <main>
          <InfoCarDetails />
        </main>
      </TwoColumnsContainer>
    </MainContainer>
  )
}

export default CarDetails
