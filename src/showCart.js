import React from "react";
import { BrowserRouter as Router, Link, Route, Routes, Outlet } from "react-router-dom"
import { ListGroup, ListGroupItem,Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

export default function ShowCart(props) {
  return (
   <React.Fragment>
        <h3 className="mx-5 pt-3">Your Cart Items</h3>
        <div>
            {props.products.map((product) => {
                if (product.qty>0) {
                return (
                <ListGroup className="products">
                    <ListGroupItem key={product.id} className="product">
                    <div className="d-flex align-items-center">
                        <div className="displayP d-block">
                        <img
                        src={product.image}
                        width="200"
                        alt={product.desc}
                        />
                        <h4>{product.desc}</h4>
                        </div>
                        <div className="displayQty d-flex">
                        <h5 className="mx-3">Quantity:</h5>
                        <h5>
                        {product.qty}
                        </h5>
                    </div>
                    </div>
                    
                    </ListGroupItem>
                </ListGroup>
        );
          }
      })}
        </div>
            <Link to="/login">
                <Button
                    color="primary"
                    className="m-5"
                >
                    Check Out
                </Button>
            </Link>
        <Outlet />
    </React.Fragment>
  );
}




