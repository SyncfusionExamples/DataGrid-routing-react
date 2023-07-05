import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Contact';
import Header from './Header';
import About from './About';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Header />
        </header>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/About' element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
