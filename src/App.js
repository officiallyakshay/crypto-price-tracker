import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './Routes/Home';
import CoinPage from './Routes/CoinPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/CoinPage/:id" element={ <CoinPage /> } />
      </Routes>
    </div>
  );
}

export default App;
