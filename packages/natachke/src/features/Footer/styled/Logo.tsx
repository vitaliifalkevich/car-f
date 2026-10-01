import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useNavigateWithLang } from 'hooks'

const Logo = styled.img`
  cursor: pointer;
  max-width: 70px;
`

export default () => {
  const navigate = useNavigateWithLang()
  const onClickLogo = useCallback(() => {
    navigate('/')
  }, [navigate])

  return <Logo onClick={onClickLogo} src="/logo-footer.svg" alt="logo" />
}
