import React, { useCallback, useMemo, useState } from 'react'
import { Form, Field } from 'react-final-form'
import { Container, Row, ButtonWrapper } from './styled'
import { InputTextarea } from 'ui/Inputs'
import { useTranslation } from 'react-i18next'
import { formValidator } from 'utils'
import * as yup from 'yup'
import { InputText } from 'ui/Inputs'
import ErrorText from 'ui/ErrorText'
import MainButton from 'ui/MainButton'
import StatusText from 'ui/StatusText'
import { useDispatch, useSelector } from 'react-redux'
import { getCarInfoData, getIsComplaining } from 'entities/CarInfo/selectors'
import { actions } from 'entities/CarInfo/slice'
import { ComplainPayload } from '@handber/natachke-api-client'

const MakeComplain: React.FC<{ closeComplain: () => void }> = ({
  closeComplain,
}) => {
  const { t } = useTranslation()
  const [successSent, setShowSuccessMessage] = useState(false)
  const dispatch = useDispatch()
  const isComplaining = useSelector(getIsComplaining)
  const carInfo = useSelector(getCarInfoData)

  const setComplainSuccessDelivered = useCallback(() => {
    setShowSuccessMessage(true)
    setTimeout(() => {
      setShowSuccessMessage(false)
      closeComplain()
    }, 2000)
  }, [closeComplain])

  const onSubmitHandler = useCallback(
    async (values: Omit<ComplainPayload, 'carId'>) => {
      if (!carInfo?.id) return
      await new Promise(resolve => {
        dispatch(
          actions.startComplain({
            values: { ...values, carId: Number(carInfo.id) },
            resolve,
          }),
        )
      })
      setComplainSuccessDelivered()
    },
    [carInfo, dispatch, setComplainSuccessDelivered],
  )

  const schema = useMemo(
    () =>
      yup.object({
        email: yup
          .string()
          .required(t('errors.emailIsRequired'))
          .email(t('errors.invalidEmail')),
        first_name: yup.string().required(t('errors.nameIsRequired')),
        complaint: yup.string().required(t('errors.complainIsRequired')),
      }),
    [t],
  )

  return (
    <Container>
      <Form
        onSubmit={onSubmitHandler}
        validate={formValidator(schema)}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Row>
              <Field
                name="email"
                render={({ input, meta }) => (
                  <div>
                    <InputText
                      {...input}
                      placeholder="user@gmail.com"
                      labelText={t('email')}
                    />
                    {meta.error && meta.touched && (
                      <ErrorText>{meta.error}</ErrorText>
                    )}
                  </div>
                )}
              />
              <Field
                name="first_name"
                render={({ input, meta }) => (
                  <div>
                    <InputText
                      {...input}
                      placeholder={t('namePlaceholder')}
                      labelText={t('name')}
                    />
                    {meta.error && meta.touched && (
                      <ErrorText>{meta.error}</ErrorText>
                    )}
                  </div>
                )}
              />
            </Row>

            <Field
              name="complaint"
              render={({ input, meta }) => (
                <div>
                  <InputTextarea
                    {...input}
                    inputName="complaint"
                    labelText={t('complainReason')}
                    placeholder={t('makeComplainPlaceHolder')}
                  />
                  {meta.error && meta.touched && (
                    <ErrorText>{meta.error}</ErrorText>
                  )}
                </div>
              )}
            />
            <ButtonWrapper>
              <MainButton type="submit" color="blue" loading={isComplaining}>
                {t('complain')}
              </MainButton>
              {successSent && (
                <StatusText status="success">{t('complainSent')}</StatusText>
              )}
            </ButtonWrapper>
          </form>
        )}
      />
    </Container>
  )
}

export default MakeComplain
