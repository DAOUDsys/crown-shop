import { Routes, Route } from "react-router-dom";
import {useEffect} from 'react';
import {onAuthStateChangedListener, createUserFromAuth} from './utils/firebase/firebase.utils';
import {setCurrentUser} from './store/user/user.action';
import {useDispatch} from 'react-redux';

import Home from "./routes/home/home.";
import Navigation from "./routes/navigation/navigation";
import SignIn from "./routes/sign-in/sign_in";
import Shop from "./routes/shop/shop.component";
import CheckOut from './routes/check-out/checkOut.jsx';



const App = () => {

  const dispatch = useDispatch();

  useEffect (() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if(user) {
            createUserFromAuth(user);
        }
        dispatch(setCurrentUser(user));
    });
    return unsubscribe;
}, [dispatch]);


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
