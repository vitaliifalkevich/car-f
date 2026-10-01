import React from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import { useTranslation } from 'react-i18next'
import { Wrapper, Container, Icon, Text } from './styled'
import {
  useGenerateSortOptions,
  useNavigateAdvancedSearchWithCurrentSearch,
} from 'hooks'
import InputTextSelect from 'ui/Inputs/InputTextSelect'
import { useBreakpoint } from 'MediaQueriesProvider'
import MainButton from 'ui/MainButton'
import clarifySearch from 'assets/icons/filters/clarifySearch.svg'
import FieldChangeSubmit from '../LeftBarSearch/FieldChangeSubmit'

interface SortingProps {
  values: any
  handleSubmit: (value: any) => void
}

const Sorting: React.FC<SortingProps> = ({ values, handleSubmit }) => {
  const { t } = useTranslation()
  const breakpoints = useBreakpoint()
  const sortOptions = useGenerateSortOptions()
  const advancedSearchHandler = useNavigateAdvancedSearchWithCurrentSearch()

  return (
    <ComponentThemeProvider themes={themes}>
      <Wrapper>
        {breakpoints.mobile && (
          <MainButton
            color="grey"
            icon={clarifySearch}
            iconPosition="right"
            onClick={advancedSearchHandler}
          >
            {t('clarifySearch')}
          </MainButton>
        )}
        <Container>
          <Icon />
          {!breakpoints.mobile && <Text>{t('sorting')}</Text>}
          <FieldChangeSubmit
            name="sorting"
            Component={(input, onChangeHandler) => (
              <InputTextSelect
                {...input}
                defaultValue={sortOptions[0]}
                onChange={onChangeHandler}
                options={sortOptions}
              />
            )}
            values={values}
            handleSubmit={handleSubmit}
          />
        </Container>
      </Wrapper>
    </ComponentThemeProvider>
  )
}

export default Sorting
