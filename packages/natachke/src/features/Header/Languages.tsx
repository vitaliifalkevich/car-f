import React, { useCallback, useMemo } from 'react'
import styled from 'styled-components'
import { useChangeLangNavigate } from 'hooks'
import { languages } from 'config'
import { useSelector } from 'react-redux'
import { getLanguage } from '../../entities/Bootstrap/selectors'

const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
  font-size: 14px;
  line-height: 36px;
  color: ${({ theme }) => theme.colors.textColor};
`

const Span = styled.span`
  cursor: pointer;
  margin: 0 5px;
  &:hover {
    text-decoration: underline;
    font-family: ${({ theme }) => theme.fonts.ralewaySemibold};
  }
`

const Languages: React.FC = () => {
  const changeLangNavigation = useChangeLangNavigate()
  const currentLanguage = useSelector(getLanguage)

  const filteredAvailableLanguages = useMemo(
    () =>
      Object.values(languages).filter(item => item.code !== currentLanguage),
    [currentLanguage],
  )

  const onChangeLanguage = useCallback(
    lng => {
      changeLangNavigation(lng)
    },
    [changeLangNavigation],
  )
  return (
    <Container>
      {filteredAvailableLanguages.map((lang, idx) => (
        <React.Fragment key={`lang_${lang.code}_${idx}`}>
          <Span
            onClick={() => {
              onChangeLanguage(lang.code)
            }}
          >
            {lang.code.toUpperCase()}
          </Span>
          {idx === 0 && <>\</>}
        </React.Fragment>
      ))}
    </Container>
  )
}

export default Languages
