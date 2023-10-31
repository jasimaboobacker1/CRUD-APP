import './App.css';
import Home from './Components/Home';
import {} from 'react-router-dom'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Add from './Components/Add';
import Edit from './Components/Edit';


function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<Add/>}></Route>
        <Route path='/edit' element={<Edit/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
