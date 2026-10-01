import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { CheckSuccessIcon, FormItemContainer } from '../../styled'
import { Field, useField } from 'react-final-form'
import { InputPassword, InputText, OptionTitle } from 'ui/Inputs'
import { actions } from 'entities/Bootstrap/slice'
import ErrorText from 'ui/ErrorText'
import { useDispatch, useSelector } from 'react-redux'
import { getErrorsCheckingEmail } from 'entities/Bootstrap/selectors'
import { SecondaryText } from 'ui/Text'

const NotAuthUserForm: React.FC = () => {
  const { t } = useTranslation()
  const { t: tErrors } = useTranslation('apiErrors')
  const dispatch = useDispatch()
  const phoneCodeField = useField('phone_code')
  const phoneNumberField = useField('phone_number')

  const emailAvailableErrors = useSelector(getErrorsCheckingEmail)
  return (
    <div>
      <SecondaryText>
        <Trans>{t('createCar.userInfoDescription')}</Trans>
      </SecondaryText>
      <FormItemContainer>
        <Field
          name="email"
          render={({ input, meta }) => (
            <>
              <div>
                <OptionTitle>{t('email')}</OptionTitle>
                {meta.valid && input.value && !emailAvailableErrors && (
                  <CheckSuccessIcon />
                )}
              </div>

              <div>
                <InputText
                  {...input}
                  onChange={event => {
                    if (
                      !meta.error &&
                      event.target.value &&
                      event.target.value !== ''
                    )
                      if (event?.target?.value)
                        dispatch(actions.startCheckingEmail(event.target.value))
                    input.onChange(event)
                  }}
                  placeholder="user@gmail.com"
                />
                {meta.error && meta.touched ? (
                  <ErrorText>{meta.error}</ErrorText>
                ) : emailAvailableErrors ? (
                  <ErrorText>{tErrors(`${emailAvailableErrors}`)}</ErrorText>
                ) : null}
              </div>
            </>
          )}
        />
      </FormItemContainer>
      <FormItemContainer>
        <Field
          name="password"
          render={({ input, meta }) => (
            <>
              <div>
                <OptionTitle>{t('password')}</OptionTitle>
                {meta.valid && input.value && <CheckSuccessIcon />}
              </div>
              <div>
                <InputPassword {...input} placeholder={t('enterPassword')} />
                {meta.error && meta.touched && (
                  <ErrorText>{meta.error}</ErrorText>
                )}
              </div>
            </>
          )}
        />
      </FormItemContainer>
      <FormItemContainer>
        <Field
          name="repeatPassword"
          render={({ input, meta }) => (
            <>
              <div>
                <OptionTitle>{t('repeatPassword')}</OptionTitle>
                {meta.valid && input.value && <CheckSuccessIcon />}
              </div>
              <div>
                <InputPassword
                  {...input}
                  placeholder={t('enterRepeatPassword')}
                />
                {meta.error && meta.touched && (
                  <ErrorText>{meta.error}</ErrorText>
                )}
              </div>
            </>
          )}
        />
      </FormItemContainer>
      <FormItemContainer>
        <Field
          name="seller"
          render={({ input, meta }) => (
            <>
              <div>
                <OptionTitle>{t('seller')}</OptionTitle>
                {meta.valid && input.value && <CheckSuccessIcon />}
              </div>
              <div>
                <InputText {...input} placeholder={t('inputSellerName')} />
                {meta.error && meta.touched && (
                  <ErrorText>{meta.error}</ErrorText>
                )}
              </div>
            </>
          )}
        />
      </FormItemContainer>
      <FormItemContainer>
        <div>
          <OptionTitle>{t('phone')}</OptionTitle>
          {phoneCodeField.meta.valid &&
            phoneCodeField.input.value &&
            phoneNumberField.meta.valid &&
            phoneNumberField.input.value && <CheckSuccessIcon />}
        </div>
      </FormItemContainer>
    </div>
  )
}

export default NotAuthUserForm
