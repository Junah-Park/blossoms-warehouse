import React, { useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Payment from "./components/Payment";
import {auth} from "./firebase";
// import GitHubIcon from '@material-ui/icons/GitHub';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./components/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";

const promise = loadStripe(
  "pk_test_51IJQr5Asms3PohRpaoiRpWcVmmmlip4ehnrmWqFRcxM3SFTzTvU6VngNvWLPE8xDZCdf6XYMM5hrhLZV2hzu2bqD00qE0EeBQe"
);

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS ', authUser);
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[]);
  // BEM
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route>
          <Route path="/orders">
            <Header/>
            <Orders/>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// import { BrowserRouter, Route } from 'react-router-dom';
// import ProductScreen from './screens/ProductScreen';
// import HomeScreen from './screens/HomeScreen';

// function App() {
//     return (
//         <BrowserRouter>
//             <div className="grid-container">
//                 {/* <header className="row">
//                     <div>
//                         <a className="brand"href="index.html">Blossoms Warehouse</a>
//                     </div>
//                     <div>
//                         <a href="cart.html">Cart</a>
//                         <a href="signin.html">Sign In</a>
//                     </div>
//                 </header> */}
//                 <header>
//                   <Header/>
//                   <Home/>
//                 </header>
//                 <main>
//                     <Route path="/product/:id" component={ProductScreen}></Route>
//                     <Route path="/" component={HomeScreen} exact></Route>                    
//                 </main>
                
//                 <footer className = "row center"><a href="https://github.com/Junah-Park/BlossomsWarehouse"><GitHubIcon></GitHubIcon></a></footer>
//             </div>
//         </BrowserRouter>
//     );
// }

export default App;