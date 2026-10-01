import React, { useCallback, useState } from 'react'
import parse from 'react-html-parser'
import { Link } from 'react-router-dom'
import {
  CarInfoContainer,
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
  TitleContainer,
  Card,
  ActionsContainer,
  CardWrapper,
  MakeNoteWrapper,
  NoteWrapper,
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
import { useFormatPrice, useGenerateUrlWithLang, useRegion } from 'hooks'
import MakeNoteButton from '../../AdActions/MakeNoteButton'
import { MakeNote } from 'ui/Forms'
import Note from '../../Note'
import { UserInfoWithMessage } from 'ui/UserInfo'
import { IFavoriteCar } from 'entities/Favorites/types'
import { decodePhone, generateCarTitle } from 'utils'
import { useDispatch, useSelector } from 'react-redux'
import { getCarNoteByUrl } from 'entities/Notes/selectors'
import { actions } from 'entities/Notes/slice'

type CarFavoriteList = IFavoriteCar & {
  isTrueCar: boolean
  isTopCar: boolean
}

const CarFavoriteList: React.FC<CarFavoriteList> = ({
  defaultImage,
  brand,
  model,
  mileage,
  price,
  url,
  transmission,
  engine_type,
  isTrueCar,
  isTopCar,
  region,
  shortDescription,
  id,
  year,
  user,
}) => {
  const { t } = useTranslation()
  const getRegion = useRegion()
  const generateUrlWithLang = useGenerateUrlWithLang()
  const [showMakeNote, setMakeNote] = useState(false)
  const formatPrice = useFormatPrice()
  const carNote = useSelector(getCarNoteByUrl(url))
  const dispatch = useDispatch()

  const toggleNote = useCallback(() => {
    setMakeNote(!showMakeNote)
  }, [showMakeNote])

  const closeNote = useCallback(() => {
    setMakeNote(false)
  }, [])

  const deleteNoteAction = useCallback(() => {
    if (url) dispatch(actions.deleteNote({ carUrl: url }))
  }, [dispatch, url])

  return (
    <ComponentThemeProvider themes={themes}>
      <CardWrapper>
        <Card>
          <div>
            <CarInfoContainer>
              <div>
                <Link to={generateUrlWithLang(`/cars/${url}`)}>
                  <Image
                    src={defaultImage}
                    alt={generateCarTitle(brand?.name, model?.name, year)}
                  />
                </Link>
              </div>
              <div>
                <TitleWrapper>
                  <Row>
                    <TitleContainer>
                      <Title>
                        <Link to={generateUrlWithLang(`/cars/${url}`)}>
                          {generateCarTitle(brand?.name, model?.name, year)}{' '}
                        </Link>
                      </Title>
                      {isTrueCar && (
                        <TrueCarWrapper>
                          <TrueCar size="sm" tooltip={t('trueCarTooltip')} />
                        </TrueCarWrapper>
                      )}
                      {isTopCar && (
                        <Top50 size="sm" tooltip={t('topCarTooltip')} />
                      )}
                    </TitleContainer>
                  </Row>
                </TitleWrapper>
                {price && (
                  <Row>
                    <Price>{formatPrice({ price })}</Price>
                  </Row>
                )}
                <TechContainer>
                  <div>
                    <TechIcon src={mileageIcon} alt="mileage" />
                    <TechText>
                      {mileage} {t('mileageUnits')}
                    </TechText>
                  </div>
                  {engine_type?.value && (
                    <div>
                      <TechIcon src={fuelIcon} alt="fuel" />
                      <TechText>
                        {t(`fuelOptions.${engine_type?.value}`)}
                      </TechText>
                    </div>
                  )}
                  {transmission?.value && (
                    <div>
                      <TransmissionIcon
                        src={transmissionIcon}
                        alt="transmission"
                      />
                      <TechText>
                        {t(`transmissionOptions.${transmission?.value}`)}
                      </TechText>
                    </div>
                  )}
                  {region?.region_code && (
                    <div>
                      <TechIcon src={locationIcon} alt="location" />
                      <TechText>{getRegion(region.region_code)}</TechText>
                    </div>
                  )}
                </TechContainer>
              </div>
            </CarInfoContainer>
            <Row>
              <Description>{parse(shortDescription)}</Description>
            </Row>
          </div>
          <div>
            {(user?.first_name || user?.phone) && (
              <UserInfoWithMessage
                sellerId={user?.id}
                seller={`${user?.first_name || ''} ${user?.last_name || ''}`}
                region={user?.city || ''}
                avatar={user?.avatar}
                phoneNumber={decodePhone(user?.phone)}
              />
            )}

            <ActionsContainer>
              {!showMakeNote ? (
                <MakeNoteButton
                  toggleNote={toggleNote}
                  carNote={carNote?.message}
                />
              ) : (
                <div />
              )}

              {id && <Favorite carId={id} />}
            </ActionsContainer>
          </div>
        </Card>
        {showMakeNote && url && id && (
          <MakeNoteWrapper>
            <MakeNote carUrl={url} onCloseNote={closeNote} carId={id} />
          </MakeNoteWrapper>
        )}
        {carNote && !showMakeNote ? (
          <NoteWrapper>
            <Note
              text={carNote?.message}
              type="warning"
              actionClick={deleteNoteAction}
              actionType="deleteNote"
            />
          </NoteWrapper>
        ) : null}
      </CardWrapper>
    </ComponentThemeProvider>
  )
}

export default CarFavoriteList
