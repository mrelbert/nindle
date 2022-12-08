import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nindle</title>
        <meta name="description" content="Sync your Kindle highlights" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href="/about">Nindle</Link>
        </h1>

        <p className={styles.description}>
          Get started by authenticating your{" "}
          <Link className="hover:text-blue-500" href="/"><code className={styles.code}>notion database!</code></Link>
        </p>

        <div className={styles.grid}>
          <Link
            href={`https://api.notion.com/v1/oauth/authorize?client_id=${
              process.env.NINDLE_CLIENT_ID as string
            }&response_type=code&owner=user&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fform`}
            className={styles.card}
          >
            <h2>OAuth 2.0 &rarr;</h2>
            <p>Authorize your account</p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
