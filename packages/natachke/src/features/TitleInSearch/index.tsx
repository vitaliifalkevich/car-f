import React, { useMemo } from 'react'
import { PageTitle } from 'ui/Text'
import { useTranslation } from 'react-i18next'
import { useFormState } from 'react-final-form'
import TopCatalogLink from 'ui/TopCatalogLink'
import { env } from '../../config'

const TitleInSearch: React.FC = () => {
  const { t } = useTranslation()

  const formState = useFormState()
  const title = useMemo(() => {
    let result = ''
    if (formState.values?.brand?.label) result += formState.values?.brand?.label
    if (formState.values?.model) {
      if (formState.values?.model.length > 1) {
        result += ' ( '
        formState.values?.model?.forEach((model, idx) => {
          if (idx > 0 && idx < formState.values?.model.length) result += ', '
          result += model?.label
        })
        result += ' )'
      }
      if (formState.values?.model.length === 1)
        result += ' ' + formState.values?.model?.[0]?.label || ''
    }
    if (formState.values?.year?.from && formState.values?.year?.to) {
      result +=
        ' ' +
          formState.values?.year?.from?.label +
          ' - ' +
          formState.values?.year?.to?.label || ''
    } else if (formState.values?.year?.from) {
      result +=
        ' ' +
          t('from').toLowerCase() +
          ' ' +
          formState.values?.year?.from?.label || ''
    } else if (formState.values?.year?.to) {
      result +=
        ' ' + t('to').toLowerCase() + ' ' + formState.values?.year?.to?.label ||
        ''
    }

    return result
  }, [formState.values, t])
  return (
    <PageTitle>
      {t(`searchTitle`)} {title}
      {env.topCatalogServiceEnabled && <TopCatalogLink />}
    </PageTitle>
  )
}

export default TitleInSearch

// AUDI A8 2015 - 2020
