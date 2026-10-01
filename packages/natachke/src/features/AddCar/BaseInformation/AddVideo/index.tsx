import React, { useState } from 'react'
import styled from 'styled-components'
import { InputText } from 'ui/Inputs'
import ErrorText from 'ui/ErrorText'
import { Field } from 'react-final-form'
import AddVideoLabel from 'ui/AddVideoLabel'
import { useTranslation } from 'react-i18next'
import { CheckSuccessIcon } from '../../styled'

const VideoInputContainer = styled.div`
  margin-top: 12px;
  & > div {
    position: relative;
  }
`

const AddVideo: React.FC = () => {
  const { t } = useTranslation()
  const [isVideoOpen, setVideoOpen] = useState(false)
  return (
    <div>
      <AddVideoLabel
        onClick={() => {
          setVideoOpen(true)
        }}
      />
      {isVideoOpen && (
        <Field
          name="video"
          render={({ input, meta }) => (
            <VideoInputContainer>
              <div>
                {meta.valid && meta.visited && input.value && (
                  <CheckSuccessIcon />
                )}
                <InputText
                  {...input}
                  placeholder={t('createCar.insertVideoLink')}
                />
                {meta.error && meta.touched && (
                  <ErrorText>{meta.error}</ErrorText>
                )}
              </div>
            </VideoInputContainer>
          )}
        />
      )}
    </div>
  )
}

export default AddVideo
