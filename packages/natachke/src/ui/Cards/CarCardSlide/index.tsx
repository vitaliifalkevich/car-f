import React, { useCallback } from 'react'
import { Link, useHistory } from 'react-router-dom'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from '../themes'
import Favorite from 'features/Favorite'
import { UnderMarket, Recommend } from 'ui/Labels'
import {
  Container,
  Image,
  Title,
  Row,
  Description,
  Price,
  DescriptionPoint,
  RowWithButtonWrapper,
} from './styled'
import { useTranslation } from 'react-i18next'
import SecondaryButton from '../../SecondaryButton'
import { useBreakpoint } from 'MediaQueriesProvider'
import { useFormatPrice, useGenerateUrlWithLang } from 'hooks'
import { IMAGE_SiZES } from 'config'
import { generateCarTitle } from 'utils'
import { ISearchCar } from 'entities/HomeCars/types'

interface CarCardSlideProps extends ISearchCar {
  withButton?: boolean
  isRecommend?: boolean
  isLowPrice?: boolean
  carImageSize?: IMAGE_SiZES
}

const CarCardSlide: React.FC<CarCardSlideProps> = ({
  brand,
  model,
  year,
  id,
  engine_type,
  engine_volume,
  isLowPrice = false,
  isRecommend = false,
  withButton,
  carImageSize = IMAGE_SiZES.SM,
  ...props
}) => {
  const { t } = useTranslation()
  const generateUrlWithLang = useGenerateUrlWithLang()
  const breakpoints = useBreakpoint()
  const history = useHistory()
  const title = generateCarTitle(brand?.name, model?.name, year)
  const formatPrice = useFormatPrice()
  const onCarNavigate = useCallback(() => {
    history.push(generateUrlWithLang(`/cars/${props.url}`))
  }, [generateUrlWithLang, history, props.url])

  return (
    <ComponentThemeProvider themes={themes}>
      <Container>
        <Image
          src={props.images?.[carImageSize]?.[0]}
          link={generateUrlWithLang(`/cars/${props.url}`)}
          alt="car"
        />
        <Row>
          <Title>
            <Link to={generateUrlWithLang(`/cars/${props.url}`)}>{title} </Link>
          </Title>

          {(!withButton || breakpoints.mobile) && id && <Favorite carId={id} />}
        </Row>
        <Row>
          <Description className="car-card-description">
            {props?.mileage && (
              <div>{`${props?.mileage} ${t('mileageUnits')}`}</div>
            )}
            <DescriptionPoint />

            {engine_volume ? (
              <div>
                {engine_volume +
                  ' ' +
                  t('liter') +
                  ', ' +
                  t(`fuelOptions.${engine_type?.value}`).toLowerCase()}
              </div>
            ) : (
              <div>{t(`fuelOptions.${engine_type?.value}`).toLowerCase()}</div>
            )}
          </Description>
        </Row>
        <Row>
          {props?.price && (
            <Price>{formatPrice({ price: props?.price })}</Price>
          )}
          {!isRecommend && isLowPrice && <UnderMarket />}
          {isRecommend && <Recommend />}
        </Row>

        {withButton && (
          <RowWithButtonWrapper>
            <Row>
              <SecondaryButton color="green" onClick={onCarNavigate}>
                {t('view')}
              </SecondaryButton>
              {!breakpoints.mobile && id && <Favorite carId={id} />}
            </Row>
          </RowWithButtonWrapper>
        )}
      </Container>
    </ComponentThemeProvider>
  )
}

export default CarCardSlide
