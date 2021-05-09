import React from "react";
import "./Sidebar.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import EditProduct from "../EditProduct/EditProduct";
import ManageProduct from "../ManageProduct/ManageProduct";
import GridOnIcon from '@material-ui/icons/GridOn';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

const Sidebar = () => {
  return (
    <Router>
      <div className="fresh-valley">
        
        <h1 className="text-light text-center">FRESH VALLEY</h1>

        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link
              className="nav-link active"
              aria-current="page"
              to="/manage-product"
            >
            <GridOnIcon></GridOnIcon>
              Manage Product
            </Link>
          </li>
          <li className="nav-item">
          
            <Link className="nav-link" to="/add-product">
            <AddIcon></AddIcon>
              Add Product
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/edit-product">
            <EditIcon></EditIcon>
              Edit Product
            </Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Redirect from="/sidebar" to="/manage-product" />
        <Route exact path="/manage-product">
          <ManageProduct></ManageProduct>
        </Route>
        <Route path="/add-product">
          <AddProduct></AddProduct>
        </Route>
        <Route path="/edit-product">
          <EditProduct></EditProduct>
        </Route>
      </Switch>
    </Router>
  );
};

export default Sidebar;
