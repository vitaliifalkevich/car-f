import React, { useCallback } from 'react'
import { Container } from './styled'
import MainButton from 'ui/MainButton'
import { useTranslation } from 'react-i18next'
import greyLeftLongArrow from 'assets/icons/greyLeftLongArrow.svg'
import greyRightLongArrow from 'assets/icons/greyRightLongArrow.svg'
import { useBreakpoint } from 'MediaQueriesProvider'
import { useGenerateUrlWithLang } from 'hooks'
import { useSelector } from 'react-redux'
import {
  getCarInSearchNavigation,
  getPrevSearchUrl,
} from 'entities/Search/selectors'
import { useHistory } from 'react-router-dom'

const CarTopNavigation: React.FC<{ carUrl?: string }> = ({ carUrl }) => {
  const { t } = useTranslation()
  const breakpoints = useBreakpoint()
  const generateUrlWithLang = useGenerateUrlWithLang()
  const carInSearchByIndex = useSelector(getCarInSearchNavigation(carUrl))
  const carPrevSearchUrl = useSelector(getPrevSearchUrl)
  const history = useHistory()

  const backButtonHandler = useCallback(() => {
    if (carPrevSearchUrl) history.push(carPrevSearchUrl)
    else history.push(generateUrlWithLang('/search'))
  }, [carPrevSearchUrl, generateUrlWithLang, history])

  const nextCarHandler = useCallback(() => {
    if (!carInSearchByIndex || !carInSearchByIndex?.next) return null

    history.push(generateUrlWithLang(`/cars/${carInSearchByIndex?.next}`))
  }, [carInSearchByIndex, generateUrlWithLang, history])

  return (
    <Container>
      <MainButton
        color="grey"
        icon={greyLeftLongArrow}
        iconPosition="left"
        onClick={backButtonHandler}
      >
        {!breakpoints.mobile ? t('backToSearch') : t('backToSearchMobile')}
      </MainButton>

      {carInSearchByIndex?.next ? (
        <MainButton
          color="grey"
          icon={greyRightLongArrow}
          iconPosition="right"
          onClick={nextCarHandler}
        >
          {!breakpoints.mobile ? t('nextAd') : t('nextAdMobile')}
        </MainButton>
      ) : null}
    </Container>
  )
}

export default CarTopNavigation
