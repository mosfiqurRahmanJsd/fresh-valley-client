import React from "react";
import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { ProductsContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
    const  { value2 }  = useContext(ProductsContext);
    const [ loggedInUser, setLoggedInUser ] = value2; 
  return (
    <Route
      {...rest}
      render={({ location }) =>
      loggedInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
