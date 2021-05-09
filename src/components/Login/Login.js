import { Link } from "@material-ui/core";
import React from "react";
import "./Login.css";
import Header from "../Header/Header";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { ProductsContext } from "../../App";
import { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";




const Login = () => {
    const  { value2 }  = useContext(ProductsContext);
    const [ loggedInUser, setLoggedInUser ] = value2; 
    console.log(loggedInUser); 

    const history = useHistory(); 
    const location = useLocation(); 
    let { from } = location.state || { from: { pathname: "/" } };
  const googleSignIn = () => {
    
    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig); 
    }

    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, photoURL, email } = result.user;
        const signedInUser = {name: displayName, photoURL, email}
        setLoggedInUser(signedInUser);
        history.replace(from); 
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, errorMessage, email, credential)
      });
  };

  

  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="card d-block mx-auto login">
          <div className="card-body p-2 p-md-5">
            <h4>Login</h4>

            <form>
              <input
                className="form-control my-5 input"
                type="email"
                name="email"
                id=""
                placeholder="Email"
                required
              />
              <input
                className="form-control my-5 input"
                type="password"
                name="password"
                id=""
                placeholder="Password"
                required
              />

              <div className="d-flex justify-content-between ">
                <div>
                  <input
                    type="checkbox"
                    id="RememberPassword"
                    name="RememberPassword"
                    value="RememberPassword"
                  />
                  <label
                    style={{ paddingLeft: "5px", fontWeight: "600" }}
                    htmlFor="RememberPassword"
                  >
                    Remember Me
                  </label>
                </div>
                <Link className="link-color" to="/forgot_password">
                  Forgot Password
                </Link>
              </div>
              <input
                className="w-100 login-btn my-3"
                type="submit"
                value="Login"
              />
            </form>

            <p className="text-center mt-2">
              Don't Have Account ?{" "}
              <Link className="link-color" to="/signup">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="container container-sm-fluid ">
        <div className="sign-in">
          <div className="separator my-3">Or</div>
          <button
            onClick={googleSignIn}
            className="google-btn btn border w-100 d-flex align-items-center"
          >
            <img
              className="img-fluid mt-2"
              src="https://i.ibb.co/R0cy8Yn/Group-571.png"
              alt=""
            />
            <h6 className="mx-auto">Continue with Google</h6>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
