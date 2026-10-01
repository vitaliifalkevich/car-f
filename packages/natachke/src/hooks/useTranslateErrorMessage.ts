import { useTranslation } from 'react-i18next'
import { useCallback } from 'react'

export const useTranslateErrorMessage = () => {
  const { t } = useTranslation('apiErrors', { useSuspense: false })
  return useCallback(key => t(`${key}`), [t])
}
