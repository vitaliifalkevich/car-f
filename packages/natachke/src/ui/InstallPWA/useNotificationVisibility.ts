import { useMemo, useState } from 'react'
import Lockr from 'lockr'

const CLOSE_INSTALL_APP = 'close_install_app'

export const useNotificationVisibility = () => {
  const [isInstallAppClosed, setInstallAppClosed] = useState(
    Lockr.get(CLOSE_INSTALL_APP),
  )
  return useMemo(() => {
    return {
      closeInstallAppHandler: () => {
        Lockr.set(CLOSE_INSTALL_APP, true)
        setInstallAppClosed(true)
      },
      isInstallAppClosed,
    }
  }, [isInstallAppClosed])
}
