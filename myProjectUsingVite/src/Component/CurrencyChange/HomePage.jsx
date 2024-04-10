import { useCallback, useEffect, useState } from 'react';
import './HomePage.css'

function HomePage() {


  const [listvalue, SetListValue] = useState("");

  const [firstCountry, SetFirstCountry] = useState("INR");

  const [secondCountry, SetSecondCountry] = useState("USD");

  const [fromInputValue, SetFromInputValue] = useState(0);

  const [toInputValue, SetToInputValue] = useState(0);




  const CunvertCurrency = useCallback( async () => {
    let first,second;
    const response = await fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_sT3IXnT4mFEgT2bi62y1yXAf3fosmPYOKiFZyuT6');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      const objectArray = Object.values(jsonData.data);

    objectArray.forEach(element => {
       if(element.code == firstCountry) first = element.value;
       if(element.code == secondCountry) second = element.value;
    });
    let value1 = fromInputValue / first;
    SetToInputValue(second*value1);
  })

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_sT3IXnT4mFEgT2bi62y1yXAf3fosmPYOKiFZyuT6');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      const objectArray = Object.values(jsonData.data);

      let list = '';

      objectArray.forEach(element => {
        list += `<option value="${element.code}">${element.code}</option>`;
      });
      SetListValue(list);
    } catch (error) {
      console.error('Error:', error.message);
    } 
  }

  useEffect(() => {
    fetchData();
  }, [SetListValue])



  return (
    <>
      <div className="container">
        <div className="input-container">
          <label style={{ margin: "10px" }}>For</label>
          <input type="number" value={fromInputValue} onChange={(e) => { SetFromInputValue(e.target.value) }} />
          <select value={firstCountry} onChange={(e) => {
            SetFirstCountry(e.target.value);
          }} id="select" dangerouslySetInnerHTML={{ __html: listvalue }} >
          </select>
        </div>

        <br />
        <button className="button">Swap</button>
        <br />

        <div className="input-container">
          <label style={{ margin: "10px" }}>To</label>
          <input type="number" value={toInputValue} onChange={(e) => { SetToInputValue(e.target.value) }} />
          <select value={secondCountry} onChange={(e) => {
            SetSecondCountry(e.target.value);
          }} id="select" dangerouslySetInnerHTML={{ __html: listvalue }} >
          </select>
        </div>
        <br />
        <br></br>
        <button className="button" onClick={CunvertCurrency}>Convert</button>
      </div>
    </>
  )
}

export default HomePage