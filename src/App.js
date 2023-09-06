import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/HomePage/Home';
import Navigation from './components/NavFooter/NavigationBar'
import NotFounded from './components/NotFounded';
import Footer from './components/NavFooter/Footer';
import Register from './components/Account/Register';
import Login from './components/Account/Login';
import ContactUs from './components/HomePage/ContactUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ContactUs" element={<ContactUs/>} />


          <Route path="*" element={<NotFounded />} />  

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
