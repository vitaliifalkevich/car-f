import React, { useMemo } from 'react'
import { RangeSelect } from 'ui/Inputs'
import Label from '../../MainFilters/Label'
import { useTranslation } from 'react-i18next'
import { generateYears } from 'utils'

interface YearOfIssueProps {
  customLabel?: React.ReactNode
  showLabel?: boolean
  onChangeHandler?: () => void
}

const YearOfIssue: React.FC<YearOfIssueProps> = ({
  customLabel,
  showLabel = true,
  onChangeHandler,
}) => {
  const { t } = useTranslation()

  const options = useMemo(() => generateYears(), [])

  return (
    <>
      <RangeSelect
        optionsFrom={options}
        optionsTo={options}
        fieldName="year"
        onChangeHandler={onChangeHandler}
        placeholderFrom={t('from')}
        placeholderTo={t('to')}
        label={
          showLabel || customLabel ? (
            customLabel ? (
              <>{customLabel}</>
            ) : (
              <Label htmlFor="yearOfIssue">{t('yearOfIssue')}</Label>
            )
          ) : null
        }
      />
    </>
  )
}

export default YearOfIssue
