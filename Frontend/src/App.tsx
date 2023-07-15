
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Landing from "./pages/Landing";

function App() {
 

  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="*" element={<Landing/>}></Route>
    <Route path="/Home" element={<Home/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    

   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
