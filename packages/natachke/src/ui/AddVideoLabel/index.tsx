import React from 'react'
import styled from 'styled-components'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import video from 'assets/icons/video.svg'
import { useTranslation } from 'react-i18next'

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Icon = styled.img`
  margin-right: 8px;
  width: 20px;
`

const Text = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
  font-size: 16px;
  line-height: 18px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.textColor};
  cursor: pointer;
`

const AddVideoLabel: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const { t } = useTranslation()
  return (
    <ComponentThemeProvider themes={themes}>
      <Container onClick={onClick}>
        <Icon src={video} alt="video" />
        <Text>{`${t('addVideo')} +`}</Text>
      </Container>
    </ComponentThemeProvider>
  )
}

export default AddVideoLabel
