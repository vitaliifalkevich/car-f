import React, { useCallback, useMemo } from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import { Wrapper, Container, Text } from './styled'
import InputTextSelect from 'ui/Inputs/InputTextSelect'
import { useTranslation } from 'react-i18next'
import { IOption } from '../../hooks'

interface ShowPagesFilterProps {
  showPerPage: number
  setShowPerPage: (count: number) => void
  options?: IOption[]
}

const ShowPagesFilter: React.FC<ShowPagesFilterProps> = ({
  showPerPage,
  setShowPerPage,
  options,
}) => {
  const { t } = useTranslation()
  const defaultOptions = useMemo(() => {
    return [
      {
        value: 10,
        label: `10 ${t('ads')}`,
      },
      {
        value: 20,
        label: `20 ${t('ads')}`,
      },
      {
        value: 30,
        label: `30 ${t('ads')}`,
      },
      {
        value: 50,
        label: `50 ${t('ads')}`,
      },
    ]
  }, [t])

  const onChangeHandler = useCallback(
    option => {
      setShowPerPage(option.value)
    },
    [setShowPerPage],
  )

  const activeValue = useMemo(() => {
    return (options ? options : defaultOptions).find(
      option => String(option.value) === String(showPerPage),
    )
  }, [defaultOptions, options, showPerPage])

  return (
    <ComponentThemeProvider themes={themes}>
      <Wrapper>
        <Container>
          <Text>{t('showBy')}</Text>
          <InputTextSelect
            onChange={onChangeHandler}
            options={options ? options : defaultOptions}
            value={activeValue}
          />
        </Container>
      </Wrapper>
    </ComponentThemeProvider>
  )
}

export default React.memo(ShowPagesFilter)
