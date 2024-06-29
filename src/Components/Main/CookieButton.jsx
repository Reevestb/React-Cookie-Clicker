import BtnClicker from "/Images/cookie.png";
import "./CookieButton.css";

export default function Clicker({ cookies, setCookies }) {
  function handleClick() {
    setCookies((cookies) => cookies + 1);
    // updateCookies((cookies) => cookies + 1);
  }
  return (
    <>
      <img className="clickerBtn" src={BtnClicker} onClick={handleClick} />
    </>
  );
}
