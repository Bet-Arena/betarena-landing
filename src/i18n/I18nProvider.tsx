import { useEffect, useState, type ReactNode } from 'react'
import { I18nContext } from './context'
import { translations, type Locale } from './translations'

const LOCALE_STORAGE_KEY = 'betarena-locale'

const getInitialLocale = (): Locale => {
  if (typeof window === 'undefined') {
    return 'ru'
  }

  const savedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY)

  return savedLocale === 'en' ? 'en' : 'ru'
}

interface I18nProviderProps {
  children: ReactNode
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale)
    document.documentElement.lang = locale
  }, [locale])

  return (
    <I18nContext.Provider
      value={{
        locale,
        setLocale,
        messages: translations[locale],
      }}
    >
      {children}
    </I18nContext.Provider>
  )
}
