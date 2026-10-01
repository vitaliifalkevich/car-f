import React from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import { Container, Text, User, UserName, Location } from './styled'
import { useSelector } from 'react-redux'
import { getUserProfile } from 'entities/Bootstrap/selectors'
import { useUserName } from 'hooks'

const UserInfo: React.FC = () => {
  const user = useSelector(getUserProfile)
  const getUserName = useUserName()
  return (
    <ComponentThemeProvider themes={themes}>
      <Container>
        <div>
          <User />
          <div>
            <Text>ID: {user?.id}</Text>
            <UserName>{getUserName(user?.first_name)}</UserName>
          </div>
        </div>
        {user?.city && <Location city={user.city} />}
      </Container>
    </ComponentThemeProvider>
  )
}

export default UserInfo
