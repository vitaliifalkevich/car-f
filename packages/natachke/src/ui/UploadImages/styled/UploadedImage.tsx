import React, { useCallback } from 'react'
import styled from 'styled-components'
import check from 'assets/icons/check.svg'
import whiteTrash from 'assets/icons/whiteTrash.svg'
import { useTranslation } from 'react-i18next'

const Container = styled.div<{ image: string; isActive: boolean }>`
  background: url(${({ image }) => image}) center center no-repeat;
  width: 115px;
  height: 105px;
  border-radius: 8px;
  position: relative;
  background-size: cover;
  cursor: ${({ isActive }) => (isActive ? 'default' : 'pointer')};
  &:hover {
    .darkMask {
      opacity: ${({ isActive }) => (isActive ? '0' : '1')};
    }
    & > div:not(div.darkMask) {
      opacity: 1 !important;
    }
  }
`

const DarkMask = styled.div`
  background: ${({ theme }) => theme.colors.darkMask};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: 0.5s opacity;
`

const LabelDefault = styled.div<{ isActive?: boolean }>`
  background: ${({ theme, isActive }) =>
    isActive ? theme.colors.activeLabelBackground : theme.colors.defaultLabel};
  height: 18px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  bottom: 0;
  border-radius: 0 0 8px 8px;
  transition: 0.3s all;
  z-index: ${({ isActive }) => (isActive ? '10' : '1')};

  img {
    margin-right: 5px;
    width: 14px;
  }
`

const Text = styled.div`
  font-size: 11px;
  line-height: 14px;
  font-family: ${({ theme }) => theme.fonts.ralewayBold};
  color: ${({ theme }) => theme.colors.textColor};
`

const Delete = styled.div`
  background: ${({ theme }) => theme.colors.deleteBackground};
  border-radius: 0px 8px 0px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  width: 30px;
  height: 27px;
  z-index: 1;
  transition: transform 0.5s;
  img {
    transition: transform 0.3s;
  }
  &:hover {
    img {
      transform: scale(1.2);
    }
  }
`

export default ({ image, isDefault, setDefault, removeImage }) => {
  const setDefaultClickHandle = useCallback(
    e => {
      if (!e.target.closest('.delete-image')) setDefault()
    },
    [setDefault],
  )
  const { t } = useTranslation()
  return (
    <Container
      image={image}
      isActive={isDefault}
      onClick={setDefaultClickHandle}
    >
      {isDefault && (
        <LabelDefault isActive={true}>
          <img src={check} alt="check" />
          <Text>{t('mainPhoto')}</Text>
        </LabelDefault>
      )}
      <LabelDefault style={{ opacity: '0' }}>
        <Text>{t('makeMainPhoto')}</Text>
      </LabelDefault>
      <Delete className="delete-image" onClick={removeImage}>
        <img src={whiteTrash} alt="delete" />
      </Delete>
      <DarkMask className="darkMask" />
    </Container>
  )
}
