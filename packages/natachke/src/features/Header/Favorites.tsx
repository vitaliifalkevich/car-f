import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { media } from 'styles/media'
import heart from 'assets/icons/heart.svg'
import { useTranslation } from 'react-i18next'
import { useBreakpoint } from '../../MediaQueriesProvider'
import { useFavoritesUrl, useSignUpUrl } from 'hooks'
import { useSelector } from 'react-redux'
import { getIsAuthorized } from '../../entities/Bootstrap/selectors'

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-right: 34px;
  cursor: pointer;
  &:hover > div {
    text-decoration: underline;
  }
  ${media.tablet` 
    margin-right: 20px;
  `}
  ${media.mobile`
    margin-right: 15px;
  `}
`

const Icon = styled.img`
  margin-right: 5px;
  margin-bottom: -3px;
`

const Text = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-family: ${({ theme }) => theme.fonts.ralewaySemibold};
  color: ${({ theme }) => theme.colors.textColor};
`

const Favorites: React.FC = () => {
  const { t } = useTranslation()
  const breakpoints = useBreakpoint()
  const isAuth = useSelector(getIsAuthorized)
  const signUpUrl = useSignUpUrl()
  const favoritesUrl = useFavoritesUrl()

  const url = useCallback(() => {
    if (isAuth) return favoritesUrl
    return signUpUrl
  }, [favoritesUrl, isAuth, signUpUrl])

  return (
    <Link to={url}>
      <Container>
        <Icon src={heart} alt="favorite icon" />
        {!breakpoints.mobile && !breakpoints.tablet && (
          <Text>{t('favorites')}</Text>
        )}
      </Container>
    </Link>
  )
}

export default Favorites
