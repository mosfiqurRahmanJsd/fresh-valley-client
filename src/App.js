import { createContext } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllOrder from "./components/AllOrder/AllOrder";
import Checkout from "./components/Checkout/Checkout";
import Deals from "./components/Deals/Deals";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Order from "./components/Order/Order";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Sidebar from "./components/Sidebar/Sidebar";

export const ProductsContext = createContext();

function App() {
  const [events, setEvents] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState([]);
  
  return (
    <ProductsContext.Provider value={{value:[events], value2:[loggedInUser, setLoggedInUser]}} >
      <Router>
        <Switch>
          <Route path="/sidebar">
            <Sidebar></Sidebar>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/buy/:productId">
            <Order></Order>
          </PrivateRoute>
          
          <Route path="/checkout">
            <Checkout></Checkout>
          </Route>
          <Route path="/deals">
            <Deals></Deals>
          </Route>
          <PrivateRoute path='/order-details'>
            <AllOrder></AllOrder>
          </PrivateRoute>
          <Route exact path="/">
            <Home events={events} setEvents={setEvents}></Home>
          </Route>
        </Switch>
      </Router>
    </ProductsContext.Provider>
  );
}

export default App;
