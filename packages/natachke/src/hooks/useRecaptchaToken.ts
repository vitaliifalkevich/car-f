import { useCallback, useEffect, useState } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

export const useRecaptchaToken = (tag: string) => {
  const [recaptchaToken, setRecaptchaToken] = useState<string | undefined>(
    undefined,
  )
  const { executeRecaptcha } = useGoogleReCaptcha()

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) return
    return await executeRecaptcha(tag)
  }, [executeRecaptcha, tag])

  useEffect(() => {
    handleReCaptchaVerify().then(data => {
      setRecaptchaToken(data)
    })
  }, [handleReCaptchaVerify])

  return { recaptchaToken }
}
