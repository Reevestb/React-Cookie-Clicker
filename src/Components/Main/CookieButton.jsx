import BtnClicker from "/Images/cookie.png";
import "./CookieButton.css";

export default function Clicker({ setCookies }) {
  return (
    <>
      <img
        className="clickerBtn"
        src={BtnClicker}
        onClick={() => setCookies((cookies) => cookies + 1)}
      />
    </>
  );
}
