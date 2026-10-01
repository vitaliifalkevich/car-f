import i18next from 'i18next'

const changeLanguage = async lng => {
  await i18next.changeLanguage(lng)
}

export default changeLanguage
