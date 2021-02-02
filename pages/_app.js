import { useEffect } from "react";
import "../styles/tailwind.css";
//import "../styles/prism.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return <Component {...pageProps} />;
}

export default MyApp;
