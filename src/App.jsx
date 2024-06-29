import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ShopApi from "./Components/Main/ShopApi";
import CookieButton from "./Components/Main/CookieButton";
import Reset from "./Components/Main/Reset";
import CookieCounter from "./Components/Main/CookieCounter";
import { useState } from "react";

export default function App() {
  // }
  const [cookies, setCookies] = useState(0);
  const [cps, setCps] = useState(0);

  return (
    <>
      <Header />
      <CookieCounter
        cookies={cookies}
        cps={cps}
        setCookies={setCookies}
        setCps={setCps}
      />
      <div className="shop-cookie">
        <ShopApi
          cookies={cookies}
          cps={cps}
          setCookies={setCookies}
          setCps={setCps}
        />

        <Reset
          cookies={cookies}
          cps={cps}
          setCookies={setCookies}
          setCps={setCps}
        />

        <CookieButton
          cookies={cookies}
          cps={cps}
          setCookies={setCookies}
          setCps={setCps}
        />
      </div>
      <Footer />
    </>
  );
}
