import React from "react";
import { useState } from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import { Modal } from "react-bootstrap";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

export default function DisplayProducts(props) {
  const [show, setShow] = useState(false);
  const [showImg, setShowImg] = useState({});
  const handleShow = (product) => {
    setShow(true);
    setShowImg(product);
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <div>
      <div className="sortList my-5 d-flex justify-content-center">
        <label>
              Sort Price By: 
          <select className="mx-3" onChange={(e) => props.OnSort(props.products, e.target.value)}>
                <option value="norm">Normal</option>
                <option value="asc">Lowest</option>
                <option value="desc" >Highest</option>
          </select>
        </label>
      </div>
      {props.products.map((product) => {
        return (
          <ListGroup className="products">
            <ListGroupItem key={product.id} className="product">
              <div className="displayP">
                <div className="my-3">
                  <span className="h4">{product.desc}</span>
                  <span className="h5 mx-2 text-danger">${product.price}</span>
                </div>
                <img
                  onClick={() => handleShow(product)}
                  src={product.image}
                  width="220"
                  alt={product.desc}
                />
              </div>
              <div className="displayBtn mx-2">
                <Button
                  className="btn btn-secondary mx-2"
                  onClick={() => props.onIncrement(product)}
                >
                  <FontAwesomeIcon icon={faPlusCircle} className="fas fa-lg" />
                </Button>
                <Button
                  className="btn btn-secondary mx-2"
                  onClick={() => props.onDecrement(product)}
                >
                  <FontAwesomeIcon icon={faMinusCircle} className="fas fa-lg" />
                </Button>
              </div>
              <div className="displayQty">
                <p>Quantity</p>
                <span type="number" name="number" placeholder="0">
                  {" "}
                  {product.qty}{" "}
                </span>
              </div>
            </ListGroupItem>
          </ListGroup>
        );
      })}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{showImg.desc}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={showImg.image}
            width="350"
            alt={showImg.desc}
            className="mx-5"
          />
          <p>
            <span className="text-dark">Ratings: </span>
            {showImg.ratings}/5
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}