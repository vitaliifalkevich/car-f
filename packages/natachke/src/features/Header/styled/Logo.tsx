import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useGenerateUrlWithLang } from 'hooks'

const Logo = styled.img`
  cursor: pointer;
  width: 85px;
`

export default () => {
  const generateUrlWithLang = useGenerateUrlWithLang()
  return (
    <Link to={generateUrlWithLang('/')}>
      <Logo src="/logo.svg" alt="logo" />
    </Link>
  )
}
