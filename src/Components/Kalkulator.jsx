import React, { useState } from 'react';

function Kalkulator() {
  const [broj1, setBroj1] = useState("");
  const [broj2, setBroj2] = useState("");
  const [rezultat, setRezultat] = useState("");

  const handleChangeBroj1 = (e) => {
    setBroj1(e.target.value);
  };

  const handleChangeBroj2 = (e) => {
    setBroj2(e.target.value);
  };
//parseFloat radi rezultata koji mogu biti decimalni
  const zbroji = () => {
    setRezultat(parseFloat(broj1) + parseFloat(broj2));
  };

  const oduzmi = () => {
    setRezultat(parseFloat(broj1) - parseFloat(broj2));
  };

  const pomnozi = () => {
    setRezultat(parseFloat(broj1) * parseFloat(broj2));
  };

  const podijeli = () => {
    setRezultat(parseFloat(broj1) / parseFloat(broj2));
  };

  return (
    <div>
      <div>
        <label>Prvi broj:</label>
        <input type="number" value={broj1} onChange={handleChangeBroj1} />
      </div>
      <div>
        <label>Drugi broj:</label>
        <input type="number" value={broj2} onChange={handleChangeBroj2} />
      </div>
      <div>
        <button onClick={zbroji}>Zbroji</button>
        <button onClick={oduzmi}>Oduzmi</button>
        <button onClick={pomnozi}>Pomnoži</button>
        <button onClick={podijeli}>Podijeli</button>
      </div>
      {rezultat !== null && (
        <div>
          <p>Rezultat: {rezultat}</p>
        </div>
      )}
    </div>
  );
}

export default Kalkulator;
