import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { buyAction, sellAction, exchangeAction, reducer } from './store';

// Black magic, come forth
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);

    setInterval(this.props.randomize, 1000)
    
  }

  render() {
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
          <button onClick={ () => this.props.buy() }>Buy Arrrrcoins</button>
          <button onClick={ () => this.props.sell() }>Sell Arrrrcoins</button>
        </div>
      </div>
    );
  }
}

// Two things that need to be connected:
//    1. How to read from the state (get info out)
//    2. How to send actions to the state (put info in)
function mapStateToProps(state) {
  return {
    doubloons: state.doubloons,
    arrrrcoins: state.arrrrcoins,
    exchange: state.exchange
  }
}

// 'dispatch' is a built-in redux function that sends the
// specified action to the reducer function
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
