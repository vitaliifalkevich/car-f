import React from 'react'
import styled from 'styled-components'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import { useTranslation } from 'react-i18next'
import { format } from 'date-fns'

const Text = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
  color: ${({ theme }) => theme.colors.textColor};
`

const PublishedAt: React.FC<{ date?: Date }> = ({ date }) => {
  const { t } = useTranslation()
  return (
    <ComponentThemeProvider themes={themes}>
      <>
        {date && (
          <Text>{t('publishedAt') + ': ' + format(date, 'dd.MM.yyyy')}</Text>
        )}
      </>
    </ComponentThemeProvider>
  )
}

export default PublishedAt
