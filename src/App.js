import HomePage from "./pages/HomePage/homepage.component";
import {Route, Routes} from 'react-router-dom'

import ShopPage from "./pages/ShopPage/shoppage.component";
import SignInSignUp from "./pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up.component";
import Header from "./component/header/header.component";
import Category from "./pages/Category/Category.component";


function App() {
  return (
    <>
        <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/shop' element={<ShopPage/>}/>
        <Route path='/signin' element={<SignInSignUp/>}/>
        <Route path='/category/:categoryId' element={<Category/>}/>
      </Routes> 
    </>
    
  );
}

export default App;
