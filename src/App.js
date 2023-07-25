
import './App.css';
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path ="/" element={<Projects/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;