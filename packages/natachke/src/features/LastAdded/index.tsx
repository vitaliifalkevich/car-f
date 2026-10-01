import React, { useCallback } from 'react'
import BlockTopBar from 'ui/BlockTopBar'
import { useTranslation } from 'react-i18next'
import { Container } from './styled'
import { LastAddedSlider } from 'ui/Sliders'
import { MainContainer } from 'ui/Containers'
import { useSelector } from 'react-redux'
import { getLatestCars } from 'entities/HomeCars/selectors'
import { prepareQueries } from '../../routes'
import { prepareObjectForQueries } from 'utils'
import { useNavigateSearch } from 'hooks'
import { SearchCarsPayloadSortEnum } from '@handber/natachke-api-client'
import { gtagEvent, GtagEvents } from '../../analytics'

const LastAdded: React.FC = () => {
  const { t } = useTranslation()
  const navigateToSearch = useNavigateSearch()
  const latestCars = useSelector(getLatestCars)

  const navigateSearchLastCars = useCallback(() => {
    navigateToSearch(
      prepareQueries(
        prepareObjectForQueries({ sort: SearchCarsPayloadSortEnum.AddingLast }),
      ),
    )
    //send analytics event
    gtagEvent(GtagEvents.PRESS_LAST_ADDED_BTN_HOME)
  }, [navigateToSearch])

  return (
    <section>
      <Container>
        <MainContainer>
          <BlockTopBar title={t('lastAdded')} action={navigateSearchLastCars} />
        </MainContainer>
        <LastAddedSlider cars={latestCars} />
      </Container>
    </section>
  )
}

export default LastAdded
