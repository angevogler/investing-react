import { createStore } from 'redux';

// actions
// need type --> tell reducer WHAT to do
// need payload --> extra info on how to do it
export const buyAction = {
  type: 'BUY',
  payload: 1,
}

export const sellAction = {
  type: 'SELL',
  payload: 1,
}

export const exchangeAction = {
  type: 'RANDOMIZE_EXCHANGE'
}


// Two inputs, always
//  state = the previous state
//  action = the modification we want to apply
// Goal: return a new state
export function reducer(state, action) {

    // buy arrrrcoins
    if (action.type === 'BUY' && state.doubloons > state.exchange) {
        return {
          doubloons: state.doubloons - state.exchange,
          arrrrcoins: state.arrrrcoins + 1,
          exchange: state.exchange,
          canBuy: state.canBuy,
          canSell: state.canSell,
        };
    }

    // sell arrrrcoins
    if (action.type === 'SELL' && state.arrrrcoins > state.exchange) {
        return {
          doubloons: state.doubloons + state.exchange,
          arrrrcoins: state.arrrrcoins - 1,
          exchange: state.exchange,
          canBuy: state.canBuy,
          canSell: state.canSell,
        };
    }

    // generate random exchange rate
    if (action.type === 'RANDOMIZE_EXCHANGE') {
      let exchange = Math.random() * (10 - 0) + 0;
      let canBuy;
      let canSell;

      if (exchange < state.doubloons) {
        canBuy = true;
      }

      if (exchange < state.arrrrcoins) {
        canSell = true;
      }
      
      return {
        doubloons: state.doubloons,
        arrrrcoins: state.arrrrcoins,
        exchange: exchange,
        canBuy: canBuy,
        canSell: state.canSell,
      }
    }

    // Return the unchanged state.
    return state;
}

// put together reducer and initial state
export const store = createStore(reducer, {
    doubloons: 100,
    arrrrcoins: 0,
    exchange: 4,
    canBuy: false,
    canSell: false,
},
);
