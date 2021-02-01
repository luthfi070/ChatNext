import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import { useSelector, useDispatch } from "react-redux";
import { increment, changeText } from "../../state/actions";

const FirstPost = () => {
  const [myTitle, setTitle] = useState(null);
  const counter = useSelector((state) => state.myCount);
  const dispatch = useDispatch();

  const chat = () => {
    dispatch(changeText(myTitle));
  };

  return (
    <Layout>
      <div>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Posts</h1>
        <Link href="/">
          <a>next.js! {counter} </a>
        </Link>
        <button onClick={() => dispatch(increment())}>+</button>
        <input type="text" onChange={(v) => setTitle(v.target.value)} />
        <button onClick={() => chat()}>Submit</button>
      </div>
    </Layout>
  );
};

export default FirstPost;
