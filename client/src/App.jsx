import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import DataContent from './components/DataContent/DataContent';
import SearchError from './components/DataContent/SearchError/SearchError';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';
import Cart from './components/Cart/Cart';
import CheckOut from './components/CheckOut/CheckOut';
import Confirmed from './components/Confirmed/Confirmed';
import Register from './components/Users/Register/Register';
import Login from './components/Users/Login/Login';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';




function App() {

    return (
        <div className="background">
            <CartProvider>
            <UserProvider>
                <BrowserRouter>
                    <Navbar/>
                    <Routes>
                        <Route path='/' element={<><Landing/><Footer/></>}/>
                        <Route path='/menu' element={<DataContent/>}/>
                        <Route path='/menu/:categoria' element={<DataContent/>}/>
                        <Route path='/menu/not-found' element={<SearchError/>}/>
                        <Route path="/item/:id" element={<ItemDetailConteiner/>}/>
                        <Route path='/carrito' element={<Cart/>}/>
                        <Route path='/checkout' element={<CheckOut/>}/>
                        <Route path='/confirmed' element={<Confirmed/>}/>
                        <Route path='/register' element={<Register/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Routes>
                </BrowserRouter>
            </UserProvider>
            </CartProvider>
        </div>
  );
};



export default App;
