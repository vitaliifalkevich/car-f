import React from 'react'
import { Location, Text, User, UserContainer, UserName } from './styled'
import { useSelector } from 'react-redux'
import { getUserProfile } from 'entities/Bootstrap/selectors'
import { useUserName } from 'hooks'

const UserInfo: React.FC = () => {
  const user = useSelector(getUserProfile)
  const getUsername = useUserName()
  return (
    <UserContainer>
      <User />
      <div>
        <Text>ID: {user?.id}</Text>
        <UserName>{getUsername(user?.first_name)}</UserName>
      </div>
      {user?.city && <Location city={user?.city} />}
    </UserContainer>
  )
}

export default UserInfo
