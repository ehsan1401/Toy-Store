import './App.css';
import { TestPorvider } from './Context';
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
import Offers from './components/Store/Offers';
import Logout from './components/Account/Logout';
import Dashboard from './components/Account/Dashbord';
import OrderDetails from './components/Account/OrderDetails';
import EditeProduct from './components/Account/EditeProduct';
function App() {
  return (
    <div className="App">
      <TestPorvider>
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
          <Route path='/Offers' element={<Offers/>}/>
          <Route path='/Logout' element={<Logout />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='Dashboard/OrderDetails/:Code' element={<OrderDetails />} />
          <Route path='Dashboard/EditeProduct/:Code' element={<EditeProduct />} />

          <Route path="*" element={<NotFounded />} />  
        </Routes>
        <Footer />
      </BrowserRouter>
      </TestPorvider>
    </div>
  );
}

export default App;
