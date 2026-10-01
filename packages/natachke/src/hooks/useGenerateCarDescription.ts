import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

interface GenerateCarDescription {
  brand?: string
  model?: string
  year?: string
  body?: string
}

const useGenerateCarDescription = () => {
  const { t } = useTranslation()
  return useCallback(
    (payload: GenerateCarDescription): string => {
      return t('descriptionTemplate', {
        brand: payload?.brand,
        model: payload?.model,
        year: payload?.year,
        body: t(`bodyTypeOptions.${payload?.body}`),
      })
    },
    [t],
  )
}

export default useGenerateCarDescription
