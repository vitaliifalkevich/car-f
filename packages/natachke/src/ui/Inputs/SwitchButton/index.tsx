import React from 'react'
import {
  RoundIcon,
  SwitchLabel,
  SwitchBackground,
  LabelText,
  Container,
  Description,
} from './styled'
import themes from './themes'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import { useTranslation } from 'react-i18next'

export interface SwitchButtonProps {
  onChange: (event: React.ChangeEvent | any) => void
  checked?: boolean
  title?: string
  description?: string
}

const SwitchButton: React.FC<SwitchButtonProps> = props => {
  const { t } = useTranslation()

  return (
    <ComponentThemeProvider themes={themes}>
      <Container>
        <SwitchLabel>
          <input type="checkbox" {...props} />

          <SwitchBackground>
            <RoundIcon />
          </SwitchBackground>
        </SwitchLabel>
        <div>
          <LabelText>
            {props.title ? props.title : !!props?.checked ? t('yes') : t('no')}
          </LabelText>
          {props.description ? (
            <Description>{props.description}</Description>
          ) : null}
        </div>
      </Container>
    </ComponentThemeProvider>
  )
}

export default React.memo(SwitchButton)
