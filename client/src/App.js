import './pages/Home/Home.scss'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Navbar from './components/navbar/Navbar';
import './main.scss'
import Footer from './components/footer/Footer';
import ItemPage from './pages/Items/ItemPage';
import Description from './pages/Description/Description';
import OrderConfimation from './pages/orderConfimation/OrderConfimation';
import Cart from './pages/Cart/Cart';
import Account from './pages/Account/Account';
import { useEffect, useState } from 'react';


function App({changeTheme}) {
  const [lightTheme, setTheme] = useState(true)

  useEffect(() => {
    const root = document.querySelectorAll("body *");
    console.log(root)
    root.forEach((element)=>{
      if(element.tagName !== "svg" && element.tagName !== "path"){
        console.log(element.tagName)
        element?.style.setProperty("background-color",lightTheme ? "#FFFFFF" : "#000000");
        element?.style.setProperty("color", lightTheme ? "#000000" : "#FFFFFF");
      }
    })
  }, [lightTheme]);
  
  return (

    <div className={lightTheme ? "" : "darkTheme"}  >
      <Navbar onThemeChange={() => setTheme(!lightTheme)}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Items' element={<ItemPage/>}/>
          <Route path='/Description' element={<Description/>}/>
          <Route path='/OrderConfirmation' element={<OrderConfimation/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Account' element={<Account/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
