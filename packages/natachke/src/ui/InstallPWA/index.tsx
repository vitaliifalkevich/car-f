import React, { useCallback, useEffect, useState } from 'react'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import { useTranslation } from 'react-i18next'
import { useBreakpoint } from 'MediaQueriesProvider'
import { Container, Close, Image, Text } from './styled'
import themes from './themes'
import { useNotificationVisibility } from './useNotificationVisibility'
import { gtagEvent, GtagEvents } from '../../analytics'

const InstallPWA = () => {
  const { t } = useTranslation()
  const breakpoints = useBreakpoint()
  const [supportsPWA, setSupportsPWA] = useState(false)
  const [promptInstall, setPromptInstall] = useState<any>(null)

  const {
    isInstallAppClosed,
    closeInstallAppHandler,
  } = useNotificationVisibility()

  useEffect(() => {
    const handler = e => {
      e.preventDefault()
      setSupportsPWA(true)
      setPromptInstall(e)
    }
    window.addEventListener('beforeinstallprompt', handler)

    return () => window.removeEventListener('transitionend', handler)
  }, [])

  useEffect(() => {
    window.addEventListener('appinstalled', () => {
      //send analytics event
      gtagEvent(GtagEvents.INSTALL_PWA)
    })
  }, [])

  const onClick = useCallback(
    e => {
      if (e.target.closest('.close-install')) return

      e.preventDefault()
      if (!promptInstall) {
        return
      }
      promptInstall?.prompt?.()
    },
    [promptInstall],
  )

  if (!supportsPWA || isInstallAppClosed) {
    return null
  }
  return (
    <>
      {(breakpoints.mobile || breakpoints.tablet) && (
        <ComponentThemeProvider themes={themes}>
          <Container onClick={onClick} className="app-install-btn">
            <Image src="/install.svg" alt="install app" />
            <Text> {t('installAndUseApp')}</Text>
            <Close onClick={closeInstallAppHandler} />
          </Container>
        </ComponentThemeProvider>
      )}
    </>
  )
}

export default InstallPWA
