import { useState } from "react";
import logo from './logo.svg';
import logoBitcoin from './giphy.gif';
import './App.css';

function App() {
  const [bitcoinPrice, setBitcoinPrice] = useState("0");
  // let retour = fetch("https://api.kraken.com/0/public/Ticker?pair=XXBTZEUR")
  //   .then(response => response.json())
  //   .then(response => alert(JSON.stringify(response)))
  //   .catch(error => alert("Erreur : " + error));
  fetch("https://api.kraken.com/0/public/Ticker?pair=XXBTZEUR")
  .then(response => response.json())
  .then(data => {setBitcoinPrice(data['result']['XXBTZEUR']['a'][0])});
  
  // alert(JSON.stringify(retour.response));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bitcoin : {bitcoinPrice} €
        </p>
        <img src={logoBitcoin} className="Bitcoin-logo" alt="logoBitcoin" />
      </header>
    </div>
  );
}

export default App;
