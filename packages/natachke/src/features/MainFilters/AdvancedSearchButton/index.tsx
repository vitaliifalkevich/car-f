import React, { useCallback } from 'react'
import MainButton from 'ui/MainButton'
import { useTranslation } from 'react-i18next'
import { prepareQueries } from 'routes'
import { prepareObjectForQueries } from 'utils'
import { useNavigateAdvancedSearch } from 'hooks'
import { useFormState } from 'react-final-form'

const AdvancedSearchButton: React.FC = () => {
  const { t } = useTranslation()
  const navigateToAdvancedSearch = useNavigateAdvancedSearch()
  const formState = useFormState()
  const advancedSearchHandler = useCallback(() => {
    navigateToAdvancedSearch(
      prepareQueries(prepareObjectForQueries(formState.values)),
    )
  }, [formState, navigateToAdvancedSearch])
  return (
    <MainButton type="button" color="grey" onClick={advancedSearchHandler}>
      {t('advancedSearch')}
    </MainButton>
  )
}

export default AdvancedSearchButton
