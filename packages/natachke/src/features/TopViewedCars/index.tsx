import React from 'react'
import BlockTopBar from 'ui/BlockTopBar'
import { useTranslation, Trans } from 'react-i18next'
import { Container } from './styled'
import { SimpleSlider } from 'ui/Sliders'
import { MainContainer } from 'ui/Containers'
import { useSelector } from 'react-redux'
import { getMostViewedCars } from 'entities/HomeCars/selectors'

const TopViewedCars: React.FC = () => {
  const { t } = useTranslation()
  const mostViewedCars = useSelector(getMostViewedCars)

  return (
    <section>
      <MainContainer>
        <Container>
          <BlockTopBar
            title={<Trans>{t('topViewedCars')}</Trans>}
            hideAction={true}
          />
          <SimpleSlider cars={mostViewedCars} />
        </Container>
      </MainContainer>
    </section>
  )
}

export default TopViewedCars
