import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import DisplayList from './components/DisplayList';
import UpdateForm from './components/UpdateForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <DisplayList/> } />
          <Route path="/new" element={ <Form/> } />
          <Route path="/update/:id" element={ <UpdateForm/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
