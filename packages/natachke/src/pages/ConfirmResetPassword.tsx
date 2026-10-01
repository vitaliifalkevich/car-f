import React from 'react'
import SetupNewPassword from 'features/PopUps/SetupNewPassword'
import { useQuery } from '../routes'
import Error404 from './Error404'

const ConfirmResetPassword: React.FC = () => {
  const queries = useQuery()

  const confirmationToken = queries.get('token')
  if (!confirmationToken) return <Error404 />
  return (
    <>
      <div style={{ height: '100vh' }}>
        <SetupNewPassword />
      </div>
    </>
  )
}

export default ConfirmResetPassword
