import React from 'react'
import { Row, BigText, Balance, BalanceContainer } from './styled'
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
    <div>
      <Row>
        {user?.balance && (
          <>
            <BigText>{t('totalBalance')}:</BigText>
            <BalanceContainer>
              <Balance>{`${Number(user?.balance).toFixed(2)} ${
                user?.currency
              }`}</Balance>
              <SecondaryButton color="blue" onClick={depositClickHandler}>
                {t('topUpBalance')}
              </SecondaryButton>
            </BalanceContainer>
          </>
        )}
      </Row>
    </div>
  )
}

export default BalanceInfo
