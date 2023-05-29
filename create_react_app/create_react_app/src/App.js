import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard 
        name = {'Doe, Jane'}
        age = {45}
        haircolor = {'Black'} />
      <PersonCard 
          name = {'Smith, John'}
          age = {88}
          haircolor = {'Brown'} />
      <PersonCard 
        name = {'Fillmore, Millard'}
        age = {50}
        haircolor = {'Brown'} />
      <PersonCard 
        name = {'Smith, Maria'}
        age = {62}
        haircolor = {'Brown'} />
    </div>
  );
}

export default App;
