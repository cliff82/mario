import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home";
import Layout from './pages/Layout';
import Characters from "./pages/Characters";
import Course from "./pages/Course";
import Items from './pages/Items';
import Battle from './pages/Battle';
import Boost from './pages/Boost';







function App() {
  
  

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
         <Route index element={<Home />} />
        <Route path="characters" element={<Characters />} />                                  
        <Route path="course" element={<Course />} />
         <Route path="items" element={<Items />} />    
         <Route path="battle" element={<Battle />} />                                
          <Route path="boost" element={<Boost />} />
            
            </Route>
        </Routes>
      
       
    </BrowserRouter>
    </>
  )
}

export default App

      
     
        


     
       
        

        
         
        

       

        
       
          
         
        
        
