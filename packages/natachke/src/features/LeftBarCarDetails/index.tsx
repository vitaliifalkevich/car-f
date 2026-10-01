import React, { useMemo } from 'react'
import { UserInfoCarPage } from 'ui/UserInfo'
import PublishedAt from './PublishedAt'
import IncludedTop from './IncludedTop'
import ShareSocial from 'features/ShareSocial'
import { decodePhone, generateCarUrl } from '../../utils'
import { CarInfoResponseCarUser } from '@handber/natachke-api-client'
import { env } from '../../config'

interface LeftBarCarDetailsProps {
  url?: string
  date?: Date
  user?: CarInfoResponseCarUser
  currentCarId?: number
  carInTopCatalog: boolean
}

const LeftBarCarDetails: React.FC<LeftBarCarDetailsProps> = ({
  url,
  date,
  user,
  currentCarId,
  carInTopCatalog,
}) => {

  const userPhone = useMemo(() => {
    return user?.phone && decodePhone(user?.phone)
  }, [user])


  return (
    <div>
      <UserInfoCarPage
        seller={user?.first_name}
        sellerId={user?.id}
        phoneNumber={userPhone}
        isEmailConfirmed={user?.verifiedEmail}
        isPhoneConfirmed={user?.verifiedPhone}
        carId={currentCarId}
        avatar={user?.avatar}
        openChat={() => {}}
        opponentId={user?.id}
      />

      <PublishedAt date={date} />
      {env.topCatalogServiceEnabled && carInTopCatalog ? <IncludedTop /> : null}

      {url && <ShareSocial shareUrl={generateCarUrl(url)} />}

    </div>
  )
}

export default LeftBarCarDetails
