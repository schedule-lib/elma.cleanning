import { Footer } from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div id="keep-menu" />

      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
