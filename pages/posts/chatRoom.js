import Layout from "../../components/layout";
import styles from "../../styles/Chatroom.module.css";
import Head from "next/head";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendMessage } from "../../state/actions";
import Link from "next/link";
import { useRouter } from "next/router";

const ChatRoom = () => {
  const router = useRouter();
  const [message, setMessage] = useState();
  const dispatch = useDispatch();
  const msg = useSelector((state) => state.senderA);
  const { sender } = router.query;

  const send = () => {
    dispatch(sendMessage(message, sender));
  };

  return (
    <div>
      <Head>
        <title>Chat Room</title>
      </Head>

      <main>
        <div className={styles.main}>
          <div className={styles.card}>
            <h3>
              User {sender}
              <Link href="/">
                <button
                  className={styles.sendButton}
                  style={{ marginLeft: 1020 }}
                >
                  back
                </button>
              </Link>
            </h3>
            <div className={styles.innerCard}>
              {msg == null ? (
                <p>Belum ada pesan saat ini</p>
              ) : (
                msg.map((msg) => {
                  return (
                    <p>
                      {msg.sender} : {msg.msg}
                    </p>
                  );
                })
              )}
            </div>
            <div>
              <input
                type="text"
                className={styles.inputText}
                onChange={(evt) => setMessage(evt.target.value)}
              />
              <button
                type="submit"
                className={styles.sendButton}
                onClick={() => send()}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChatRoom;
