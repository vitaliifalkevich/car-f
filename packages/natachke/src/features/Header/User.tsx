import React, { useCallback } from 'react'
import styled from 'styled-components'
import { media } from 'styles/media'
import user from 'assets/icons/user.svg'
import { useTranslation } from 'react-i18next'
import { useBreakpoint } from '../../MediaQueriesProvider'
import { useSignInUrl, useProfileUrl } from 'hooks'
import { Link } from 'react-router-dom'
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
    margin-right: 17px;
  `}
  ${media.mobile`
    margin-right: 12px;
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

const User: React.FC = () => {
  const isAuth = useSelector(getIsAuthorized)
  const { t } = useTranslation()
  const breakpoints = useBreakpoint()
  const signInUrl = useSignInUrl()
  const profileUrl = useProfileUrl()

  const url = useCallback(() => {
    if (isAuth) return profileUrl
    return signInUrl
  }, [isAuth, profileUrl, signInUrl])

  return (
    <Link to={url}>
      <Container>
        <Icon src={user} alt="login icon" />
        {!breakpoints.mobile && !breakpoints.tablet && (
          <Text>{isAuth ? t('profile') : t('login')}</Text>
        )}
      </Container>
    </Link>
  )
}

export default User
