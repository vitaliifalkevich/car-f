import React, { useCallback, useMemo } from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import { Container, Item, Line } from './styled'
import { StepState } from './types'

interface HorizontalStepsProps {
  steps: string[]
  activeStep: number
}

const HorizontalSteps: React.FC<HorizontalStepsProps> = ({
  activeStep,
  steps,
}) => {
  const generateStepState = useCallback(
    (idx: number, activeStep: number): StepState => {
      if (idx < activeStep) return StepState.FINISHED
      if (idx === activeStep) return StepState.ACTIVE
      return StepState.NEXT
    },
    [],
  )
  const preparedSteps = useMemo(() => {
    return steps.map((step, idx) => ({
      label: step,
      state: generateStepState(idx, activeStep),
    }))
  }, [activeStep, generateStepState, steps])
  return (
    <ComponentThemeProvider themes={themes}>
      <Container>
        {preparedSteps.map((step, idx) => (
          <React.Fragment key={`steps${idx}${step.state}`}>
            <Item {...step} idx={idx} />
            {idx < preparedSteps.length - 1 && (
              <Line countEl={preparedSteps.length + preparedSteps.length - 1} />
            )}
          </React.Fragment>
        ))}
      </Container>
    </ComponentThemeProvider>
  )
}

export default HorizontalSteps
