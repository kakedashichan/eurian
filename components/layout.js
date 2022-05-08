import Head from 'next/head';
import styles from './layout.module.css';

export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, backgroundColor }) {
  return (
    <div style={{ backgroundColor }}>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="エウリアンに危うく26万の絵画を買わされそうになった話です"
          />
        </Head>
        <main>{children}</main>
      </div>
    </div>
  );
}
