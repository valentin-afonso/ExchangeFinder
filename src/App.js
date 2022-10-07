import './App.css';
import Card from './components/Card'
import Exchanges from './api/getExchanges.json'
import logo from './utils/Dogecoin_Logo.png'
import { useState, useEffect } from "react";
import getExchangeDetails from "./api/getExchangeDetails"

function App() {
  const [listExchange, setListExchange] = useState([])
  /*
    useEffect(() => {
      fetch("https://api.coinpaprika.com/v1/coins/doge-dogecoin/exchanges")
        .then(res => res.json())
        .then(
          (result) => {
            setListExchange(result);
          }
        )
    }, [])
  */
  console.log(getExchangeDetails)
  return (
    <div className="app">
      <header className="app__header">
        <img src={logo} alt="logo" className="app__logo" />
        <h1>Dogecoin finder</h1>
      </header>
      <div className="app__body">
        <h2>Exchanges acceptant le Dogecoin</h2>
        <div className="app__cardList">
          {listExchange.map(exchangeResume => (
            <div key={exchangeResume.id} className='app__listItem'>
              <Card exchangeResume={exchangeResume} />
            </div>
          ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
