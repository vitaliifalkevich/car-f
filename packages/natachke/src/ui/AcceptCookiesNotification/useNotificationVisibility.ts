import { useMemo, useState } from 'react'
import Lockr from 'lockr'

const ACCEPT_COOKIES = 'accept_cookies'

export const useNotificationVisibility = () => {
  const [isCookiesAccepted, setCookiesAccepted] = useState(
    Lockr.get(ACCEPT_COOKIES),
  )
  return useMemo(() => {
    return {
      acceptCookiesHandler: () => {
        Lockr.set(ACCEPT_COOKIES, true)
        setCookiesAccepted(true)
      },
      isCookiesAccepted,
    }
  }, [isCookiesAccepted])
}
