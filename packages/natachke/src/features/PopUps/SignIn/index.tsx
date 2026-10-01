import React, { useCallback, useMemo } from 'react'
import Modal from 'ui/Modal'
import { FieldWrapper, Row, ButtonWrapper, CenterLinkWrapper } from '../styled'
import ModalTitle from 'ui/Modal/ModalTitle'
import { useTranslation } from 'react-i18next'
import { Field, Form } from 'react-final-form'
import { useDispatch, useSelector } from 'react-redux'
import { formValidator } from 'utils'
import enterIcon from 'assets/icons/enterIcon.svg'
import { InputText, InputPassword, InputCheckbox } from 'ui/Inputs'
import { TextLink } from 'ui/Text'
import ErrorText from 'ui/ErrorText'
import MainButton from 'ui/MainButton'
import * as yup from 'yup'
import { Content } from './styled'
import {
  useCloseCurrentModal,
  useForgotPasswordUrl,
  useSignUpUrl,
  useTranslateErrorMessage,
} from 'hooks'
import { getIsAuthSubmitting, getLoginErrors } from 'entities/Auth/selectors'
import { actions } from 'entities/Auth/slice'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

const LogIn: React.FC = () => {
  const dispatch = useDispatch()
  const closeWindow = useCloseCurrentModal()
  const isSubmitting = useSelector(getIsAuthSubmitting)
  const logInErrors = useSelector(getLoginErrors)
  const translateErrorMessage = useTranslateErrorMessage()
  const { executeRecaptcha } = useGoogleReCaptcha()

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) return
    return await executeRecaptcha('login')
  }, [executeRecaptcha])

  const onSubmitHandler = useCallback(
    async values => {
      const recaptchaToken = await handleReCaptchaVerify()
      dispatch(
        actions.logInStart({
          values,
          successAction: closeWindow,
          recaptchaToken,
        }),
      )
    },
    [closeWindow, dispatch, handleReCaptchaVerify],
  )
  const forgotPasswordUrl = useForgotPasswordUrl()
  const signUpUrl = useSignUpUrl()
  const { t } = useTranslation()
  const initialValues = useMemo(
    () => ({
      remember: true,
    }),
    [],
  )
  const schema = useMemo(
    () =>
      yup.object({
        email: yup
          .string()
          .required(t('errors.emailIsRequired'))
          .email(t('errors.invalidEmail')),
        password: yup
          .string()
          .required(t('errors.passwordIsRequired'))
          .min(8, t('errors.passwordMin8Symbols')),
      }),
    [t],
  )
  return (
    <Modal width="350px" height="auto">
      <ModalTitle>{t('signIn')}</ModalTitle>
      <Content>
        <Form
          initialValues={initialValues}
          onSubmit={onSubmitHandler}
          validate={formValidator(schema)}
          render={({ handleSubmit, submitting }) => (
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
              <FieldWrapper>
                <Row>
                  <Field
                    name="remember"
                    type="checkbox"
                    render={({ input }) => (
                      <InputCheckbox
                        {...input}
                        label={t('rememberMe')}
                        id="rememberMe"
                      />
                    )}
                  />

                  <TextLink to={forgotPasswordUrl}>
                    {t('ifForgotPassword')}
                  </TextLink>
                </Row>
              </FieldWrapper>
              {logInErrors && (
                <ErrorText>{translateErrorMessage(logInErrors)}</ErrorText>
              )}
              <br />
              <ButtonWrapper>
                <MainButton
                  type="submit"
                  color="blue"
                  icon={enterIcon}
                  loading={isSubmitting || submitting}
                >
                  {t('logIn')}
                </MainButton>
              </ButtonWrapper>
              <CenterLinkWrapper>
                <TextLink to={signUpUrl}>{t('signUp')}</TextLink>
              </CenterLinkWrapper>
            </form>
          )}
        />
      </Content>
    </Modal>
  )
}

export default LogIn
