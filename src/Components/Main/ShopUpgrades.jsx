import "./ShopUpgrades.css";
export default function ShopUpgrades({
  cookies,
  setCookies,
  setCps,
  cost,
  increase,
}) {
  function buyUpgrades() {
    if (cookies >= cost) {
      setCookies((currentcookies) => currentcookies - cost);
      setCps((currentCps) => currentCps + increase);
      //   console.log(setCps, cps);
    }
  }
  return (
    <>
      <div className="buyBtn">
        <a
          href="#counterBox"
          className="btn-flip"
          data-back="Buy"
          onClick={buyUpgrades}
        >
          cost: {cost}
        </a>
      </div>
    </>
  );
}
