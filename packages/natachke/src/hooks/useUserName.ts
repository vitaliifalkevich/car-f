import { useTranslation } from 'react-i18next'

export const useUserName = () => {
  const { t } = useTranslation()
  return (name?: string | null): string => (name ? name : t('user'))
}
