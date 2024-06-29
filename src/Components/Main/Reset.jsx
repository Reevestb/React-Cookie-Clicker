import ResetBtn from "/Images/reset.png";
import "./Reset.css";

export default function Reset({ cookies, setCookies, cps, setCps }) {
  function Reset() {
    setCookies((currentCookies) => 0), setCps((currentCps) => 0);
  }

  return (
    <>
      <div className="resetBox">
        <img src={ResetBtn} className="resetBtn" onClick={Reset} />
      </div>
    </>
  );
}
