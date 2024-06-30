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
  //to conditinally render button if cookies greater than or equal to cost.
  if (cookies >= cost)
    return (
      <>
        <div className="buyBtn">
          <a
            href="#counterBox"
            className="btn-flip"
            data-back="Buy"
            onClick={buyUpgrades}
          >
            Spend: {cost}
          </a>
        </div>
      </>
    );
}
