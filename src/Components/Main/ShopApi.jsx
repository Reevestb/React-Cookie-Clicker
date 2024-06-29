import { useState, useEffect } from "react";
import "./ShopApi.css";

export default function ShopUpgrades() {
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
            <div key={item.id} className="shopApi">
              <h2>Upgrade name: {item.name}</h2>
              <p>Increase Amount By; {item.increase}</p>{" "}
              <button>Cost {item.cost}</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
