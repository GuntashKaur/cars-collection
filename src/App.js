import { useState } from "react";
import "./styles.css";

var rollsRoyce = [
  { car: "Rolls-Royce Phantom" },
  { car: "Rolls-Royce Wraith" },
  { car: "Rolls-Royce Cullinan" },
  { car: "Rolls-Royce Dawn" },
  { car: "Rolls-Royce New Ghost" }
];

var volkswagen = [
  { car: "Volkswagen Virtus" },
  { car: "Volkswagen Taigun" },
  { car: "Volkswagen Vento" },
  { car: "Volkswagen Polo" }
];

var porsche = [
  { car: "Porsche Cayenne" },
  { car: "Porsche Macan" },
  { car: "Porsche 911" },
  { car: "Porsche 718" },
  { car: "Porsche Panamera" }
];

var mercedes = [
  { car: "Mercedes-Benz EQS" },
  { car: "Mercedes-Benz G-Class" },
  { car: "Mercedes-Benz C-Class" },
  { car: "Mercedes-Benz GLA" },
  { car: "Mercedes-Benz Maybach S-Class" }
];

var jaguar = [
  { car: "Jaguar XF" },
  { car: "Jaguar F-Pace" },
  { car: "Jaguar F-Type" },
  { car: "Jaguar I-Pace" },
  { car: "Jaguar E-Pace" }
];

export default function App() {
  const [userClick, setClicked] = useState(rollsRoyce);

  function clickHandler1(event) {
    setClicked(rollsRoyce);
  }

  function clickHandler2(event) {
    setClicked(volkswagen);
  }

  function clickHandler3(event) {
    setClicked(porsche);
  }

  function clickHandler4(event) {
    setClicked(mercedes);
  }

  function clickHandler5(event) {
    setClicked(jaguar);
  }

  return (
    <div className="App">
      <h1>Cars Selection</h1>
      <h2>Information on all new and upcoming cars in India.</h2>
      <button onClick={clickHandler1}>ROLLS ROYCE</button>
      <button onClick={clickHandler2}>VLOKSWAGEN</button>
      <button onClick={clickHandler3}>PORSCHE</button>
      <button onClick={clickHandler4}>MERCEDES-BENZ</button>
      <button onClick={clickHandler5}>JAGUAR</button>
      <ul>
        {userClick.map((object, index) => {
          return (
            <span key={index}>
              <li>{object.car}</li>
            </span>
          );
        })}
      </ul>
    </div>
  );
}
