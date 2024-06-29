import ResetBtn from "/Images/reset.png";
import "./Reset.css";

export default function Reset({ setCookies, setCps }) {
  function Reset() {
    setCookies((currentCookies) => 0), setCps((currentCps) => 1);
  }

  return (
    <>
      <div className="resetBox">
        <img src={ResetBtn} className="resetBtn" onClick={Reset} />
      </div>
    </>
  );
}
