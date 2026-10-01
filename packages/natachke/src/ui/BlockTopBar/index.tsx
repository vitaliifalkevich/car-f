import React from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import SecondaryButton from 'ui/SecondaryButton'
import { Container, BadgeWrapper, Title } from './styled'
import longArrow from 'assets/icons/longArrow.svg'
import { useTranslation } from 'react-i18next'
import { useBreakpoint } from '../../MediaQueriesProvider'

interface BlockTopBarProps {
  title: string | React.ReactNode
  badge?: React.ReactNode
  action?: () => void
  hideAction?: boolean
}

const BlockTopBar: React.FC<BlockTopBarProps> = ({
  title,
  badge,
  action,
  hideAction = false,
}) => {
  const { t } = useTranslation()
  const breakpoints = useBreakpoint()
  return (
    <ComponentThemeProvider themes={themes}>
      <Container>
        <div>
          <Title>{title}</Title>
          <BadgeWrapper>{badge}</BadgeWrapper>
        </div>
        {!hideAction && (
          <div>
            <SecondaryButton
              icon={longArrow}
              iconPosition="right"
              onClick={action}
            >
              {!breakpoints.mobile ? t('viewAll') : t('viewAllMobile')}
            </SecondaryButton>
          </div>
        )}
      </Container>
    </ComponentThemeProvider>
  )
}

export default BlockTopBar
