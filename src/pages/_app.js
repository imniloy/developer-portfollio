import "@/styles/globals.css";
import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

const App = ({ Component, pageProps }) => (
  <main className={`${montserrat?.variable} font-mont bg-light dark:bg-dark`}>
    <Component {...pageProps} />
  </main>
);

export default App;
