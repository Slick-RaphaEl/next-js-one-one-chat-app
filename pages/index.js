import Head from 'next/head';
import styled from "styled-components";
import ChatScreen from '../components/ChatScreen';
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Chat web app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />
     
   
    </div>
  );
}
