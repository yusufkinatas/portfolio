import 'react-i18next'
import 'i18next'

import common from './public/locales/en/common.json'
import home from './public/locales/en/home.json'
import resume from './public/locales/en/resume.json'
import work from './public/locales/en/work.json'

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common'
    resources: {
      common: typeof common
      home: typeof home
      resume: typeof resume
      work: typeof work
    }
  }
}
