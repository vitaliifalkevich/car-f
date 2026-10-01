import React, { useCallback, useEffect, useRef } from 'react'
import { AnyObject } from 'react-final-form'
import {
  AdvancedSearchButtonWrapper,
  ButtonGroupsWrapper,
  Container,
} from './styled'
import {
  useFuelOptions,
  useGenerateBodyTypeOptions,
  useGenerateSaleTypeOptions,
  useNavigateAdvancedSearchWithCurrentSearch,
  useRegionOptions,
  useTransmissionOptions,
} from 'hooks'
import {
  ButtonsGroup,
  InputCheckbox,
  InputRangeText,
  InputSelect,
  SwitchButton,
} from 'ui/Inputs'
import Label from './Label'
import { Trans, useTranslation } from 'react-i18next'
import location from 'assets/icons/filters/location.svg'
import YearOfIssue from '../FormElements/YearOfIssue'
import CheckboxTitle from './CheckboxTitle'
import HorizontalLine from 'ui/HorizontalLine'
import FieldChangeSubmit from './FieldChangeSubmit'
import PriceRange from '../FormElements/PriceRange'
import MileageRange from '../FormElements/MileageRange'
import config from '../../config'
import MainButton from 'ui/MainButton'
import { useSelector } from 'react-redux'
import { getCarOptionsData } from 'entities/Car/selectors'
import { BrandModelForm } from './BrandModel'
import { Top50, TrueCar } from 'ui/Badges'

const { currency } = config

interface LeftBarSearchProps {
  values: any
  handleSubmit: (
    event?: Partial<
      Pick<React.SyntheticEvent, 'preventDefault' | 'stopPropagation'>
    >,
  ) => Promise<AnyObject | undefined> | undefined
}

const LeftBarSearch: React.FC<LeftBarSearchProps> = ({
  values,
  handleSubmit,
}) => {
  const { t } = useTranslation()

  const carOptionsData = useSelector(getCarOptionsData)
  const saleTypeOptions = useGenerateSaleTypeOptions()
  const regionOptions = useRegionOptions()
  const bodyTypeOptions = useGenerateBodyTypeOptions(carOptionsData?.bodyTypes)
  const fuelOptions = useFuelOptions(carOptionsData?.engineTypes)
  const transmissionOptions = useTransmissionOptions(
    carOptionsData?.transmissions,
  )

  const refTimer = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    return () => {
      if (refTimer?.current) clearTimeout(refTimer?.current)
    }
  }, [])

  const advancedSearchHandler = useNavigateAdvancedSearchWithCurrentSearch()

  const onChangeHandler = useCallback(() => {
    if (refTimer?.current) clearTimeout(refTimer?.current)
    refTimer.current = setTimeout(() => {
      handleSubmit(values)
    }, 300)
  }, [handleSubmit, values])

  return (
    <aside>
      <Container>
        <ButtonGroupsWrapper>
          <FieldChangeSubmit
            name="sale_type"
            Component={(input, onChangeHandler) => (
              <ButtonsGroup
                options={saleTypeOptions}
                {...input}
                onChange={onChangeHandler}
              />
            )}
            values={values}
            handleSubmit={handleSubmit}
          />
        </ButtonGroupsWrapper>
        <FieldChangeSubmit
          name="body_type"
          Component={(input, onChangeHandler) => (
            <InputSelect
              {...input}
              onChange={onChangeHandler}
              options={bodyTypeOptions}
              label={<Label htmlFor="bodyType">{t('bodyType')}</Label>}
            />
          )}
          values={values}
          handleSubmit={handleSubmit}
        />
        <BrandModelForm handleSubmit={handleSubmit} values={values} />
        <HorizontalLine />

        <YearOfIssue
          onChangeHandler={onChangeHandler}
          customLabel={<Label htmlFor="yearOfIssue">{t('yearOfIssue')}</Label>}
        />
        <PriceRange
          onChangeHandler={onChangeHandler}
          customLabel={
            <Label htmlFor="priceRange">
              {t('priceRange')}, {currency.defaultCurrency.symbol}
            </Label>
          }
        />

        <FieldChangeSubmit
          name="region"
          Component={(input, onChangeHandler) => (
            <InputSelect
              {...input}
              onChange={onChangeHandler}
              options={regionOptions}
              fixedIcon={location}
              label={<Label htmlFor="region">{t('region')}</Label>}
            />
          )}
          values={values}
          handleSubmit={handleSubmit}
        />

        <MileageRange
          onChangeHandler={onChangeHandler}
          customLabel={
            <Label htmlFor="mileageRange">
              {t('mileage')}, ({t('mileageUnits')})
            </Label>
          }
        />

        <CheckboxTitle>
          <Trans>{t('onlyTrueCarOneRow')}</Trans>
          <TrueCar size="sm" tooltip={t('trueCarTooltip')} />
        </CheckboxTitle>

        <FieldChangeSubmit
          name="true_car"
          type="checkbox"
          Component={(input, onChangeHandler) => {
            return <SwitchButton {...input} onChange={onChangeHandler} />
          }}
          values={values}
          handleSubmit={handleSubmit}
        />

        <CheckboxTitle>
          <Trans>{t('onlyTopCarsOneRow')}</Trans>
          <Top50 size="sm" tooltip={t('topCarTooltip')} />
        </CheckboxTitle>
        <div>
          <FieldChangeSubmit
            name="top_catalog"
            type="checkbox"
            Component={(input, onChangeHandler) => {
              return <SwitchButton {...input} onChange={onChangeHandler} />
            }}
            values={values}
            handleSubmit={handleSubmit}
          />
        </div>

        <CheckboxTitle>{t('transmissionOptions.title')}</CheckboxTitle>
        {transmissionOptions.map((item, idx) => (
          <FieldChangeSubmit
            key={`transmissionOptions${item.value}${idx}`}
            name="transmission"
            type="checkbox"
            value={String(item.value)}
            id={String(item.value)}
            Component={(input, onChangeHandler) => {
              return (
                <InputCheckbox
                  {...input}
                  label={item.label}
                  id={String(item.value)}
                  onChangeHandler={onChangeHandler}
                />
              )
            }}
            values={values}
            handleSubmit={handleSubmit}
          />
        ))}
        <CheckboxTitle>{t('fuelOptions.title')}</CheckboxTitle>

        {fuelOptions.map((item, idx) => {
          return (
            <FieldChangeSubmit
              key={`fuelOptions${item.value}${idx}`}
              name="fuel"
              type="checkbox"
              value={String(item.value)}
              id={String(item.value)}
              Component={(input, onChangeHandler) => {
                return (
                  <InputCheckbox
                    {...input}
                    label={item.label}
                    id={String(item.value)}
                    onChangeHandler={onChangeHandler}
                  />
                )
              }}
              values={values}
              handleSubmit={handleSubmit}
            />
          )
        })}

        <InputRangeText
          fieldName="engine_volume"
          onChangeHandler={onChangeHandler}
          placeholderFrom={t('from')}
          placeholderTo={t('to')}
          type="number"
          label={
            <Label htmlFor="engineVolume">
              {t('engineVolume')} ({t('liter')})
            </Label>
          }
        />

        <CheckboxTitle>{t('isCustomsCleared')}</CheckboxTitle>
        <FieldChangeSubmit
          name="custom_clearance"
          type="checkbox"
          Component={(input, onChangeHandler) => {
            return <SwitchButton {...input} onChange={onChangeHandler} />
          }}
          values={values}
          handleSubmit={handleSubmit}
        />

        <CheckboxTitle>{t('accidents')}</CheckboxTitle>
        <FieldChangeSubmit
          name="accidents"
          type="checkbox"
          Component={(input, onChangeHandler) => {
            return <SwitchButton {...input} onChange={onChangeHandler} />
          }}
          values={values}
          handleSubmit={handleSubmit}
        />
        <AdvancedSearchButtonWrapper>
          <MainButton
            type="button"
            color="grey"
            onClick={advancedSearchHandler}
          >
            {t('advancedSearch')}
          </MainButton>
        </AdvancedSearchButtonWrapper>
      </Container>
    </aside>
  )
}

export default LeftBarSearch
