import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/HomePage/Home';
import Navigation from './components/NavFooter/NavigationBar'
import NotFounded from './components/NotFounded';
import Footer from './components/NavFooter/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />
          <Route path="*" element={<NotFounded />} />  

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
