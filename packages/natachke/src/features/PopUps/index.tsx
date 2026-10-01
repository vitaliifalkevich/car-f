import React, { Suspense } from 'react'
import { useHistory } from 'react-router-dom'
import {
  LogIn,
  SignUp,
  Welcome,
  EmailConfirmed,
  ResetPassword,
  MobileUserMenu,
  CloseAccountConfirmation,
} from './imports'
import {
  SIGN_IN_HASH,
  SIGN_UP_HASH,
  WELCOME,
  EMAIL_CONFIRMED,
  RESET_PASSWORD,
  USER_MENU,
  CLOSE_ACCOUNT_CONFIRMATION,
  DEPOSIT_INFO,
} from './constants'

const PopUp: React.FC = () => {
  const history = useHistory()
  const { hash } = history.location

  return (
    <>
      <Suspense fallback={false}>{hash === SIGN_IN_HASH && <LogIn />}</Suspense>
      <Suspense fallback={false}>
        {hash === SIGN_UP_HASH && <SignUp />}
      </Suspense>
      <Suspense fallback={false}>{hash === WELCOME && <Welcome />}</Suspense>
      <Suspense fallback={false}>
        {hash === EMAIL_CONFIRMED && <EmailConfirmed />}
      </Suspense>
      <Suspense fallback={false}>
        {hash === RESET_PASSWORD && <ResetPassword />}
      </Suspense>
      <Suspense fallback={false}>
        {hash === USER_MENU && <MobileUserMenu />}
      </Suspense>
      <Suspense fallback={false}>
        {hash === CLOSE_ACCOUNT_CONFIRMATION && <CloseAccountConfirmation />}
      </Suspense>
    </>
  )
}
export default React.memo(PopUp)
