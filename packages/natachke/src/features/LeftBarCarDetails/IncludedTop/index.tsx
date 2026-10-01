import React from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { useGenerateUrlWithLang } from 'hooks'
import { Top50 } from 'ui/Badges'

const Container = styled.div`
  display: flex;
  align-items: center;
  a:hover {
    text-decoration: none;
  }
`

const Text = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
  color: ${({ theme }) => theme.colors.textColor};
`
const Top = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
  color: ${({ theme }) => theme.colors.topColor};
  margin: 0 3px;
`

const IncludedTop: React.FC = () => {
  const { t } = useTranslation()
  const generateUrlWithLang = useGenerateUrlWithLang()

  return (
    <ComponentThemeProvider themes={themes}>
      <Container>
        <Text>{t('includedTo') + ' '}</Text>
        <a href={generateUrlWithLang('/top-catalog')}>
          <Top>{t('topCars')}</Top>
        </a>
        <Top50 size="sm" tooltip={t('topCarTooltip')} />
      </Container>
    </ComponentThemeProvider>
  )
}

export default IncludedTop
