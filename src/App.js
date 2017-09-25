import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { buyAction, sellAction, exchangeAction, reducer } from './store';

import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);

    setInterval(this.props.randomize, 1000)

  }

  render() {
    console.log(this.props.canBuy);
    console.log(this.props.canSell);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="wrapper">
          <div className="doubloons-container">
            <h3>Doubloons:</h3>
            <p>{this.props.doubloons}</p>
          </div>
          <div className="arrrrcoins-container">
            <h3>Arrrrcoins:</h3>
            <p>{this.props.arrrrcoins}</p>
          </div>
        </div>
        <div>
          <h3>Exchange Rate:</h3>
          <p>{this.props.exchange}</p>
        </div>
        <div>
          <button onClick={ () => this.props.buy() } disabled={!this.props.canBuy}>Buy Arrrrcoins</button>
          <button onClick={ () => this.props.sell() } disabled={!this.props.canSell}>Sell Arrrrcoins</button>
        </div>
      </div>
    );
  }
}

// read from the state
function mapStateToProps(state) {
  return {
    doubloons: state.doubloons,
    arrrrcoins: state.arrrrcoins,
    exchange: state.exchange,
    canBuy: state.canBuy,
    canSell: state.canSell,
  }
}

// send actions to the state
function mapActionsToProps(dispatch) {
  return {
    buy: function () {
      dispatch(buyAction);
    },
    sell: function () {
      dispatch(sellAction);
    },
    randomize: function () {
      dispatch(exchangeAction);
    }
  };
}

export default connect(mapStateToProps, mapActionsToProps)(App);
