import React from 'react'
import CarCardListMobile, { CarCardListProps } from '../CarCardListMobile'
import { UserInfoWithMessage } from '../../UserInfo'
import { Container } from './styled'
import { decodePhone } from 'utils'

const CarFavoriteListMobile: React.FC<CarCardListProps> = props => {
  return (
    <Container>
      <CarCardListMobile {...props} withMakeNote={true} />
      {'user' in props && (
        <UserInfoWithMessage
          sellerId={props?.user?.id}
          seller={`${props?.user?.first_name || ''} ${
            props.user?.last_name || ''
          }`}
          region={props.user?.city || ''}
          avatar={props.user?.avatar}
          phoneNumber={decodePhone(props.user?.phone)}
        />
      )}
    </Container>
  )
}

export default CarFavoriteListMobile
