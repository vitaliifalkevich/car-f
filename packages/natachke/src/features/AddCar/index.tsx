import React, { useCallback, useMemo, useRef, useState } from 'react'
import { PageTitle } from 'ui/Text'
import { MainContainer } from 'ui/Containers'
import { useTranslation } from 'react-i18next'
import HorizontalSteps from 'ui/HorizontalSteps'
import { useScrollIntoView } from 'hooks'
import BaseInformation from './BaseInformation'
import CarForm from './CarForm'
import TechSpecs from './TechSpecs'
import UserInformation from './UserInformation'
import { CREATE_CAR_TYPE } from '../../config'

const AddCar: React.FC<{
  type: CREATE_CAR_TYPE
  initialValues: any
}> = ({ initialValues, type }) => {
  const { t } = useTranslation()

  const [activeStep, setActiveStep] = useState(0)
  const [showSecurity, showSecurityFields] = useState(false)
  const [showComfort, showComfortFields] = useState(false)
  const [showMultimedia, showMultimediaFields] = useState(false)
  const pageTitleRef = useRef(null)
  const scrollIntoView = useScrollIntoView({ ref: pageTitleRef })
  const steps = useMemo(
    () => [
      t('createCar.steps.baseInfo'),
      t('createCar.steps.techInfo'),
      t('createCar.steps.publish'),
    ],
    [t],
  )

  const setNextStep = useCallback(() => {
    setActiveStep(activeStep + 1)
    scrollIntoView()
  }, [activeStep, scrollIntoView])
  const setPrevStep = useCallback(() => {
    if (activeStep > 0) setActiveStep(activeStep - 1)
    scrollIntoView()
  }, [activeStep, scrollIntoView])

  return (
    <main>
      <MainContainer>
        <div ref={pageTitleRef}>
          <PageTitle withBorder={true}>
            {type === CREATE_CAR_TYPE.CREATE
              ? t(`createCar.title`)
              : t(`editCar.title`)}
          </PageTitle>
        </div>
        <HorizontalSteps activeStep={activeStep} steps={steps} />
        <CarForm initialValues={initialValues} type={type}>
          {activeStep === 0 && (
            <BaseInformation setNextStep={setNextStep} type={type} />
          )}
          {activeStep === 1 && (
            <TechSpecs
              setNextStep={setNextStep}
              setPrevStep={setPrevStep}
              showSecurity={showSecurity}
              showSecurityFields={showSecurityFields}
              showComfort={showComfort}
              showComfortFields={showComfortFields}
              showMultimedia={showMultimedia}
              showMultimediaFields={showMultimediaFields}
            />
          )}
          {activeStep === 2 && <UserInformation setPrevStep={setPrevStep} />}
        </CarForm>
      </MainContainer>
    </main>
  )
}

export default AddCar
