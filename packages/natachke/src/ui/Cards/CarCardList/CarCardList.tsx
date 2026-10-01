import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import parse from 'react-html-parser'
import {
  Container,
  Price,
  Title,
  Image,
  Row,
  TechContainer,
  TechText,
  TechIcon,
  TransmissionIcon,
  Description,
  TrueCarWrapper,
  TitleWrapper,
  Wrapper,
  TitleContainer,
  ActionsContainer,
  StatContainer,
  ActionsMobileContainer,
} from './styled'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from '../themes'
import { TrueCar, Top50 } from 'ui/Badges'
// import { UnderMarket } from 'ui/Labels'
import { useTranslation } from 'react-i18next'
import mileageIcon from 'assets/icons/mileage.svg'
import locationIcon from 'assets/icons/location.svg'
import fuelIcon from 'assets/icons/fuel.svg'
import transmissionIcon from 'assets/icons/transmission.svg'
import Favorite from 'features/Favorite'
import { useBreakpoint } from 'MediaQueriesProvider'
import {
  useFormatPrice,
  useGenerateUrlWithLang,
  useNavigateCarInTopCatalog,
  useNavigateEditCar,
  useNavigateTopInSearch,
  useRegion,
} from 'hooks'
import {
  Archive,
  Edit,
  ViewsCount,
  PhoneViewsCount,
  StatisticInfo,
  Delete,
  Publish,
} from 'ui/AdActions'
import ArchiveConfirm from 'features/PopUps/ArchiveConfirm'
import Statistic from 'features/PopUps/Statistic'
import Note from 'ui/Note'
import { IMyCar, MY_CAR_CATEGORY } from 'entities/MyCars/types'
import { generateCarTitle } from 'utils'
import { useDispatch, useSelector } from 'react-redux'
import { getIsAuthorized } from 'entities/Bootstrap/selectors'
import { actions } from 'entities/MyCars/slice'
import {
  ChangeCarStatusPayloadStatusEnum,
} from '@handber/natachke-api-client'
import DeleteConfirm from 'features/PopUps/DeleteConfirm'
import useCarNavigateSearchData from '../useCarNavigateSearchData'
import { TopSearch } from 'ui/Labels'

interface CarCardListProps extends IMyCar {
  withButton?: boolean
  withActions?: boolean
  viewCount?: number
  phoneCount?: number
  rejectReason?: string | null
  isTrueCar: boolean
  isTopCar: boolean
  isTopSearchCar?: boolean
  isNotActive?: boolean
  hideFavorite?: boolean
}

const CarCardList: React.FC<CarCardListProps> = ({
  brand,
  model,
  year,
  defaultImage,
  mileage,
  price,
  url,
  transmission,
  engine_type,
  isTrueCar,
  isTopCar,
  isTopSearchCar,
  region,
  shortDescription,
  withActions,
  id,
  viewCount,
  phoneCount,
  rejectReason,
  isNotActive = false,
  car_status,
  visible_status,
  hideFavorite,
}) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const getRegion = useRegion()
  const formatPrice = useFormatPrice()
  const generateUrlWithLang = useGenerateUrlWithLang()
  const navigateSearchData = useCarNavigateSearchData()

  const breakpoints = useBreakpoint()
  const onClickNavigateTopInSearch = useNavigateTopInSearch()
  const onClickNavigatePlaceInTopCatalog = useNavigateCarInTopCatalog()
  const [isOpenArchiveConfirmation, setOpenArchiveConfirmation] = useState(
    false,
  )
  const closeArchiveConfirmation = useCallback(() => {
    setOpenArchiveConfirmation(false)
  }, [setOpenArchiveConfirmation])

  const [isOpenDeleteConfirmation, setOpenDeleteConfirmation] = useState(false)
  const [isOpenStatistic, setOpenStatistic] = useState(false)

  const closeDeleteConfirmation = useCallback(() => {
    setOpenDeleteConfirmation(false)
  }, [setOpenDeleteConfirmation])

  const closeStatistic = useCallback(() => {
    setOpenStatistic(false)
  }, [])

  const isAuth = useSelector(getIsAuthorized)

  const onClickEditCar = useNavigateEditCar()

  const confirmArchiveHandler = useCallback(() => {
    closeArchiveConfirmation()
    if (!id) return
    dispatch(
      actions.startChangeCarVisibleStatus({
        carId: id,
        status: ChangeCarStatusPayloadStatusEnum.Archive,
      }),
    )
  }, [id, closeArchiveConfirmation, dispatch])

  const confirmDeleteHandler = useCallback(() => {
    closeDeleteConfirmation()
    if (!id) return
    dispatch(actions.startDeletingCar(id))
  }, [closeDeleteConfirmation, id, dispatch])

  const setPublishHandler = useCallback(() => {
    if (!id) return
    dispatch(
      actions.startChangeCarVisibleStatus({
        carId: id,
        status: ChangeCarStatusPayloadStatusEnum.Public,
      }),
    )
  }, [id, dispatch])

  return (
    <ComponentThemeProvider themes={themes}>
      <Wrapper>
        <Container isTopSearchCar={isTopSearchCar}>
          <div>
            <Link
              onClick={navigateSearchData}
              to={generateUrlWithLang(`/cars/${url}`)}
            >
              <Image
                src={defaultImage}
                alt={generateCarTitle(brand?.name, model?.name, year)}
              />
            </Link>
            {!breakpoints.mobile && !breakpoints.tablet && withActions ? (
              <StatContainer>
                <ViewsCount viewCount={Number(viewCount)} />
                <PhoneViewsCount phoneCount={Number(phoneCount)} />
                {id && (
                  <StatisticInfo
                    setOpenStatistic={setOpenStatistic}
                    carId={id}
                  />
                )}
              </StatContainer>
            ) : null}
          </div>
          <div>
            <TitleWrapper>
              <Row>
                <TitleContainer>
                  <Title>
                    <Link
                      onClick={navigateSearchData}
                      to={generateUrlWithLang(`/cars/${url}`)}
                    >
                      {generateCarTitle(brand?.name, model?.name, year)}
                    </Link>
                  </Title>

                  {isTrueCar && (
                    <TrueCarWrapper>
                      <TrueCar size="sm" tooltip={t('trueCarTooltip')} />
                    </TrueCarWrapper>
                  )}
                  {isTopCar && <Top50 size="sm" tooltip={t('topCarTooltip')} />}
                </TitleContainer>
                {/*{isLowPrice && <UnderMarket />}*/}
              </Row>
            </TitleWrapper>
            <Row>
              <Price>{formatPrice({ price })}</Price>
              {isTopSearchCar && <TopSearch />}
            </Row>
            <TechContainer withActions={withActions}>
              {mileage && (
                <div>
                  <TechIcon src={mileageIcon} alt="mileage" />
                  <TechText>
                    {mileage} {t('mileageUnits')}
                  </TechText>
                </div>
              )}

              {engine_type && (
                <div>
                  <TechIcon src={fuelIcon} alt="fuel" />
                  <TechText>{t(`fuelOptions.${engine_type?.value}`)}</TechText>
                </div>
              )}

              {transmission && (
                <div>
                  <TransmissionIcon src={transmissionIcon} alt="transmission" />
                  <TechText>
                    {t(`transmissionOptions.${transmission?.value}`)}
                  </TechText>
                </div>
              )}
              {region?.region_code && (
                <div>
                  <TechIcon src={locationIcon} alt="location" />
                  <TechText>{getRegion(region?.region_code)}</TechText>
                </div>
              )}
            </TechContainer>
            {!breakpoints.tablet && !breakpoints.mobile && (
              <>
                <Row>
                  <Description withActions={withActions}>
                    {parse(shortDescription)}
                  </Description>
                  {!hideFavorite && id && <Favorite carId={id} />}
                </Row>
                {isAuth && withActions && (
                  <>
                    <ActionsContainer>
                      {visible_status?.value === MY_CAR_CATEGORY.ARCHIVE ? (
                        <Publish publishHandler={setPublishHandler} />
                      ) : null}

                      <Edit onClickEditCar={() => onClickEditCar(url)} />
                      {visible_status?.value === MY_CAR_CATEGORY.ARCHIVE ? (
                        <Delete
                          setOpenDeleteConfirmation={setOpenDeleteConfirmation}
                        />
                      ) : (
                        <Archive
                          setOpenArchiveConfirmation={
                            setOpenArchiveConfirmation
                          }
                        />
                      )}
                    </ActionsContainer>
                  </>
                )}
              </>
            )}
          </div>
        </Container>
        {(breakpoints.tablet || breakpoints.mobile) && (
          <Row>
            <Description>{parse(shortDescription)}</Description>
            {!hideFavorite && id && <Favorite carId={id} />}
          </Row>
        )}
        {breakpoints.tablet && withActions ? (
          <>
            <ActionsMobileContainer>
              <ViewsCount viewCount={Number(viewCount)} />

              <PhoneViewsCount phoneCount={Number(phoneCount)} />

              <Edit onClickEditCar={() => onClickEditCar(url)} />
              {id && (
                <StatisticInfo setOpenStatistic={setOpenStatistic} carId={id} />
              )}

              <Archive
                setOpenArchiveConfirmation={setOpenArchiveConfirmation}
              />
            </ActionsMobileContainer>
          </>
        ) : null}
        {isOpenArchiveConfirmation && (
          <ArchiveConfirm
            onConfirmClickHandler={confirmArchiveHandler}
            closeArchiveConfirmation={closeArchiveConfirmation}
          />
        )}
        {isOpenDeleteConfirmation && (
          <DeleteConfirm
            onConfirmClickHandler={confirmDeleteHandler}
            closeDeleteConfirmation={closeDeleteConfirmation}
          />
        )}
        {isOpenStatistic && <Statistic closeStatistic={closeStatistic} />}

        {rejectReason ? (
          <Note
            text={rejectReason}
            type="error"
            actionType="resend"
            actionClick={() => onClickEditCar(url)}
          />
        ) : null}
      </Wrapper>
    </ComponentThemeProvider>
  )
}

export default CarCardList
