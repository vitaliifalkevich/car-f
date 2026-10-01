import React from 'react'
export const LogIn = React.lazy(() => import('features/PopUps/SignIn'))
export const SignUp = React.lazy(() => import('features/PopUps/SignUp'))
export const Welcome = React.lazy(() => import('features/PopUps/Welcome'))
export const EmailConfirmed = React.lazy(() =>
  import('features/PopUps/EmailConfirmed'),
)

export const ResetPassword = React.lazy(() =>
  import('features/PopUps/ResetPassword'),
)
export const MobileUserMenu = React.lazy(() =>
  import('features/PopUps/MobileUserMenu'),
)

export const CloseAccountConfirmation = React.lazy(() =>
  import('features/PopUps/CloseAccountConfirmation'),
)
