import Link from 'next/link';

import format from 'date-fns/format'
import ptBr from 'date-fns/locale/pt-BR'

import styles from './styles.module.scss'

export function Header() {
  const currentdate = format(new Date(), 'EEEEEE, d MMM', {
    locale: ptBr
  })
  return (
    <header className={styles.headerContainer}>

      <Link href="/">
        <a>
          <img src="/logo.svg" alt="Podcastr" />
        </a>
      </Link>

      <p>O melhor para você ouvir, sempre</p>

      <span>{currentdate}</span>

    </header >
  );
}