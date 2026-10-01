import React, { useCallback, useState } from 'react'
import Modal from 'ui/Modal'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import ResetPasswordStep1 from './Step1'
import ResetPasswordStep2 from './Step2'

const ResetPassword: React.FC = () => {
  const [step, setStep] = useState(1)
  const setNextStep = useCallback(() => {
    setStep(step + 1)
  }, [step])
  return (
    <Modal width="350px" height="auto">
      <ComponentThemeProvider themes={themes}>
        <>
          {step === 1 ? (
            <ResetPasswordStep1 setNextStep={setNextStep} />
          ) : (
            <ResetPasswordStep2 />
          )}
        </>
      </ComponentThemeProvider>
    </Modal>
  )
}

export default ResetPassword
