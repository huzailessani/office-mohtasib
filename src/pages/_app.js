import "bootstrap/dist/css/bootstrap.min.css";
import { SidebarProvider } from "@/context/SidebarContext";
import "@/styles/globals.css";
import { useEffect } from "react";
import Link from "next/link";
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <SidebarProvider>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
        />
      </Head>
      <Component {...pageProps} />
    </SidebarProvider>
  );
}
