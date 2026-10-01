import React, { useCallback, useMemo } from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import { Container, ChipsContainer } from './styled'
import Chip from 'ui/Chip'
import SecondaryButton from 'ui/SecondaryButton'
import { useTranslation } from 'react-i18next'
import themes from './themes'
import { useBreakpoint } from 'MediaQueriesProvider'
import { useFormState, useForm } from 'react-final-form'
import {
  useFormatPrice,
  useNavigateAdvancedSearchWithCurrentSearch,
} from '../../hooks'

const SearchFilters: React.FC<{
  showAdvancedSearchButton?: boolean
  showBorderBottom?: boolean
  deleteAction?: () => void
}> = ({
  showAdvancedSearchButton = false,
  showBorderBottom = false,
  deleteAction,
}) => {
  const { t } = useTranslation('translation')
  const advancedSearchHandler = useNavigateAdvancedSearchWithCurrentSearch()

  const breakpoints = useBreakpoint()
  const formState = useFormState()
  const form = useForm()
  const formatPrice = useFormatPrice()

  const onDeleteHandler = useCallback(
    (key, inArrayKey) => {
      if (!inArrayKey) form.change(key, undefined)
      const currentArray = formState.values[key]

      if (inArrayKey) {
        const filteredArray = currentArray.filter(item => {
          const value = item?.value ? item?.value : item
          const inArrayValue = inArrayKey?.value ? inArrayKey.value : inArrayKey

          return value !== inArrayValue
        })

        form.change(key, filteredArray.length > 0 ? filteredArray : undefined)
      }
      deleteAction?.()
    },
    [deleteAction, form, formState.values],
  )

  const preparedFilters = useMemo(() => {
    if (!formState?.values) return []
    const formData = formState?.values
    let result: { text: string; key: string; inArrayKey?: string }[] = []

    Object.keys(formData).forEach(key => {
      if (key === 'page' || key === 'sorting' || key === 'results_per_page')
        return
      if (key === 'url') {
        if (!formData[key]) return
        return (result = [
          ...result,
          { text: t('searchById') + ': ' + formData[key], key },
        ])
      }

      if (Array.isArray(formData[key])) {
        const prepared: {
          text: string
          key: string
          inArrayKey?: string
        }[] = []
        formData[key].forEach(item => {
          if (item?.label)
            return prepared.push({ text: item?.label, key, inArrayKey: item })

          if (item && item !== '')
            prepared.push({
              text: t([
                `driveOptions.${item}`,
                `typeCarOptions.${item}`,
                `fuelOptions.${item}`,
                `transmissionOptions.${item}`,
                `securityOptions.${item}`,
                `comfortOptions.${item}`,
                `multimediaOptions.${item}`,
              ]),
              key,
              inArrayKey: item,
            })
        })
        result = [...result, ...prepared]
      }
      if (formData[key]?.from || formData[key]?.to) {
        if (key === 'price') {
          result = [
            ...result,
            {
              text: t(
                `${key}${formData[key]?.from ? '_from' : ''}${
                  formData[key]?.to ? '_to' : ''
                }`,
                {
                  from: formatPrice({ price: Number(formData[key]?.from) }),
                  to: formatPrice({ price: Number(formData[key]?.to) }),
                },
              ),
              key,
            },
          ]
        } else
          result = [
            ...result,
            {
              text: t(
                `${key}${formData[key]?.from ? '_from' : ''}${
                  formData[key]?.to ? '_to' : ''
                }`,
                {
                  from: formData[key]?.from?.label || formData[key]?.from,
                  to: formData[key]?.to?.label || formData[key]?.to,
                  units: formData[key]?.units?.label,
                },
              ),
              key,
            },
          ]
      }
      if (formData[key]?.label) {
        if (key === 'delivered_from') {
          result = [
            ...result,
            {
              text: t(`delivered_from`, { country: formData[key].label }),
              key,
            },
          ]
        } else result = [...result, { text: formData[key].label, key }]
      }

      if (
        (formData[key] && formData[key] === 'true') ||
        (formData[key] && formData[key] === true)
      ) {
        result = [...result, { text: t(key), key }]
      }
      if (
        formData[key] &&
        typeof formData[key] === 'string' &&
        formData[key] !== 'true'
      ) {
        result = [
          ...result,
          { text: t([`typeCarOptions.${formData[key]}`]), key },
        ]
      }
    })
    return result
  }, [formState, formatPrice, t])

  return (
    <ComponentThemeProvider themes={themes}>
      <Container showBorderBottom={showBorderBottom}>
        <ChipsContainer>
          {preparedFilters.map((item, idx) => (
            <Chip
              text={item.text}
              onDelete={() => {
                onDeleteHandler(item.key, item?.inArrayKey)
              }}
              key={`filter_search_${idx}`}
            />
          ))}
        </ChipsContainer>
        {showAdvancedSearchButton && !breakpoints.mobile && (
          <div
            style={{
              minWidth: '200px',
            }}
          >
            <SecondaryButton onClick={advancedSearchHandler}>
              {t('advancedSearch')}
            </SecondaryButton>
          </div>
        )}
      </Container>
    </ComponentThemeProvider>
  )
}

export default SearchFilters
