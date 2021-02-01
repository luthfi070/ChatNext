import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chat!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Chat!</h1>

        <div className={styles.grid}>
          <Link
            href={{
              pathname: "/posts/chatRoom",
              query: { sender: "A" },
            }}
          >
            <div className={styles.card}>
              <h3>User A &rarr;</h3>
              <p>Start chatting with User B by choosing User A.</p>
            </div>
          </Link>

          <Link
            href={{
              pathname: "/posts/chatRoom",
              query: { sender: "B" },
            }}
          >
            <div className={styles.card}>
              <h3>User B &rarr;</h3>
              <p>Start chatting with User A by choosing User B.</p>
            </div>
          </Link>

          <Link href="/posts/About">
            <div className={styles.card}>
              <h3>About &rarr;</h3>
              <p>Discover about this web and its tech.</p>
            </div>
          </Link>

          <Link href="/posts/Contact">
            <div className={styles.card}>
              <h3>Contact Me &rarr;</h3>
              <p>Find more about me and my personal contact.</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
