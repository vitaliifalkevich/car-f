import React from 'react'
import Error404Content from 'features/Error404Content'
import { matchPath, Redirect, useHistory } from 'react-router-dom'
import { SIGN_IN_HASH } from 'features/PopUps/constants'
import { accountRoute } from '../routes'

const Error404Login: React.FC = () => {
  const history = useHistory()
  const { pathname, search, hash } = history.location

  const matchAccountPages = matchPath(pathname, {
    path: accountRoute,
    exact: false,
    strict: false,
  })

  if (!hash && matchAccountPages)
    return <Redirect to={pathname + search + SIGN_IN_HASH} />

  return <Error404Content />
}

export default Error404Login
