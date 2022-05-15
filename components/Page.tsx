import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import styles from '../styles/components/page.module.scss';

interface Props {
  children: ReactNode;
}

function Page({ children }: Props) {
  return (
    <motion.div
      className={styles.root}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, type: 'tween', ease: 'easeInOut' }}>
      {children}
    </motion.div>
  );
}

export default Page;
