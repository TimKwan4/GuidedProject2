import logo from './logo.svg';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Character from './components/Character';
import Film from './components/Film';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='character/:id' element={<Character />} />
        <Route path='films/:id' element={<Film />} />
      </Routes>
    </div>
  );
}

export default App;
