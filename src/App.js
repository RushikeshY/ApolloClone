import logo from './logo.svg';
import './App.css';
import Login from './Login';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Details} from './Details';
function App() {
  return (
    <div className="App">
<BrowserRouter>


<Routes>
<Route path="/" element={<Login/>}/>
  <Route path="/Details" element={<Details/>}/>
</Routes>
</BrowserRouter>


    </div>
  );
}

export default App;
