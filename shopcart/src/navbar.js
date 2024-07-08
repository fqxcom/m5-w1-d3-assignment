import React from 'react';
import {Link,BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faRegistered,
} from "@fortawesome/free-solid-svg-icons";
import DisplayProducts from "./displayProducts";
import ShowCart from "./showCart";
import Login from "./login";
import Checkout from "./login";
import './App.css';

export default function Navbar(props) {
  return (
    <Router>
      <nav>
        <Link className="logo" to="/">
          <h1>
            Shop 2
            <span>
              <FontAwesomeIcon icon={faRegistered} />
            </span>
            eact
          </h1>
        </Link>
        <Link to="/showCart" className="cart">
          <FontAwesomeIcon icon={faShoppingCart} size="sm" />
          <span> {props.totalValue} items</span>
        </Link>
      </nav>
      
      <Routes>
        <Route
          path="/"
          element={
            <DisplayProducts
              products={props.prods}
              onIncrement={props.handleIncrement}
              onDecrement={props.handleDecrement}
              OnSort={props.handleSort}
              sortType={props.sortType}
              listNum={props.listNum}
            />
          }
        />
        <Route 
          path="/showcart" 
          element={
             <ShowCart
              products={props.prods}
            />
          } 
        /> 
        <Route path="login" element={<Login/>} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}


