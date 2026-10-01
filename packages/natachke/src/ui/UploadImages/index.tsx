import React from 'react'
import { CreateCarResponseCarImages } from '@handber/natachke-api-client'
import { FileRejection, DropEvent } from 'react-dropzone'
import { Container, Upload, UploadedImage, ErrorContainer } from './styled'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import { getImageUrl } from '../../utils'
import ErrorText from '../ErrorText'
import { useTranslation } from 'react-i18next'
import config from 'config'
import { useSelector } from 'react-redux'
import {
  getCarImagesErrors,
  getUploadCarImagesLoading,
} from '../../entities/Car/selectors'
const { minImagesToBeUploaded, maxImagesToBeUploaded } = config

export interface ExtendedFile extends File {
  preview: string
  id: string
}

export interface UploadImagesProps {
  onFileDrop: <T extends File>(
    acceptedFiles: T[],
    fileRejections: FileRejection[],
    event: DropEvent,
  ) => void
  files: CreateCarResponseCarImages[]
  setDefaultImage: (id: string) => void
  defaultImage?: string | null
  removeImage: (id: string) => void
}

const UploadImages: React.FC<UploadImagesProps> = ({
  onFileDrop,
  files,
  setDefaultImage,
  defaultImage,
  removeImage,
}) => {
  const { t } = useTranslation()
  const isUploadImagesLoading = useSelector(getUploadCarImagesLoading)
  const { t: tApiErr } = useTranslation('apiErrors')
  const carImagesError = useSelector(getCarImagesErrors)
  return (
    <ComponentThemeProvider themes={themes}>
      <div>
        <Container>
          {files.map((file, idx) => (
            <UploadedImage
              key={`uploadedImage${idx}${file.image_key}`}
              image={
                file?.image_location ? getImageUrl(file?.image_location) : ''
              }
              isDefault={defaultImage === file.image_key}
              setDefault={() => {
                file.image_key && setDefaultImage(file.image_key)
              }}
              removeImage={() => {
                file.image_key && removeImage(file.image_key)
              }}
            />
          ))}
          <Upload onFileDrop={onFileDrop} />
        </Container>
        <ErrorContainer>
          {files.length > 0 && files.length < minImagesToBeUploaded ? (
            <ErrorText>
              {!isUploadImagesLoading &&
                t('errors.minImagesToBeUploaded', {
                  count: minImagesToBeUploaded,
                })}
            </ErrorText>
          ) : null}
          {files.length > 0 && files.length > maxImagesToBeUploaded ? (
            <ErrorText>
              {t('errors.maxImagesToBeUploaded', {
                count: maxImagesToBeUploaded,
              })}
            </ErrorText>
          ) : null}
          {carImagesError && (
            <ErrorText>{tApiErr(`${carImagesError.toLowerCase()}`)}</ErrorText>
          )}
        </ErrorContainer>
      </div>
    </ComponentThemeProvider>
  )
}

export default UploadImages
