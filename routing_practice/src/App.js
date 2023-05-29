import React from 'react';
import { useParams, BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';

function App() {

  const Home = props => {
    return(
      <div>
        <h1>Welcome</h1>
        <Link to={"/"}>Home</Link>
      </div>
      )
  };

  const WordOrNumber = props => {
    const { wordOrNumber, color1, color2 } = useParams();
    
    return (

      isNaN( wordOrNumber ) ? <h1>The word is: { wordOrNumber }</h1>
      : <h1>The number is: { wordOrNumber }</h1>

      )
  };


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>

        <Route path="/home" element={<Home />} />

        <Route path="/:wordOrNumber" element={<WordOrNumber />} />

        <Route path="/:wordOrNumber/:color1/:color2" element={<WordOrNumber />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
