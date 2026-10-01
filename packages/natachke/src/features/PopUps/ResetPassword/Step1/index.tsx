import React, { useCallback, useMemo } from 'react'
import { FieldWrapper, ButtonWrapper, Text } from '../../styled'
import ModalTitle from 'ui/Modal/ModalTitle'
import { useTranslation, Trans } from 'react-i18next'
import { Field, Form } from 'react-final-form'
import { formValidator } from 'utils'
import { InputText } from 'ui/Inputs'
import MainButton from 'ui/MainButton'
import * as yup from 'yup'
import ErrorText from 'ui/ErrorText'
import { ErrorTextWrapper } from './styled'
import { Content } from '../styled'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from 'entities/ResetPassword/slice'
import {
  getIsSubmitting,
  getResetPasswordErrors,
} from 'entities/ResetPassword/selectors'
import { useTranslateErrorMessage } from 'hooks'

const ResetPasswordStep1: React.FC<{ setNextStep: () => void }> = ({
  setNextStep,
}) => {
  const dispatch = useDispatch()
  const translateErrorMessage = useTranslateErrorMessage()
  const isLoading = useSelector(getIsSubmitting)
  const resetPasswordErrors = useSelector(getResetPasswordErrors)
  const onSubmitHandler = useCallback(
    values => {
      dispatch(
        actions.resetPasswordStart({
          values: { email: values.email },
          successAction: setNextStep,
        }),
      )
    },
    [dispatch, setNextStep],
  )
  const { t } = useTranslation()
  const schema = useMemo(
    () =>
      yup.object({
        email: yup
          .string()
          .required(t('errors.emailIsRequired'))
          .email(t('errors.invalidEmail')),
      }),
    [t],
  )
  return (
    <>
      <ModalTitle>{t('resetPassword.title')}</ModalTitle>
      <Content>
        <Form
          onSubmit={onSubmitHandler}
          validate={formValidator(schema)}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="email"
                render={({ input, meta }) => (
                  <FieldWrapper>
                    <InputText
                      {...input}
                      placeholder="user@gmail.com"
                      labelText={t('email')}
                    />
                    {meta.error && meta.touched && (
                      <ErrorText>{meta.error}</ErrorText>
                    )}
                  </FieldWrapper>
                )}
              />
              <FieldWrapper>
                <Text>
                  <Trans>{t('resetPassword.description')}</Trans>
                </Text>
              </FieldWrapper>
              {resetPasswordErrors && (
                <ErrorTextWrapper>
                  <ErrorText>
                    {translateErrorMessage(resetPasswordErrors)}
                  </ErrorText>
                </ErrorTextWrapper>
              )}
              <br />
              <ButtonWrapper>
                <MainButton type="submit" color="blue" loading={isLoading}>
                  {t('resetPassword.resetAction')}
                </MainButton>
              </ButtonWrapper>
            </form>
          )}
        />
      </Content>
    </>
  )
}

export default ResetPasswordStep1
