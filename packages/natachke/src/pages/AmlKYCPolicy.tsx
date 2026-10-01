import React from 'react'
import { LegacyText as Text, PageTitle, Paragraph } from '../ui/Text'
import { MainContainer } from '../ui/Containers'
import { useTranslation } from 'react-i18next'

const AmlKYCPolicy: React.FC = () => {
  const { t } = useTranslation('amlKYCPolicy')

  const chapters = t('chapters', {
    returnObjects: true,
  })

  return (
    <main>
      <MainContainer>
        <PageTitle withBorder={true}>{t(`title`)}</PageTitle>
        <div>
          {Object.keys(chapters).map((itemNum, idx) => {
            const item = chapters[itemNum]
            return (
              <div key={idx}>
                <Paragraph>{item.title}</Paragraph>

                {Object.keys(item.text).map(paragraphNum => (
                  <Text>{item.text[paragraphNum]}</Text>
                ))}
              </div>
            )
          })}
        </div>
      </MainContainer>
    </main>
  )
}

export default AmlKYCPolicy
