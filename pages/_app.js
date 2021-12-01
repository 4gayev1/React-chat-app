import "../styles/global.css";
import "../styles/chats.css";
import"../styles/Login.module.css";
import { ContextProvider } from "../context";

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}