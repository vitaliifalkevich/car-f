import React, { useEffect, useMemo } from 'react'
import { Field, useFormState } from 'react-final-form'
import { FieldWrapper, PhoneContainer } from '../../styled'
import { ButtonWrapper, ErrorsWrapper } from '../styled'
import { InputSelect, InputText, OptionTitle } from 'ui/Inputs'
import ErrorText from 'ui/ErrorText'
import { actions } from 'entities/Auth/slice'
import { Trans, useTranslation } from 'react-i18next'

import {
  useGeneratePhoneOptions,
  useGenerateUrlWithLang,
  useTranslateErrorMessage,
} from 'hooks'
import AcceptTermsAndConditions from '../AcceptTermsAndConditions'
import { TextLink } from 'ui/Text'
import MainButton from 'ui/MainButton'
import enterIcon from 'assets/icons/enterIcon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { getIsAuthSubmitting, getSignupErrors } from 'entities/Auth/selectors'

const Step2: React.FC<{
  setPrevStep: () => void
  submittingForm?: boolean
}> = ({ setPrevStep, submittingForm }) => {
  const dispatch = useDispatch()
  const { t } = useTranslation('translation', { useSuspense: false })
  const generateUrlWithLang = useGenerateUrlWithLang()
  const signUpErrors = useSelector(getSignupErrors)
  const translateErrorMessage = useTranslateErrorMessage()
  const isSubmitting = useSelector(getIsAuthSubmitting)
  const phoneOptions = useGeneratePhoneOptions()
  const formState = useFormState()
  const isSubmitButtonDisabled = useMemo(() => {
    const errorsCount = Object.keys(formState.errors).length
    if (!formState.touched || errorsCount > 0) return true
  }, [formState.errors, formState.touched])

  useEffect(() => {
    return () => {
      dispatch(actions.signUpSetErrors(null))
    }
  }, [dispatch])

  return (
    <>
      <Field
        name="first_name"
        render={({ input, meta }) => (
          <FieldWrapper>
            <InputText
              {...input}
              placeholder={t('inputSellerName')}
              labelText={t('seller')}
            />
            {meta.error && meta.touched && <ErrorText>{meta.error}</ErrorText>}
          </FieldWrapper>
        )}
      />
      <FieldWrapper>
        <OptionTitle fontWeight="regular">{t('phone')}</OptionTitle>
        <PhoneContainer>
          <Field
            name="phone_code"
            render={({ input, meta }) => (
              <div style={{ minWidth: '100px' }}>
                <InputSelect
                  {...input}
                  options={phoneOptions}
                  placeholder={t('phoneCodePlaceholder')}
                />
                {meta.error && meta.touched && (
                  <ErrorText>{meta.error}</ErrorText>
                )}
              </div>
            )}
          />
          <Field
            name="phone_number"
            render={({ input, meta }) => (
              <div style={{ width: '100%' }}>
                <InputText
                  {...input}
                  type="number"
                  placeholder={t('phonePlaceholder')}
                />
                {meta.error && meta.touched && (
                  <ErrorText>{meta.error}</ErrorText>
                )}
              </div>
            )}
          />
        </PhoneContainer>
      </FieldWrapper>
      <AcceptTermsAndConditions>
        {t('acceptTermsAndConditions')}
        <br />
        <TextLink to={generateUrlWithLang('/terms-and-conditions')}>
          <Trans>{t('termsAndConditionsAccept')}</Trans>
        </TextLink>
      </AcceptTermsAndConditions>
      {signUpErrors && (
        <ErrorsWrapper>
          <ErrorText>{translateErrorMessage(signUpErrors)}</ErrorText>
        </ErrorsWrapper>
      )}
      <ButtonWrapper>
        <MainButton
          type="submit"
          color="blue"
          icon={enterIcon}
          loading={isSubmitting || submittingForm}
          isDisabled={isSubmitButtonDisabled}
        >
          {t('signUpAction')}
        </MainButton>
        <MainButton type="button" onClick={setPrevStep} color="grey">
          {t('back')}
        </MainButton>
      </ButtonWrapper>
    </>
  )
}

export default React.memo(Step2)
