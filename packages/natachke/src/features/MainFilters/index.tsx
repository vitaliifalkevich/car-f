import React, { useCallback, useMemo } from 'react'
import { Field, Form } from 'react-final-form'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import { ButtonGroupsWrapper, Container, Row, Wrapper } from './styled'
import Label from './Label'
import YearOfIssue from '../FormElements/YearOfIssue'
import PriceRange from '../FormElements/PriceRange'
import { useTranslation } from 'react-i18next'
import location from 'assets/icons/filters/location.svg'
import {
  useGenerateBodyTypeOptions,
  useGenerateSaleTypeOptions,
  useModelOptions,
  useNavigateSearch,
  useRegionOptions,
} from 'hooks'
import { ButtonsGroup, InputSelect } from 'ui/Inputs'
import MainButton from 'ui/MainButton'
import search from 'assets/icons/search.svg'
import ButtonsWrapper from './styled/ButtonsWrapper'
import { MainContainer } from 'ui/Containers'
import { useBreakpoint } from '../../MediaQueriesProvider'
import { useSelector } from 'react-redux'
import { getCarOptionsData } from 'entities/Car/selectors'
import BrandSelect from './BrandSelect'
import AdvancedSearchButton from './AdvancedSearchButton'
import { prepareQueries } from '../../routes'
import { prepareObjectForQueries } from 'utils'

const MainFilters: React.FC = () => {
  const { t } = useTranslation()
  const breakpoints = useBreakpoint()
  const carOptionsData = useSelector(getCarOptionsData)
  const navigateToSearch = useNavigateSearch()

  const saleTypeOptions = useGenerateSaleTypeOptions()
  const bodyTypeOptions = useGenerateBodyTypeOptions(carOptionsData?.bodyTypes)

  const regionOptions = useRegionOptions()
  const modelOptions = useModelOptions()
  const initialValues = useMemo(
    () => ({
      sale_type: saleTypeOptions[0].value,
      // body_type: bodyTypeOptions[0],
    }),
    [saleTypeOptions],
  )

  const onSaveClick = useCallback(
    values => {
      navigateToSearch(prepareQueries(prepareObjectForQueries(values)))
    },
    [navigateToSearch],
  )

  return (
    <ComponentThemeProvider themes={themes}>
      <MainContainer>
        <Wrapper>
          <Container>
            <Form
              onSubmit={onSaveClick}
              initialValues={initialValues}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <ButtonGroupsWrapper>
                    <Field
                      name="sale_type"
                      render={({ input }) => (
                        <ButtonsGroup options={saleTypeOptions} {...input} />
                      )}
                    />
                  </ButtonGroupsWrapper>

                  <Row>
                    <Field
                      name="body_type"
                      render={({ input }) => {
                        return (
                          <InputSelect
                            {...input}
                            isClearable={true}
                            options={bodyTypeOptions}
                            label={
                              <Label htmlFor="bodyType">{t('bodyType')}</Label>
                            }
                          />
                        )
                      }}
                    />
                    <YearOfIssue />
                  </Row>
                  <Row>
                    <BrandSelect />
                    <Field
                      name="model"
                      render={({ input }) => {
                        return (
                          <InputSelect
                            {...input}
                            isClearable={true}
                            options={modelOptions}
                            noOptionsMessage={t('selectBrandFirst')}
                            label={<Label htmlFor="model">{t('model')}</Label>}
                          />
                        )
                      }}
                    />
                  </Row>
                  <Row>
                    <Field
                      name="region"
                      render={({ input }) => {
                        return (
                          <InputSelect
                            {...input}
                            options={regionOptions}
                            fixedIcon={location}
                            isClearable={true}
                            label={
                              <Label htmlFor="region">{t('region')}</Label>
                            }
                          />
                        )
                      }}
                    />
                    <PriceRange />
                  </Row>
                  <ButtonsWrapper>
                    <MainButton type="submit" icon={search} color="blue">
                      {t('search')}
                    </MainButton>
                    <AdvancedSearchButton />
                  </ButtonsWrapper>
                </form>
              )}
            />
          </Container>
        </Wrapper>
      </MainContainer>
    </ComponentThemeProvider>
  )
}

export default MainFilters
