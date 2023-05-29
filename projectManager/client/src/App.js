import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import DisplayList from './components/DisplayList';
import Nav from './components/Nav';
import DisplayOne from './components/DisplayOne';
import UpdateForm from './components/UpdateForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/products" element={ <DisplayList/> } />
          <Route path="/products/create" element={ <Form/> } />
          <Route path="/products/:id" element={ <DisplayOne/> } />
          <Route path="/products/update/:id" element={ <UpdateForm/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
