import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ShopApi from "./Components/Main/ShopApi";
import CookieButton from "./Components/Main/CookieButton";
import Reset from "./Components/Main/Reset";
import CookieCounter from "./Components/Main/CookieCounter";
import { useState, useEffect } from "react";

export default function App() {
  // }
  const [cookies, setCookies] = useState(0);
  const [cps, setCps] = useState(1);
  useEffect(() => {}, [cps, setCookies]);

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

      {/* Display the following elements on the page 
      - value of cookie 
      - value of cps 
      - an element the user can click on to increase the value of biscuits 
      -A list of shop items that the user can buy (extra: Add visual feedback so
      the user knows if they can afford the upgrade)
       */}

      <Footer />
    </>
  );
}

//I need an upgrade shop that decreases the cookies but adds to the cps (cookier per second)
// const upgrades = [{}, {}];

//A timer to track the cookies value, keeping an eye on the cps

//the cookie value will go up by the value of cps
//added the cps to in the dependancy array so when the value changes the useEffect triggers the effect again.

//! We need a function so the user can buy items from the shop
// function shopUpgrades() {
//   //increase the value of cps
//   //decrease the value of cookie
