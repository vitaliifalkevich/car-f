import React, { useEffect } from 'react'
import {
  Container,
  PaymentsContainer,
  CardItem,
  Icon,
  Text,
  Title,
} from './styled'
import { SecondTitle } from 'ui/Text'
import { useTranslation } from 'react-i18next'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import ErrorText from 'ui/ErrorText'
import { Field, useForm } from 'react-final-form'
import { WALLET } from 'config'

interface ChoosePaymentProps {
  title?: string
  isWalletAvailable?: boolean
  activeMethod?: string
  payments: {
    id?: string
    icon?: string
    title?: string
    description?: string
  }[]
}

const ChoosePayment: React.FC<ChoosePaymentProps> = ({
  title,
  payments,
  isWalletAvailable = true,
  activeMethod,
}) => {
  const { t } = useTranslation()

  const form = useForm()

  useEffect(() => {
    if (!isWalletAvailable && activeMethod === WALLET) {
      form.change('paymentMethod', payments[3])
    }
  }, [activeMethod, form, isWalletAvailable, payments])

  return (
    <ComponentThemeProvider themes={themes}>
      <Container>
        <SecondTitle>{title ? title : t('choosePaymentMethod')}</SecondTitle>
        <Field
          name="paymentMethod"
          render={({ input, meta }) => {
            return (
              <>
                <PaymentsContainer>
                  {payments.map((method, idx) => (
                    <CardItem
                      isWalletNotAvailable={
                        !isWalletAvailable && method.id === WALLET
                      }
                      isActive={method.id === input.value?.id}
                      key={`paymentMethod${idx}${method.id}`}
                      onClick={() => {
                        if (!isWalletAvailable && method.id === WALLET) return
                        input.onChange(method)
                      }}
                    >
                      <Icon src={method.icon} alt={method.icon} />
                      {method.title && <Title>{method.title}</Title>}
                      {method?.description && <Text>{method.description}</Text>}
                    </CardItem>
                  ))}
                </PaymentsContainer>
                {meta.error && meta.touched && (
                  <ErrorText>{meta.error}</ErrorText>
                )}
              </>
            )
          }}
        />
      </Container>
    </ComponentThemeProvider>
  )
}

export default ChoosePayment
