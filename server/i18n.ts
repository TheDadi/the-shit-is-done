import * as i18next from 'i18next'
import * as XHR from 'i18next-xhr-backend'
import * as LanguageDetector from 'i18next-browser-languagedetector'
import { InitOptions } from 'i18next'

const options: InitOptions = {
  fallbackLng: 'de',
  load: 'languageOnly', // we only provide en, de -> no region specific locals like en-US, de-DE

  // have a common namespace used around the full app
  ns: ['common'],
  defaultNS: 'common',

  debug: process.env.NODE_ENV !== 'production',
  saveMissing: true,

  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
    format: (value, format) => {
      if (format === 'uppercase') {
        return value.toUpperCase()
      }
      return value
    },
  },
}

const i18nInstance = i18next

if (process.browser) {
  i18nInstance
    .use(XHR)
    .use(LanguageDetector)
}

// initialize if not already initialized
if (!i18nInstance.isInitialized) {
  i18nInstance.init(options)
}

// a simple helper to getInitialProps passed on loaded i18n data
const getInitialProps = (req, namespaces) => {
  if (!namespaces) namespaces = i18nInstance.options.defaultNS
  if (typeof namespaces === 'string') namespaces = [namespaces]

  req.i18n.toJSON = () => null // do not serialize i18next instance and send to client

  const initialI18nStore = {}
  req.i18n.languages.forEach((l) => {
    initialI18nStore[l] = {}
    namespaces.forEach((ns) => {
      initialI18nStore[l][ns] = (req.i18n.services.resourceStore.data[l] || {})[ns] || {}
    })
  })

  return {
    i18n: req.i18n, // use the instance on req - fixed language on request (avoid issues in race conditions with lngs of different users)
    initialI18nStore,
    initialLanguage: req.i18n.language,
  }
}


export default {
  getInitialProps,
  i18nInstance,
  // @ts-ignore
  I18n: i18next.default,
}
