import React from 'react'
import styled from 'styled-components'
import whiteImagePlaceholder from 'assets/icons/whiteImagePlaceholder.svg'
import { useTranslation, Trans } from 'react-i18next'
import { useDropzone } from 'react-dropzone'
import { UploadImageLoader } from '../../Loaders'
import { useSelector } from 'react-redux'
import { getUploadCarImagesLoading } from 'entities/Car/selectors'

const Container = styled.div`
  position: relative;
  border-radius: 8px;
  width: 115px;
  height: 105px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.uploadBackground};
  flex-direction: column;
  cursor: pointer;
`

const Image = styled.img`
  width: 32.25px;
`

const Text = styled.div`
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.textColor};
  font-family: ${({ theme }) => theme.fonts.ralewayRegular};
  margin-top: 8px;
  text-align: center;
`

export default ({ onFileDrop }) => {
  const { t } = useTranslation()
  const isUploadImagesLoading = useSelector(getUploadCarImagesLoading)
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: onFileDrop,
  })
  return (
    <Container {...(getRootProps() as any)}>
      <input {...getInputProps()} multiple={true} />
      <Image src={whiteImagePlaceholder} alt="upload" />
      <Text>
        <Trans>{t('addPhotoBr')}</Trans>
      </Text>
      {isUploadImagesLoading && <UploadImageLoader />}
    </Container>
  )
}
