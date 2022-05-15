import Link from 'next/link'
import styles from '../styles/components/button.module.scss'
import clsx from 'clsx'
import { ReactNode } from 'react'

interface Props {
  link: string
  renderATag?: boolean
  className?: string
  children: ReactNode
}

function Button({ link, renderATag, className, children }: Props) {
  if (renderATag) {
    return (
      <a href={link} target="blank" rel="noopener noreferrer">
        <div className={clsx(styles.root, className)}>{children}</div>
      </a>
    )
  }

  return (
    <Link href={link}>
      <div className={clsx(styles.root, className)}>{children}</div>
    </Link>
  )
}

export default Button
