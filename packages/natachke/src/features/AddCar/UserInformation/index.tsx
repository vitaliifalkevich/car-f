import React, { useMemo } from 'react'
import { SecondTitle, TextLink } from 'ui/Text'
import {
  FieldsContainer,
  RightContainer,
  SummaryErrorsContainer,
} from './styled'
import { Trans, useTranslation } from 'react-i18next'
import ErrorText from 'ui/ErrorText'
import { useFormState } from 'react-final-form'
import { NextStepContainer } from '../styled'
import VinCode from './VinCode'
import AcceptTermsAndConditions from '../../PopUps/SignUp/AcceptTermsAndConditions'
import { useGenerateUrlWithLang } from 'hooks'
import MainButton from 'ui/MainButton'
import BackTextButton from '../BackTextButton'
import { useSelector } from 'react-redux'
import {
  getErrorsCheckingEmail,
  getIsAuthorized,
} from 'entities/Bootstrap/selectors'
import {
  getCreateCarErrors,
  getCreateCarLoading,
  getEditCarErrors,
  getEditCarLoading,
} from 'entities/Car/selectors'
import AuthUserForm from './AuthUserForm'
import NotAuthUserForm from './NotAuthUserForm'

const UserInformation: React.FC<{
  setPrevStep: () => void
  submitting?: boolean
}> = ({ setPrevStep, submitting }) => {
  const { t } = useTranslation()

  const isCreateCarLoading = useSelector(getCreateCarLoading)
  const isEditCarLoading = useSelector(getEditCarLoading)
  const { t: tErrors } = useTranslation('apiErrors')
  const isAuth = useSelector(getIsAuthorized)
  const createCarErrors = useSelector(getCreateCarErrors)
  const editCarErrors = useSelector(getEditCarErrors)
  const emailAvailableErrors = useSelector(getErrorsCheckingEmail)
  const generateUrlWithLang = useGenerateUrlWithLang()
  const formState = useFormState()
  const isPublishButtonDisabled = useMemo(() => {
    if (!isAuth && emailAvailableErrors) return true
    if (!isAuth && !formState.touched) return true
    const errorsCount = Object.keys(formState.errors).length

    if (
      !isAuth &&
      formState.touched &&
      errorsCount === 0 &&
      Object.keys(formState.touched).length === 0
    )
      return true
    return errorsCount > 0
  }, [isAuth, emailAvailableErrors, formState.touched, formState.errors])

  return (
    <FieldsContainer>
      <section>
        <div>
          <SecondTitle>
            {t('step') + ' 7. ' + t('createCar.userInfo')}
          </SecondTitle>
          {isAuth ? <AuthUserForm /> : <NotAuthUserForm />}
        </div>
      </section>
      <section>
        <RightContainer>
          <div>
            <VinCode />
            <AcceptTermsAndConditions>
              {t('acceptTermsAndConditions')}
              <br />
              <TextLink to={generateUrlWithLang('/terms-and-conditions')}>
                <Trans>{t('termsAndConditionsAccept')}</Trans>
              </TextLink>
            </AcceptTermsAndConditions>
            <NextStepContainer>
              <BackTextButton onClick={setPrevStep}>{t('back')}</BackTextButton>
              <MainButton
                color="blue"
                type="submit"
                loading={isCreateCarLoading || isEditCarLoading || submitting}
                isDisabled={
                  isCreateCarLoading ||
                  isPublishButtonDisabled ||
                  isEditCarLoading
                }
              >
                {t('publish')}
              </MainButton>
            </NextStepContainer>
          </div>
          <SummaryErrorsContainer>
            {createCarErrors && (
              <ErrorText>{tErrors(`${createCarErrors}`)}</ErrorText>
            )}
            {editCarErrors && (
              <ErrorText>{tErrors(`${editCarErrors}`)}</ErrorText>
            )}
          </SummaryErrorsContainer>
        </RightContainer>
      </section>
    </FieldsContainer>
  )
}

export default UserInformation
