import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import dropdownSelect from 'assets/icons/dropdownSelect.svg'

const Container = styled.div`
  display: flex;
  cursor: pointer;
  margin-top: -10px;
  align-items: center;
  margin-bottom: 12px;
`

const Text = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
  color: ${({ theme }) => theme.colors.textColor};
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`

const Icon = styled.img<{ isOpen: boolean }>`
  ${({ isOpen }) => isOpen && 'transform: rotate(180deg);'}
  margin-left: 5px;
`

export default ({ isOpen, onClick }) => {
  const { t } = useTranslation()
  return (
    <Container onClick={onClick}>
      <Text>{isOpen ? t('collapse') : t('readMore')}</Text>
      <Icon isOpen={isOpen} src={dropdownSelect} alt="select" />
    </Container>
  )
}
