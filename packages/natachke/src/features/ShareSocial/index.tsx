import React, { useCallback, useEffect, useState } from 'react'
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
} from 'react-share'
import copyToClipboard from 'copy-to-clipboard'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import { useTranslation } from 'react-i18next'
import themes from './themes'
import { Container, Item, Icon, Text, Copied, CopyIcon } from './styled'
import { copy, twitter, telegram, facebook } from 'assets/icons/social/assets'
import { gtagEvent, GtagEvents } from '../../analytics'

const ShareSocial: React.FC<{
  shareUrl: string
  title?: string | React.ReactNode
}> = ({ shareUrl, title }) => {
  const { t } = useTranslation()
  const [showCopied, setShowCopied] = useState(false)
  const onClickCopy = useCallback(() => {
    copyToClipboard(shareUrl)
    setShowCopied(true)
    //send analytics event
    gtagEvent(GtagEvents.PRESS_SHARE_SOCIAL_COPY_LINK)
  }, [shareUrl])

  useEffect(() => {
    setTimeout(() => {
      setShowCopied(false)
    }, 500)
  }, [showCopied])

  return (
    <ComponentThemeProvider themes={themes}>
      <>
        {title ? title : <Text>{t('shareSocial')}</Text>}
        <Container>
          <FacebookShareButton
            url={shareUrl}
            onClick={() => {
              //send analytics event
              gtagEvent(GtagEvents.PRESS_SHARE_SOCIAL_FB)
            }}
          >
            <Item>
              <Icon src={facebook} alt="facebook" />
            </Item>
          </FacebookShareButton>
          <TwitterShareButton
            url={shareUrl}
            onClick={() => {
              //send analytics event
              gtagEvent(GtagEvents.PRESS_SHARE_SOCIAL_TWITTER)
            }}
          >
            <Item>
              <Icon src={twitter} alt="twitter" />
            </Item>
          </TwitterShareButton>
          <TelegramShareButton
            url={shareUrl}
            onClick={() => {
              //send analytics event
              gtagEvent(GtagEvents.PRESS_SHARE_SOCIAL_TELEGRAM)
            }}
          >
            <Item>
              <Icon src={telegram} alt="telegram" />
            </Item>
          </TelegramShareButton>
          <Item onClick={onClickCopy}>
            <CopyIcon src={copy} alt="copy" />
            {showCopied && <Copied>{t('copied')}</Copied>}
          </Item>
        </Container>
      </>
    </ComponentThemeProvider>
  )
}

export default ShareSocial
