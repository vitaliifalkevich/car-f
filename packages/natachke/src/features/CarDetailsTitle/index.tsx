import React from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import Favorite from 'features/Favorite'
import { TrueCar, Top50 } from 'ui/Badges'
import { Container, Title, Price } from './styled'
import { useTranslation } from 'react-i18next'
import { UnderMarket } from 'ui/Labels'
import { useBreakpoint } from '../../MediaQueriesProvider'

interface CarDetailsTitleProps {
  title: string
  isTrueCar?: boolean
  carInTopCatalog?: boolean
  isLowPrice?: boolean
  price: string
  carId?: number
}

const CarDetailsTitle: React.FC<CarDetailsTitleProps> = ({
  title,
  isTrueCar,
  carInTopCatalog,
  isLowPrice,
  price,
  carId,
}) => {
  const { t } = useTranslation()
  const breakpoints = useBreakpoint()
  return (
    <ComponentThemeProvider themes={themes}>
      <Container>
        <div>
          {carId && <Favorite size="md" carId={carId} />}
          <Title>{title}</Title>
          {isTrueCar && <TrueCar size="sm" tooltip={t('trueCarTooltip')} />}
          {carInTopCatalog && <Top50 size="sm" tooltip={t('topCarTooltip')} />}
        </div>
        {!breakpoints.mobile && (
          <div>
            <Price>{price}</Price>
            {isLowPrice && <UnderMarket size="md" />}
          </div>
        )}
      </Container>
    </ComponentThemeProvider>
  )
}

export default CarDetailsTitle
