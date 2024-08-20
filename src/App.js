import React from "react";
import page1 from "./page1";
import page2 from "./page2";
import page3 from "./page3";
import page4 from "./page4";
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
function App() {
  return(
   <BrowserRouter>
   <Routes>
    <Route path="/" Component={page1}/>
    <Route path="/page2" Component={page2}/>
    <Route path="/page3" Component={page3}/>
    <Route path="/page4" Component={page4}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
