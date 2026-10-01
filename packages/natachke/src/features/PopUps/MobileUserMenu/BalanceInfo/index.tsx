import React from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import { Row, Text, Balance, Container, BalanceContainer } from './styled'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getUserProfile } from 'entities/Bootstrap/selectors'
import SecondaryButton from 'ui/SecondaryButton'
import { useNavigateDeposit } from 'hooks'

const BalanceInfo: React.FC = () => {
  const { t } = useTranslation()
  const user = useSelector(getUserProfile)
  const depositClickHandler = useNavigateDeposit()
  return (
    <ComponentThemeProvider themes={themes}>
      <Container>
        <Row>
          <Text>{t('totalBalance')}:</Text>
          <BalanceContainer>
            {user?.balance && (
              <Balance>{`${Number(user?.balance).toFixed(2)} ${
                user?.currency
              }`}</Balance>
            )}
            <SecondaryButton color="blue" onClick={depositClickHandler}>
              {t('topUpBalance')}
            </SecondaryButton>
          </BalanceContainer>
        </Row>
      </Container>
    </ComponentThemeProvider>
  )
}

export default BalanceInfo
