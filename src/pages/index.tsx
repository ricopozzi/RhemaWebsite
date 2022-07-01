import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Header } from "../components/header";
import { Main } from "../components/main";
import { Services } from "../components/services";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rhema | Início</title>
      </Head>
      <section className='min-h-screen'>
        <Header />
        <Main />
        <Services />
      </section>
    </>
  );
};

export default Home;
