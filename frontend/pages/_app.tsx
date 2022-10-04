import type { AppProps } from "next/app";
import GlobalStyles from "../styles/Global.style";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
