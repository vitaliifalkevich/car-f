import React from 'react'
import { PageTitle } from 'ui/Text'
import { MainContainer } from 'ui/Containers'
import { useTranslation } from 'react-i18next'
import AdvancedSearchForm from 'features/AdvancedSearchForm'

const AdvancedSearch: React.FC = () => {
  const { t } = useTranslation()
  return (
    <main>
      <MainContainer>
        <PageTitle withBorder={true}>{t(`advancedSearch`)}</PageTitle>
        <AdvancedSearchForm />
      </MainContainer>
    </main>
  )
}

export default AdvancedSearch
