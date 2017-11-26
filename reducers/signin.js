import realm from '../app/db/realm';

import {
  SUCCESS_RETRIEVE_GOOGLE_USER,
  SUCCESS_GOOGLE_SIGN_IN,
  SUCCESS_GOOGLE_SIGN_OUT,
} from '../actions';

function initializeState() {
  return {
    sheets: [],        // List of spreadsheets
    innerSheets: [],   // List of titles in a spreadsheet
    user: {},          // Google user objects
    sheetId: null,     // Active sheeetId
    sheetTitle: null,  // Active sheetTitle
  };
}

export default function reducer(state = initializeState(), action) {
  console.log(`[reducer]${action.type} called. payload: %O, state: %O`, action.payload, state);
  switch (action.type) {
    case SUCCESS_RETRIEVE_GOOGLE_USER:
    case SUCCESS_GOOGLE_SIGN_IN:
      return Object.assign({}, state, action.payload);

    case SUCCESS_GOOGLE_SIGN_OUT:
      return Object.assign({}, state, {
        user: {},
      });

    default:
      return state;
  }
}