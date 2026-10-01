import React, { useMemo } from 'react'
import {
  Wrapper,
  Container,
  Icon,
  Text,
  Price,
  PriceContainer,
  TechItem,
} from './styled'
import fuelIcon from 'assets/icons/fuel.svg'
import transmissionIcon from 'assets/icons/transmission.svg'
import locationIcon from 'assets/icons/location.svg'
import mileageIcon from 'assets/icons/mileage.svg'
import { useTranslation } from 'react-i18next'
import { useBreakpoint } from 'MediaQueriesProvider'
import { UnderMarket } from 'ui/Labels'
import { useRegion } from 'hooks'

interface TechInfoProps {
  mileage?: number
  fuel?: string
  transmission?: string
  region?: string
  isLowPrice?: boolean
  price: string
}

const TechInfo: React.FC<TechInfoProps> = ({
  mileage,
  fuel,
  transmission,
  region,
  isLowPrice,
  price,
}) => {
  const { t } = useTranslation()
  const breakpoints = useBreakpoint()
  const getRegion = useRegion()

  const mileageInfo = useMemo(
    () => (
      <TechItem>
        <Icon src={mileageIcon} alt="mileage" />
        {mileage && <Text>{`${mileage} ${t('mileageUnits')}`}</Text>}
      </TechItem>
    ),
    [mileage, t],
  )
  const fuelInfo = useMemo(
    () => (
      <TechItem>
        <Icon src={fuelIcon} alt="fuel" />
        {fuel && <Text>{t(`fuelOptions.${fuel}`)}</Text>}
      </TechItem>
    ),
    [fuel, t],
  )
  const locationInfo = useMemo(
    () => (
      <TechItem>
        <Icon src={locationIcon} alt="location" />
        {region && <Text>{getRegion(region)}</Text>}
      </TechItem>
    ),
    [getRegion, region],
  )
  const transmissionInfo = useMemo(
    () => (
      <TechItem>
        <Icon src={transmissionIcon} alt="transmission" />
        {transmission && (
          <Text>{t(`transmissionOptions.${transmission}`)}</Text>
        )}
      </TechItem>
    ),
    [t, transmission],
  )
  return (
    <Wrapper>
      {breakpoints.mobile && (
        <div>
          <PriceContainer>
            <Price>{price}</Price>
            {isLowPrice && <UnderMarket size="md" />}
          </PriceContainer>
        </div>
      )}
      <Container>
        {!breakpoints.mobile ? (
          <>
            {mileageInfo}
            {fuelInfo}
            {locationInfo}
            {transmissionInfo}
          </>
        ) : (
          <>
            <div>
              {mileageInfo}
              {fuelInfo}
            </div>
            <div>
              {locationInfo}
              {transmissionInfo}
            </div>
          </>
        )}
      </Container>
    </Wrapper>
  )
}

export default TechInfo
