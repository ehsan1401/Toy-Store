import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/HomePage/Home';
import Navigation from './components/NavFooter/NavigationBar'
import NotFounded from './components/NotFounded';
import Footer from './components/NavFooter/Footer';
import Register from './components/Account/Register';
import Login from './components/Account/Login';
import ContactUs from './components/HomePage/ContactUs';
import PrivacyPolicy from './components/HomePage/PrivacyPolicy';
import Category from './components/Store/Category';
import CategoryItem from './components/Store/CategoryPage';
import Store from './components/Store/StorePages/Store';
import Ages from './components/Store/StorePages/Ages';
import Scroll from './components/ScrollToTop';
import BestSellers from './components/Store/BestSellers';
import ToyPage from './components/ToyPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
        <Scroll />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ContactUs" element={<ContactUs/>} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
          <Route path='/Category/:Code' element={<CategoryItem/>}/>
          <Route path='/AllCategory' element={<Category/>}/>
          <Route path='/Store' element={<Store />} />
          <Route path='/BestSellers' element={<BestSellers/>}/>
          <Route path='/Store/Ages/:rate' element={<Ages/>}/>
          <Route path='/toy/:Code' element={<ToyPage/>}/>





          <Route path="*" element={<NotFounded />} />  

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
