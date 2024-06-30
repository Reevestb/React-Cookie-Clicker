import { useState, useEffect } from "react";
import "./ShopApi.css";
import ShopUpgrades from "./ShopUpgrades";

export default function Shop({ cookies, setCookies, setCps, cps }) {
  const [Shop, setShop] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://cookie-upgrade-api.vercel.app/api/upgrades"
      );
      const data = await response.json();
      setShop(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div id="shopBox">
        <h1 className="shopTitle">Shop</h1>

        {Shop.map((item) => {
          return (
            <>
              <div key={item.id} className="shopApi">
                <h2>Upgrade name: {item.name}</h2>
                <p>Increase Amount By: {item.increase}</p>
                <p>Upgarde cost: {item.cost}</p>
                <ShopUpgrades
                  cost={item.cost}
                  increase={item.increase}
                  setCookies={setCookies}
                  setCps={setCps}
                  cookies={cookies}
                  cps={cps}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

// function buyUpgrades({cost, increase}) {
//   if (cookies >= cost) {
//     setCookies((currentcookies) => currentcookies - cost);
//     setCps((currentCps) => currentCps + increase);
//   }
// }
