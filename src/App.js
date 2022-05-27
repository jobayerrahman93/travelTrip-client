import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>

<BrowserRouter>
<Navigation/>
    <Routes>
      <Route path="/" element={<Home />} />
      
    </Routes>
  </BrowserRouter>
     
    </div>
  );
}

export default App;
