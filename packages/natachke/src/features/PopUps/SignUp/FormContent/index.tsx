import React, { useCallback, useState } from 'react'
import Step1 from '../Step1'
import Step2 from '../Step2'

const FormContent: React.FC<{ submittingForm?: boolean }> = ({
  submittingForm,
}) => {
  const [step, setStep] = useState(0)
  const setNextStep = useCallback(() => {
    setStep(step + 1)
  }, [step])

  const setPrevStep = useCallback(() => {
    if (step === 0) return
    setStep(step - 1)
  }, [step])

  return (
    <>
      {step === 0 && <Step1 setNextStep={setNextStep} />}
      {step === 1 && (
        <Step2 setPrevStep={setPrevStep} submittingForm={submittingForm} />
      )}
    </>
  )
}

export default FormContent
