import React, { useCallback, useMemo } from 'react'
import Modal from 'ui/Modal'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import ModalTitle from 'ui/Modal/ModalTitle'
import { useTranslation } from 'react-i18next'
import { Form } from 'react-final-form'
import { formValidator } from 'utils'
import * as yup from 'yup'
import { Content, Container, ContentWrapper } from './styled'
import { useGeneratePhoneOptions, useWelcomeBannerUrl } from 'hooks'
import Banner from './Banner'
import { useBreakpoint } from 'MediaQueriesProvider'
import { actions } from 'entities/Auth/slice'
import { useDispatch, useSelector } from 'react-redux'
import { getLanguage } from 'entities/Bootstrap/selectors'
import { useHistory } from 'react-router-dom'
import config from 'config'
import FormContent from './FormContent'
const { currentCountryCode, defaultPhoneCode } = config

const SignUp: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const phoneOptions = useGeneratePhoneOptions()
  const { executeRecaptcha } = useGoogleReCaptcha()

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) return
    return await executeRecaptcha('signUp')
  }, [executeRecaptcha])

  const currentLanguage = useSelector(getLanguage)
  const welcomeBannerUrl = useWelcomeBannerUrl()
  const successSignUp = useCallback(() => {
    history.push(welcomeBannerUrl)
  }, [history, welcomeBannerUrl])

  const onSubmitHandler = useCallback(
    async values => {
      const { country, repeatPassword, phone_code, ...restValues } = values
      const recaptchaToken = await handleReCaptchaVerify()

      const preparedValues = {
        ...restValues,
        phone_code: phone_code?.value,
        country_code: currentCountryCode || country?.value,
        locale: currentLanguage,
      }
      dispatch(
        actions.signUpStart({
          values: preparedValues,
          successAction: successSignUp,
          recaptchaToken,
        }),
      )
    },
    [currentLanguage, dispatch, handleReCaptchaVerify, successSignUp],
  )
  const breakpoints = useBreakpoint()
  const { t } = useTranslation()

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
        repeatPassword: yup
          .string()
          .required(t('errors.passwordIsRequired'))
          .min(8, t('errors.passwordMin8Symbols'))
          .oneOf([yup.ref('password')], t('errors.passwordsShouldMatch')),
        first_name: yup.string().required(t('errors.fieldIsRequired')),
      }),
    [t],
  )

  const initialValues = useMemo(() => {
    return {
      phone_code: phoneOptions.find(item => item?.value === defaultPhoneCode),
    }
  }, [phoneOptions])
  return (
    <Modal
      width="640px"
      height="auto"
      saveSizesInTablet={true}
      padding={!breakpoints.mobile ? '22px' : '0'}
    >
      <ComponentThemeProvider themes={themes}>
        <Container>
          <Banner />
          <ContentWrapper>
            <ModalTitle>{t('signUp')}</ModalTitle>
            <Content>
              <Form
                onSubmit={onSubmitHandler}
                initialValues={initialValues}
                validate={formValidator(schema)}
                render={({ handleSubmit, submitting }) => (
                  <form onSubmit={handleSubmit}>
                    <FormContent submittingForm={submitting} />
                  </form>
                )}
              />
            </Content>
          </ContentWrapper>
        </Container>
      </ComponentThemeProvider>
    </Modal>
  )
}

export default SignUp
