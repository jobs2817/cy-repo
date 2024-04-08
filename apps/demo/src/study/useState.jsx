import { useState, useEffect, Suspense } from 'react'
import { useTranslation } from 'react-i18next'

export default function UseState() {
  const [name, setName] = useState('study111222 react')
  // const { t, i18n } = useTranslation('member')
  const { t, i18n } = useTranslation('order')

  useEffect(() => {
    document.title = name
  }, [name])

  const changeLanguage = () => {
    // alert(1)
    i18n.changeLanguage('zh')
  }
  return (
    <div>
      <span>{name}</span>
      <ul>
        <li onClick={() => changeLanguage()}>多语言</li>
        <Suspense fallback={<div>Loading translations...</div>}>
          <li>{t('form.name')}</li>
        </Suspense>
      </ul>
    </div>
  )
}
