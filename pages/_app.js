import Head from "next/head";
import { useEffect } from "react";
import '../styles/globals.css'
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
    useEffect(() => {
      /* we also run "yarn add @popperjs/core" command to resolve popper.js issue */
      import("bootstrap/dist/js/bootstrap");
    }, []);
  return <>

    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Component {...pageProps} />
    
  </> 
}

export default MyApp