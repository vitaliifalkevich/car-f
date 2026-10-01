import React from 'react'
import {
  Container,
  HeaderContainer,
  TextHeader,
  HeaderLabel,
  TextDescription,
  InputWrapper,
} from './styled'
import { InputText } from 'ui/Inputs'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import { useTranslation } from 'react-i18next'
import { CheckSuccessIcon } from '../../styled'
import ErrorText from 'ui/ErrorText'
import { Field } from 'react-final-form'
const VinCode: React.FC = () => {
  const { t } = useTranslation()
  return (
    <ComponentThemeProvider themes={themes}>
      <Container>
        <HeaderContainer>
          <HeaderLabel />
          <TextHeader>{t('code')}</TextHeader>
        </HeaderContainer>
        <InputWrapper>
          <Field
            name="vin"
            render={({ input, meta }) => (
              <div>
                {meta.valid && meta.visited && input.value && (
                  <CheckSuccessIcon />
                )}

                <InputText
                  {...input}
                  placeholder="xxx xxxxx x x x xxxxx"
                  maxLength={17}
                />
                {meta.error && meta.touched && (
                  <ErrorText>{meta.error}</ErrorText>
                )}
              </div>
            )}
          />
        </InputWrapper>
        <TextDescription>
          {t('setVinCodeAdvantagesDescription')}
        </TextDescription>
      </Container>
    </ComponentThemeProvider>
  )
}

export default VinCode
