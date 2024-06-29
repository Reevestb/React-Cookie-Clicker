import { useEffect } from "react";
import "./CookieCounter.css";

export default function Counter({ cookies, setCookies, cps }) {
  useEffect(() => {
    const cookieInterval = setInterval(() => {
      setCookies((currentCookies) => currentCookies + cps);
    }, 1000);
    return () => {
      clearInterval(cookieInterval);
    };
  }, [cps, setCookies]);

  return (
    <>
      <div className="counterBox">
        <h1>Cookies: {cookies}</h1>
        <h2>Cookies Per Second: {cps}</h2>
      </div>
    </>
  );
}
