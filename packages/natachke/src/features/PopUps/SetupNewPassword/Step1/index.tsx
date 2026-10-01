import React, { useCallback, useMemo } from 'react'
import { ButtonWrapper, FieldWrapper } from '../../styled'
import ModalTitle from 'ui/Modal/ModalTitle'
import { useTranslation, Trans } from 'react-i18next'
import { Field, Form } from 'react-final-form'
import { formValidator } from 'utils'
import { InputPassword } from 'ui/Inputs'
import MainButton from 'ui/MainButton'
import ErrorText from 'ui/ErrorText'
import * as yup from 'yup'
import { useQuery } from 'routes'
import { actions } from 'entities/SetNewPassword/slice'
import { Content } from '../styled'
import { useDispatch, useSelector } from 'react-redux'
import {
  getSetNewPasswordSubmitting,
  getSetNewPasswordErrors,
} from 'entities/SetNewPassword/selectors'
import { useTranslateErrorMessage } from 'hooks'
import { ErrorTextWrapper } from './styled'

const SetupNewPassword: React.FC<{ setNextStep: () => void }> = ({
  setNextStep,
}) => {
  const queries = useQuery()
  const dispatch = useDispatch()
  const isSubmitting = useSelector(getSetNewPasswordSubmitting)
  const setNewPasswordErrors = useSelector(getSetNewPasswordErrors)
  const translateErrorMessage = useTranslateErrorMessage()
  const onSubmitHandler = useCallback(
    values => {
      dispatch(
        actions.setNewPasswordStart({
          values: {
            codeConfirmation: queries.get('token') || '',
            newPassword: values.password,
            repeatPassword: values.repeatPassword,
          },
          successAction: setNextStep,
        }),
      )
    },
    [dispatch, queries, setNextStep],
  )
  const { t } = useTranslation()
  const schema = useMemo(
    () =>
      yup.object({
        password: yup
          .string()
          .required(t('errors.passwordIsRequired'))
          .min(8, t('errors.passwordMin8Symbols')),
        repeatPassword: yup
          .string()
          .required(t('errors.passwordIsRequired'))
          .min(8, t('errors.passwordMin8Symbols'))
          .oneOf([yup.ref('password')], t('errors.passwordsShouldMatch')),
      }),
    [t],
  )
  return (
    <>
      <ModalTitle>
        <Trans>{t('setupNewPassword.title')}</Trans>
      </ModalTitle>
      <Content>
        <Form
          onSubmit={onSubmitHandler}
          validate={formValidator(schema)}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="password"
                render={({ input, meta }) => (
                  <FieldWrapper>
                    <InputPassword
                      {...input}
                      placeholder={t('enterPassword')}
                      labelText={t('password')}
                    />
                    {meta.error && meta.touched && (
                      <ErrorText>{meta.error}</ErrorText>
                    )}
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
                    {meta.error && meta.touched && (
                      <ErrorText>{meta.error}</ErrorText>
                    )}
                  </FieldWrapper>
                )}
              />
              {setNewPasswordErrors && (
                <ErrorTextWrapper>
                  <ErrorText>
                    {translateErrorMessage(setNewPasswordErrors)}
                  </ErrorText>
                </ErrorTextWrapper>
              )}
              <br />
              <ButtonWrapper>
                <MainButton type="submit" color="blue" loading={isSubmitting}>
                  {t('setupNewPassword.setupNewPasswordAction')}
                </MainButton>
              </ButtonWrapper>
            </form>
          )}
        />
      </Content>
    </>
  )
}

export default SetupNewPassword
