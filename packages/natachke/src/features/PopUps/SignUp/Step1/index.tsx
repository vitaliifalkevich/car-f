import React, { useMemo } from 'react'
import { Field, useFormState } from 'react-final-form'
import { CenterLinkWrapper, FieldWrapper } from '../../styled'
import { ButtonWrapper } from '../styled'
import { InputPassword, InputSelect, InputText } from 'ui/Inputs'
import ErrorText from 'ui/ErrorText'
import { useTranslation } from 'react-i18next'
import config from 'config'
import { useCountryOptions, useSignInUrl } from 'hooks'
import MainButton from 'ui/MainButton'
import { TextLink } from 'ui/Text'
const { currentCountryCode } = config

const Step1: React.FC<{ setNextStep: () => void }> = ({ setNextStep }) => {
  const { t } = useTranslation('translation', { useSuspense: false })
  const formState = useFormState()
  const isNextButtonDisabled = useMemo(() => {
    if (!formState.touched) return true
    const errorsCount = Object.keys(formState.errors).length
    if (errorsCount === 0 && Object.keys(formState.touched).length === 0)
      return true
    if (errorsCount > 0) {
      const requiredFieldsThisStep = ['email', 'password', 'repeatPassword']

      return !!requiredFieldsThisStep.find(item => formState.errors[item])
    }
  }, [formState.errors, formState.touched])
  const signInUrl = useSignInUrl()
  const countryOptions = useCountryOptions()
  return (
    <>
      <Field
        name="email"
        render={({ input, meta }) => (
          <FieldWrapper>
            <InputText
              {...input}
              placeholder="user@gmail.com"
              labelText={t('email')}
            />
            {meta.error && meta.touched && <ErrorText>{meta.error}</ErrorText>}
          </FieldWrapper>
        )}
      />
      {!currentCountryCode && (
        <Field
          name="country"
          render={({ input, meta }) => (
            <FieldWrapper>
              <InputSelect
                {...input}
                labelText={t('country')}
                options={countryOptions}
                placeholder={t('select')}
              />
              {meta.error && meta.touched && (
                <ErrorText>{meta.error}</ErrorText>
              )}
            </FieldWrapper>
          )}
        />
      )}

      <Field
        name="password"
        render={({ input, meta }) => (
          <FieldWrapper>
            <InputPassword
              {...input}
              placeholder={t('enterPassword')}
              labelText={t('password')}
            />
            {meta.error && meta.touched && <ErrorText>{meta.error}</ErrorText>}
          </FieldWrapper>
        )}
      />
      <Field
        name="repeatPassword"
        render={({ input, meta }) => (
          <FieldWrapper>
            <InputPassword
              {...input}
              placeholder={t('enterRepeatPassword')}
              labelText={t('repeatPassword')}
            />
            {meta.error && meta.touched && <ErrorText>{meta.error}</ErrorText>}
          </FieldWrapper>
        )}
      />
      <ButtonWrapper>
        <MainButton
          type="button"
          color="blue"
          onClick={setNextStep}
          isDisabled={isNextButtonDisabled}
        >
          {t('nextStep')}
        </MainButton>
        <CenterLinkWrapper>
          <TextLink to={signInUrl}>{t('signIn')}</TextLink>
        </CenterLinkWrapper>
      </ButtonWrapper>
    </>
  )
}

export default React.memo(Step1)
