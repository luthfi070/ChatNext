import styles from "../../styles/Chatroom.module.css";
import Head from "next/head";
import Link from "next/link";
const About = () => {
  return (
    <div>
      <Head className={styles.Head}>
        <title>About</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.card}>
          <h3>About</h3>
          <p>
            This is a very simple chat web, the main purpose of this web is to
            demonstrate the useful of Redux and Next by using ReactJS (and this
            is the most easiest and doable simple project for me) plus just to
            kill some time during my semester holiday.
            <br />
            <br />
            Here i try to implement glassmorphism ( while i think its not too
            "glassy") design to make it more interesting. The tech that i used
            here is ReactJS, NextJS, and Redux.
            <br />
            <br />
            <h3>How to use</h3>
            1. Go to{" "}
            <Link href="/">
              <a style={{ color: "black" }}>home page</a>
            </Link>
            <br />
            2. Choose what user do you want to use ( User A or User B)
            <br />
            3. Start sending message, and check it on the other User to see it
            <br />
            <br />
            <h3>How Does it works</h3>
            <p>
              This website is created by using ReactJS, so it is state based and
              by useful of Redux it is much more easier, here everytime a user A
              send a message it will create a State Hook (not a Redux State),
              after that when the user click the send button it will send that
              state to Redux State so it became global and can be accessed on
              another page / file. While the use of Next is simply for Routing,
              it is much more easier rather than using react-router ( in my
              opinion ). Just like i said before, this web is simply for
              demonstrating the useful of Next and Redux
            </p>
          </p>
          <br />
          <Link href="/">
            <button className={styles.sendButton}>Go Back</button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default About;
