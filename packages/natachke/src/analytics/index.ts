export enum GtagEvents {
  LOGIN = 'login',
  LOGIN_ERROR = 'login_error',
  SIGNUP = 'signup',
  SIGNUP_ERROR = 'signup_error',
  UPLOAD_IMAGES = 'upload_images',
  UPLOAD_IMAGES_ERROR = 'upload_images_error',
  SELL_CAR = 'sell_car',
  SELL_CAR_ERROR = 'sell_car_error',
  EDIT_CAR = 'edit_car',
  EDIT_CAR_ERROR = 'edit_car_error',
  PRESS_TRUE_CAR_BTN_HOME = 'press_true_car_btn_home',
  PRESS_LAST_ADDED_BTN_HOME = 'press_last_added_btn_home',
  PRESS_VIEW_PHONE = 'press_view_phone',
  PRESS_SHARE_SOCIAL_FB = 'press_share_social_fb',
  PRESS_SHARE_SOCIAL_TELEGRAM = 'press_share_social_telegram',
  PRESS_SHARE_SOCIAL_TWITTER = 'press_share_social_tw',
  PRESS_SHARE_SOCIAL_COPY_LINK = 'press_share_social_copy_link',
  PRESS_RECEIVE_PROMOS = 'press_receive_promos',
  INSTALL_PWA = 'install_pwa',
}

export const gtag = function (...arg: any) {
  // @ts-ignore
  if (window?.dataLayer) {
    // @ts-ignore
    window.dataLayer?.push?.(arguments)
  }
}

export const gtagEvent = (
  eventName: GtagEvents,
  additionalData?: { [key: string]: string | number | undefined },
) => {
  if (!additionalData) {
    gtag('event', eventName)
  } else {
    gtag('event', eventName, additionalData)
  }
}
