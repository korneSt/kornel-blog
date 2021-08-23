import NextLink from 'next/link';
import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <NextLink href="/">
        <a className={styles.btn}>Blog</a>
      </NextLink>
      <NextLink href="/about">
        <a>About</a>
      </NextLink>
      <NextLink href="/contact">
        <a>Contact</a>
      </NextLink>
    </nav>
  );
}
