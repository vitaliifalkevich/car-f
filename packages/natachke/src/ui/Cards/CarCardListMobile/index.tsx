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
  Wrapper,
  TitleContainer,
  AddNoteContainer,
  MakeNoteFormContainer,
} from './styled'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from '../themes'
import { Top50, TrueCar } from 'ui/Badges'
import { useTranslation } from 'react-i18next'
import mileageIcon from 'assets/icons/mileage.svg'
import locationIcon from 'assets/icons/location.svg'
import fuelIcon from 'assets/icons/fuel.svg'
import transmissionIcon from 'assets/icons/transmission.svg'
import Favorite from 'features/Favorite'
import { useBreakpoint } from 'MediaQueriesProvider'
import { TopSearch } from 'ui/Labels'
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
  PhoneViewsCount,
  PlaceTopCatalog,
  PushTop,
  StatisticInfo,
  ViewsCount,
  MakeNoteButton,
  Delete,
  Publish,
} from '../../AdActions'
import { MobileContainer } from 'features/InfoCarDetails/Actions/styled'
import ArchiveConfirm from 'features/PopUps/ArchiveConfirm'
import DeleteConfirm from 'features/PopUps/DeleteConfirm'
import Statistic from 'features/PopUps/Statistic'
import Note from '../../Note'
import { MakeNote } from 'ui/Forms'
import { IMyCar, MY_CAR_CATEGORY } from 'entities/MyCars/types'
import { generateCarTitle } from 'utils'
import { actions } from 'entities/MyCars/slice'
import { actions as noteActions } from 'entities/Notes/slice'
import {
  ChangeCarStatusPayloadStatusEnum,
  UserServiceTypeEnum,
} from '@handber/natachke-api-client'
import { useDispatch, useSelector } from 'react-redux'
import { IFavoriteCar } from 'entities/Favorites/types'
import { getCarNoteByUrl } from 'entities/Notes/selectors'
import useCarNavigateSearchData from '../useCarNavigateSearchData'

export type CarCardListProps = (IMyCar | IFavoriteCar) & {
  withButton?: boolean
  withActions?: boolean
  viewCount?: number
  phoneCount?: number
  rejectReason?: string | null
  withMakeNote?: boolean
  isTrueCar: boolean
  isTopCar: boolean
  isTopSearchCar?: boolean
  isNotActive?: boolean
  hideFavorite?: boolean
}

const CarCardListMobile: React.FC<CarCardListProps> = ({
  defaultImage,
  brand,
  model,
  year,
  mileage,
  price,
  id,
  transmission,
  engine_type,
  isTrueCar,
  isTopCar,
  isTopSearchCar,
  region,
  shortDescription,
  withActions,
  viewCount,
  phoneCount,
  rejectReason,
  withMakeNote = false,
  url,
  isNotActive = false,
  hideFavorite,
  ...props
}) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const formatPrice = useFormatPrice()
  const getRegion = useRegion()
  const generateUrlWithLang = useGenerateUrlWithLang()
  const breakpoints = useBreakpoint()
  const onClickNavigateTopInSearch = useNavigateTopInSearch()
  const onClickNavigatePlaceInTopCatalog = useNavigateCarInTopCatalog()
  const onClickEditCar = useNavigateEditCar()
  const [showMakeNote, setMakeNote] = useState(false)
  const carNote = useSelector(getCarNoteByUrl(url))
  const navigateSearchData = useCarNavigateSearchData()

  const [isOpenStatistic, setOpenStatistic] = useState(false)

  const closeStatistic = useCallback(() => {
    setOpenStatistic(false)
  }, [])

  const [isOpenArchiveConfirmation, setOpenArchiveConfirmation] = useState(
    false,
  )
  const closeArchiveConfirmation = useCallback(() => {
    setOpenArchiveConfirmation(false)
  }, [setOpenArchiveConfirmation])

  const [isOpenDeleteConfirmation, setOpenDeleteConfirmation] = useState(false)
  const closeDeleteConfirmation = useCallback(() => {
    setOpenDeleteConfirmation(false)
  }, [setOpenDeleteConfirmation])

  const deleteNoteAction = useCallback(() => {
    if (url) dispatch(noteActions.deleteNote({ carUrl: url }))
  }, [dispatch, url])

  const toggleNote = useCallback(() => {
    setMakeNote(!showMakeNote)
  }, [showMakeNote])

  const closeNote = useCallback(() => {
    setMakeNote(false)
  }, [])

  const confirmArchiveHandler = useCallback(() => {
    closeArchiveConfirmation()
    if (!id) return
    dispatch(
      actions.startChangeCarVisibleStatus({
        carId: id,
        status: ChangeCarStatusPayloadStatusEnum.Archive,
      }),
    )
  }, [closeArchiveConfirmation, id, dispatch])

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
      <Wrapper isTopSearchCar={isTopSearchCar}>
        <Row>
          <TitleContainer>
            <Title>
              <Link
                onClick={navigateSearchData}
                to={generateUrlWithLang(`/cars/${url}`)}
              >
                {generateCarTitle(brand?.name, model?.name, year)}{' '}
              </Link>
            </Title>

            {isTrueCar && (
              <TrueCarWrapper>
                <TrueCar size="sm" tooltip={t('trueCarTooltip')} />
              </TrueCarWrapper>
            )}
            {isTopCar && <Top50 size="sm" tooltip={t('topCarTooltip')} />}
          </TitleContainer>
        </Row>
        {price && (
          <Row>
            <Price>{formatPrice({ price })}</Price>
            {isTopSearchCar && <TopSearch />}
          </Row>
        )}

        <TechContainer>
          <div>
            <TechIcon src={mileageIcon} alt="mileage" />
            <TechText>
              {mileage} {t('mileageUnits')}
            </TechText>
          </div>
          {region?.region_code && (
            <div>
              <TechIcon src={locationIcon} alt="location" />
              <TechText>{getRegion(region.region_code)}</TechText>
            </div>
          )}

          {engine_type?.value && (
            <div>
              <TechIcon src={fuelIcon} alt="fuel" />
              <TechText>{t(`fuelOptions.${engine_type?.value}`)}</TechText>
            </div>
          )}

          {transmission?.value && (
            <div>
              <TransmissionIcon src={transmissionIcon} alt="transmission" />
              <TechText>
                {t(`transmissionOptions.${transmission?.value}`)}
              </TechText>
            </div>
          )}
        </TechContainer>
        <Container>
          <Link
            onClick={navigateSearchData}
            to={generateUrlWithLang(`/cars/${url}`)}
          >
            <Image
              src={defaultImage}
              alt={generateCarTitle(brand?.name, model?.name, year)}
            />
          </Link>
          <div>
            {!breakpoints.tablet && !breakpoints.mobile && (
              <Row>
                <Description>{shortDescription}</Description>
                {!hideFavorite && id ? <Favorite carId={id} /> : null}
              </Row>
            )}
          </div>
        </Container>
        {(breakpoints.tablet || breakpoints.mobile) && (
          <Row>
            <Description>{parse(shortDescription)}</Description>
            {!withMakeNote && !hideFavorite && id ? (
              <Favorite carId={id} />
            ) : null}
          </Row>
        )}
        {withActions && (
          <>
            <MobileContainer>
              <div>
                {id && (
                  <StatisticInfo
                    setOpenStatistic={setOpenStatistic}
                    carId={id}
                  />
                )}

                <ViewsCount viewCount={Number(viewCount)} />
                <PhoneViewsCount phoneCount={Number(phoneCount)} />
              </div>

              <div>
                {'visible_status' in props &&
                props?.visible_status?.value === MY_CAR_CATEGORY.ARCHIVE ? (
                  <Publish publishHandler={setPublishHandler} />
                ) : null}

                <Edit onClickEditCar={() => onClickEditCar(url)} />
                {'visible_status' in props &&
                props?.visible_status?.value === MY_CAR_CATEGORY.ARCHIVE ? (
                  <Delete
                    setOpenDeleteConfirmation={setOpenDeleteConfirmation}
                  />
                ) : (
                  <Archive
                    setOpenArchiveConfirmation={setOpenArchiveConfirmation}
                  />
                )}
              </div>
            </MobileContainer>
          </>
        )}
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
        {withMakeNote && (
          <AddNoteContainer>
            {!showMakeNote ? (
              <MakeNoteButton
                toggleNote={toggleNote}
                carNote={carNote?.message}
              />
            ) : (
              <div />
            )}

            {!hideFavorite && id && <Favorite carId={id} />}
          </AddNoteContainer>
        )}
        {showMakeNote && url && id && (
          <MakeNoteFormContainer>
            <MakeNote
              showDisclaimer={false}
              carUrl={url}
              onCloseNote={closeNote}
              carId={id}
            />
          </MakeNoteFormContainer>
        )}
        {carNote?.message && !showMakeNote && withMakeNote ? (
          <Note
            text={carNote?.message || ''}
            type="warning"
            actionClick={deleteNoteAction}
            actionType="deleteNote"
          />
        ) : null}
        {rejectReason ? (
          <Note
            text={rejectReason || ''}
            type="error"
            actionType="resend"
            actionClick={() => onClickEditCar(url)}
          />
        ) : null}
      </Wrapper>
    </ComponentThemeProvider>
  )
}

export default CarCardListMobile
