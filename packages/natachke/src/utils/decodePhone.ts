import config from 'config'
import { verify } from 'jsonwebtoken'
const { phone_crypto_code } = config

export const decodePhone = (encodedPhone?: string): string =>
  encodedPhone ? verify(encodedPhone, phone_crypto_code)?.data || '' : ''
