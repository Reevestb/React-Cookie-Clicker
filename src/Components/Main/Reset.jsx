import ResetBtn from "/Images/reset.png";
import "./Reset.css";

export default function Reset() {
  return (
    <>
      <div className="resetBox">
        <img src={ResetBtn} className="resetBtn" />
      </div>
    </>
  );
}
