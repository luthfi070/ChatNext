import styles from "../../styles/Chatroom.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <div>
      <Head className={styles.Head}>
        <title>Contact Me</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.card}>
          <h3>About</h3>
          <Image src="/m1.jfif" alt="Picture of Me" width={150} height={150} />
          <br />
          <p>
            Hello ! my name is Luthfi Fitra Musyaffa, im currently residing in
            Indonesia, Bandung. Im studying Information System at Telkom
            University right now, but open to every opportunities.
            <br />
            <br />
            Im someone who you can talk to when you have trouble and im someone
            that will do anything to solve a problem. I have some front end
            experiences and experiences on another programming languange too (
            python, java ).
            <br />
            <br />
            Here is my Contact Info :
            <br />-{" "}
            <a
              href="https://www.linkedin.com/in/luthfifitram/"
              style={{ color: "black" }}
            >
              Linkedin
            </a>
            <br />
            - luthfimusafa@gmail.com
            <br />
            - 089646459831
            <br />
            <br />
            You can check more works by me here :
            <br />-{" "}
            <a href="https://github.com/luthfi070" style={{ color: "black" }}>
              Github
            </a>
            <br />-{" "}
            <a
              href="https://www.notion.so/Hello-I-m-Luthfi-953aa6220885401ebbac119cd0d4368c"
              style={{ color: "black" }}
            >
              Portofolio
            </a>
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

export default Contact;
