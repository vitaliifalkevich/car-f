import { useTranslation } from 'react-i18next'

export const useGenerateUrlWithLang = () => {
  const { i18n } = useTranslation()
  return originUrl => '/' + i18n.language + originUrl
}
