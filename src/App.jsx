import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  //I need an upgrade shop that decreases the cookies but adds to the cps (cookier per second)
  const upgrades = [{}, {}];

  //Two Global variables to store the cookie counter and cps
  const [cookies, setCookies] = useState(0);
  const [cps, setCps] = useState(1);

  //A timer to track the cookies value, keeping an eye on the cps
  //the cookie value will go up by the value of cps
  useEffect(() => {
    const cookieInterval = setInterval(() => {
      setCookies((currentCookies) => currentCookies + cps);
    }, 1000);
    return () => {
      clearInterval(cookieInterval);
    };
  }, [cps]); //added the cps to in the dependancy array so when the value changes the useEffect triggers the effect again.

  //! We need a function so the user can buy items from the shop
  function shopUpgrades() {
    //increase the value of cps
    //decrease the value of cookie
  }

  return (
    <>
      <h1>Another cookie clicker</h1>

      {/* Display the following elements on the page 
      - value of cookie 
      - value of cps 
      - an element the user can click on to increase the value of biscuits 
      -A list of shop items that the user can buy (extra: Add visual feedback so
      the user knows if they can afford the upgrade)
       */}
    </>
  );
}
