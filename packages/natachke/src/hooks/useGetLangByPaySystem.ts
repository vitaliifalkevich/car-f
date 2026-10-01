import { useSelector } from 'react-redux'
import { getLanguage } from 'entities/Bootstrap/selectors'
import { useCallback } from 'react'
import { langByPaySystem } from 'config'

export const useGetLangByPaySystem = () => {
  const currentLanguage = useSelector(getLanguage)

  return useCallback(
    (merchant: string) => {
      return langByPaySystem?.[merchant]?.[currentLanguage] || currentLanguage
    },
    [currentLanguage],
  )
}
