import React, { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [bill, setBill] = useState("$0");
  const [showCustom, setShowCustom] = useState(false);
  const [custom, setCustom] = useState("");
  const [people, setPeople] = useState("0");
  const [totalTip, setTotalTip] = useState("0.00");
  const [totalBill, setTotalBill] = useState("0.00");

  function handleShowCustom() {
    setShowCustom(true);
    setCustom("");
  }

  function handleTipButton(e) {
    setShowCustom(false);
    if (people !== "0" && typeof e === "number") {
      const tip = (e * 100) / Number(people);
      setTotalTip(tip.toFixed(2));
      const a = Number(bill) / Number(people) + Number(tip.toFixed(2));
      setTotalBill(a);
    }
  }
  function handleBill(e) {
    setBill(e.target.value);
  }
  function handlePeople(e) {
    setPeople(e.target.value);
    const b = Number(bill);
    const p = Number(e.target.value);
    if (p >0 && b > 0) {
      const a = b / p + Number(totalTip);
      setTotalBill(a);
    }
  }
  function handleCustom(e) {
    setCustom(e.target.value);
    if (people !== "0") {
      const tip = (Number(e.target.value) * 100) / people;
      setTotalTip(tip.toFixed(2));
      const a = Number(bill) / Number(people) + Number(tip).toFixed(2);
      setTotalBill(a);
    }
  }
  function handleReset(){
    setTotalTip(0);
    setTotalBill(0);
  }

  return (
    <>
      <h3>Tip Calculator</h3>
      <div className="App">
        <div className="cal">
          <div className="input">
            {" "}
            <h5 style={{margin:"1rem"}}>Bill Amount</h5>
            <input type="text" value={bill} onChange={handleBill} />
            <br />
            <h5 style={{marginTop:"1rem"}}>Select Tip</h5>
            <div className="btn">
              <button onClick={() => handleTipButton(10)}>10%</button>
              <button onClick={() => handleTipButton(15)}>15%</button>
              <button onClick={() => handleTipButton(5)}>5%</button>
              <button onClick={() => handleTipButton(20)}>20%</button>
              <button onClick={() => handleTipButton(25)}>25%</button>
              {!showCustom ? (
                <button onClick={handleShowCustom}>Custom</button>
              ) : (
                <input type="text" value={custom} onChange={handleCustom} />
              )}
            </div>
            <div className="nopeople">
              <h5 style={{margin:"1.5rem"}}>Number of People</h5>
              <input type="text" onChange={handlePeople} value={people} />
            </div>
          </div>

          <div className="total">
            <div className="amount">
              <div className="bill">
                <p>Tip Amount</p>
                <br />
                <span className="per">/person</span>
              </div>
              <span className="tip">{`$${totalTip}`}</span>
            </div>
            <div className="amount">
              {" "}
              <div className="bill">
                {" "}
                <p>Total</p>
                <br />
                <span className="per">/person</span>
              </div>
              <span className="tip">{`$${totalBill}`}</span>
            </div>
            <div className="reset">
              <button onClick={handleReset}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
