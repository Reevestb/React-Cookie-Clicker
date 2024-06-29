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
  return <button onClick={buyUpgrades}>cost {cost}</button>;
}
