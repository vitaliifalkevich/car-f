import React from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import { Container } from './styled'
import UserInfo from './UserInfo'
import BalanceInfo from './BalanceInfo'
import { useBreakpoint } from 'MediaQueriesProvider'
import { env } from 'config'

const UserInfoWithBalance: React.FC = () => {
  const breakpoints = useBreakpoint()
  return (
    <ComponentThemeProvider themes={themes}>
      <Container>
        {!breakpoints.mobile && <UserInfo />}
        {env.paymentsEnabled && <BalanceInfo />}
      </Container>
    </ComponentThemeProvider>
  )
}

export default UserInfoWithBalance
