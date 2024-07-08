import React,{ Component } from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./navbar";
import products from './products';

class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      sortType: "norm",
      listNum: "",
      products: products
    };
  }

 handleSort = (listNum, sortType) => {
    listNum.sort((a, b) => {
      switch(sortType) {
        case "norm": return a.id - b.id
          break;
        case "asc": return a.price - b.price
          break;
        case "desc": return b.price - a.price
      }
    });
    this.setState({ sortType });
  };

  handleIncrement = (addValue) => {
    if(addValue.qty<10) {
      const updatedValue = addValue.qty++;
      this.setState({updatedValue});
    }
  }
  handleDecrement = (subValue) => {
    if(subValue.qty<10) {
      const updatedValue = subValue.qty--;
      this.setState({updatedValue});
    }
  }
  
  render() {
    return (
      <div className="App">
        <Navbar 
          totalValue={this.state.products.map(
          (p) => p.qty).reduce(
            (acc,cur,index) =>
          acc+cur, 0 ) }
          prods={this.state.products}
          handleIncrement = {this.handleIncrement}
          handleDecrement = {this.handleDecrement}
          handleSort={this.handleSort}
          sortType={this.state.sortType}
          listNum={this.state.listNum}
        />
      </div>
    );
  }
}

export default App;
