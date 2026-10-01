import React, { useCallback } from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import BlockTopBar from 'ui/BlockTopBar'
import { useTranslation } from 'react-i18next'
import { Wrapper, Container } from './styled'
import { TrueCar } from 'ui/Badges'
import { TrueCarSlider } from 'ui/Sliders'
import themes from './themes'
import { useSelector } from 'react-redux'
import { getTrueCars } from 'entities/HomeCars/selectors'
import { prepareQueries } from '../../routes'
import { prepareObjectForQueries } from '../../utils'
import { useNavigateSearch } from 'hooks'
import { gtagEvent, GtagEvents } from '../../analytics'

const TrueCars: React.FC = () => {
  const { t } = useTranslation()
  const navigateToSearch = useNavigateSearch()

  const navigateTrueCarsSearch = useCallback(() => {
    navigateToSearch(
      prepareQueries(
        prepareObjectForQueries({
          true_car: 'true',
        }),
      ),
    )
    //send analytics event
    gtagEvent(GtagEvents.PRESS_TRUE_CAR_BTN_HOME)
  }, [navigateToSearch])
  const trueCars = useSelector(getTrueCars)

  return (
    <section>
      <ComponentThemeProvider themes={themes}>
        <Wrapper>
          <Container>
            <div>
              <BlockTopBar
                title={t('trueCar')}
                badge={<TrueCar size="lg" />}
                action={navigateTrueCarsSearch}
              />
              <TrueCarSlider cars={trueCars} />
            </div>
          </Container>
        </Wrapper>
      </ComponentThemeProvider>
    </section>
  )
}

export default TrueCars
