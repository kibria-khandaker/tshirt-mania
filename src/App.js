import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { Routes, Route } from "react-router-dom";
import OrderReview from './components/OrderReview/OrderReview';
import Grandpa from './components/Grandpa/Grandpa';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/orderreview" element={ <OrderReview/> } />
        <Route path="/grandpa" element={ <Grandpa/> } />
      </Routes>



    </div>
  );
}

export default App;
