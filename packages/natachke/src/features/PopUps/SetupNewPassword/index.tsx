import React, { useCallback, useState } from 'react'
import Modal from 'ui/Modal'
import SetupNewPasswordStep1 from './Step1'
import SetupNewPasswordStep2 from './Step2'

const SetupNewPassword: React.FC = () => {
  const [step, setStep] = useState(1)

  const setNextStep = useCallback(() => {
    setStep(step + 1)
  }, [step])

  return (
    <Modal width="350px" height="auto">
      {step === 1 ? (
        <SetupNewPasswordStep1 setNextStep={setNextStep} />
      ) : (
        <SetupNewPasswordStep2 />
      )}
    </Modal>
  )
}

export default SetupNewPassword
