import { useTransitionFix } from 'lib/useTransitionFix'
import MainLayout from 'components/MainLayout'
import { AppProps } from 'next/app'

import '../styles/app.scss'

function App({ Component, pageProps, router }: AppProps) {
  useTransitionFix()

  if (router.route === '/work/[slug]') return <Component {...pageProps} key={router.route} />

  return (
    <MainLayout route={router.route}>
      <Component {...pageProps} key={router.route} />
    </MainLayout>
  )
}

export default App
