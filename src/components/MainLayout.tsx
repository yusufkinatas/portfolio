import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'

import styles from '../styles/components/main-layout.module.scss'
import clsx from 'clsx'
import { ReactNode } from 'react'

interface Props {
  route: string
  children: ReactNode
}

function MainLayout({ children, route }: Props) {
  return (
    <div className={styles.root}>
      <div className={styles.navbarWrapper}>
        <div className={styles.navbar}>
          <Link href="/">
            <a>
              <div className={clsx(route === '/' && styles.active)}>about</div>
            </a>
          </Link>
          <Link href="/work">
            <a>
              <div className={clsx(route === '/work' && styles.active)}>work</div>
            </a>
          </Link>
          <Link href="/resume">
            <a>
              <div className={clsx(route === '/resume' && styles.active)}>resume</div>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <div className={clsx(route === '/contact' && styles.active)}>contact</div>
            </a>
          </Link>
        </div>
      </div>
      <AnimatePresence>{children}</AnimatePresence>
    </div>
  )
}

export default MainLayout
