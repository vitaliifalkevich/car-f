import React from 'react'
import TechInfo from './TechInfo'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import Description from './Description'
import { CarDetailsSlider } from 'ui/Sliders'
import Actions from './Actions'
import { useSelector } from 'react-redux'
import {
  getCarInfoData,
  getCarIsUnderMarket,
} from '../../entities/CarInfo/selectors'
import { useFormatPrice } from 'hooks'

const InfoCarDetails: React.FC = () => {
  const formatPrice = useFormatPrice()
  const carInfo = useSelector(getCarInfoData)
  const isPriceUnderMarket = useSelector(getCarIsUnderMarket)

  return (
    <ComponentThemeProvider themes={themes}>
      <div>
        <TechInfo
          mileage={carInfo?.mileage}
          fuel={carInfo?.engine_type?.value}
          transmission={carInfo?.transmission?.value}
          region={carInfo?.region?.region_code}
          price={formatPrice({ price: carInfo?.price })}
          isLowPrice={isPriceUnderMarket}
        />

        <CarDetailsSlider images={carInfo?.images} />
        {carInfo?.canEdit && (
          <Actions
            carId={carInfo?.id}
            carUrl={carInfo?.url}
            viewCarCount={carInfo?.view_car_count}
            viewPhoneCount={carInfo?.view_phone_count}
          />
        )}
        {carInfo && <Description {...carInfo} />}
      </div>
    </ComponentThemeProvider>
  )
}

export default InfoCarDetails
