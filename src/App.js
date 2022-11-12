import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.";
import Navigation from "./routes/navigation/navigation";
import SignIn from "./routes/sign-in/sign_in";
import Shop from "./routes/shop/shop.component";
import CheckOut from './routes/check-out/checkOut.jsx';

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
      <Route index element={<Home/>} />
      <Route path="shop/*" element={<Shop/>}/>
      <Route path="sign-in" element={<SignIn />}/>
      <Route path="checkout" element={<CheckOut />}/>
      </Route>
    </Routes>
  );
  
  };

export default App;
