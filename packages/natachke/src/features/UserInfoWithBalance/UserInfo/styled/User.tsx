import React from 'react'
import styled from 'styled-components'
import sellerIcon from 'assets/icons/sellerIcon.svg'
import { getImageUrl } from 'utils'
import { useSelector } from 'react-redux'
import { getUserProfile } from 'entities/Bootstrap/selectors'

const User = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 10px;
  border-radius: 50%;
`

export default () => {
  const userData = useSelector(getUserProfile)

  return (
    <User src={userData?.avatar ? getImageUrl(userData.avatar) : sellerIcon} />
  )
}
