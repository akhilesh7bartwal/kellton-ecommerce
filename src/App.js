import HomePage from "./pages/HomePage/homepage.component";
import {Route, Routes} from 'react-router-dom'

import ShopPage from "./pages/ShopPage/shoppage.component";


function App() {
  return (
    
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/shop' element={<ShopPage/>}/>
      </Routes>
      
  );
}

export default App;
