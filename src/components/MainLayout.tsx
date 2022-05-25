import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/components/main-layout.module.scss'
import clsx from 'clsx'
import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

interface Props {
  route: string
  children: ReactNode
}

function MainLayout({ children, route }: Props) {
  const router = useRouter()
  const { t } = useTranslation()

  return (
    <div className={styles.root}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1 maximum-scale=1, user-scalable=0" />
      </Head>

      {route !== '/work/[slug]' && (
        <div className={styles.navbarWrapper}>
          <div className={styles.navbar}>
            <Link href="/">
              <a>
                <div className={clsx(route === '/' && styles.active)}>{t('menu_about')}</div>
              </a>
            </Link>
            <Link href="/work">
              <a>
                <div className={clsx(route === '/work' && styles.active)}>{t('menu_work')}</div>
              </a>
            </Link>
            <Link href="/resume">
              <a>
                <div className={clsx(route === '/resume' && styles.active)}>{t('menu_resume')}</div>
              </a>
            </Link>
            <Link href="/contact">
              <a>
                <div className={clsx(route === '/contact' && styles.active)}>{t('menu_contact')}</div>
              </a>
            </Link>
            <Link href={router.pathname} as={router.asPath} locale={router.locale === 'en' ? 'tr' : 'en'}>
              <a>
                <div>{router.locale === 'en' ? 'TR' : 'EN'}</div>
              </a>
            </Link>
          </div>
        </div>
      )}
      <AnimatePresence>{children}</AnimatePresence>
    </div>
  )
}

export default MainLayout
