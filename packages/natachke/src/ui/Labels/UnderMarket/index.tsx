import React from 'react'
import ReactTooltip from 'react-tooltip'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import { Container } from './styled'
import styled from 'styled-components'
import underMarket from 'assets/icons/underMarket.svg'
import { useTranslation } from 'react-i18next'

const UnderMarket = styled.img<{ size?: 'sm' | 'md' }>`
  width: ${({ size = 'sm' }) => {
    switch (size) {
      case 'md':
        return '26px'
      case 'sm':
        return '24px'
    }
  }};
  height: ${({ size = 'sm' }) => {
    switch (size) {
      case 'md':
        return '20px'
      case 'sm':
        return '14px'
    }
  }};
`

const TooltipText = styled.span`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.ralewaySemibold};
  color: ${({ theme }) => theme.colors.textColor};
`

export default ({ size = 'sm' }: { size?: 'sm' | 'md' }) => {
  const { t } = useTranslation()
  return (
    <ComponentThemeProvider themes={themes}>
      <Container>
        <UnderMarket
          src={underMarket}
          alt="under market icon"
          data-for="under-market"
          data-tip={t('lowPriceDescription')}
          size={size}
        />
        <ReactTooltip id="under-market" place="right" backgroundColor="#EEEDED">
          <TooltipText>{t('lowPriceDescription')}</TooltipText>
        </ReactTooltip>
      </Container>
    </ComponentThemeProvider>
  )
}
