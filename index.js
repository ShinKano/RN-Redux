/**
 * @format
 */

import {AppRegistry, ActionSheetIOS} from 'react-native';
import App from './src/views/containers/App';
import {name as appName} from './app.json';
import { createStore, Dispatch } from 'redux';

//Action: Stateの数字に +1したい！
const plusOne = () => (
  {type: 'PLUS_ONE'}
)
const minusOne = () => (
  {type: 'MINUS_ONE'}
)

//Reducer: Actionをさらに具体的にするぜ！
const counter = (state = 0, action) => {
  switch (action.type) { //actionのtypeによって
    case 'PLUS_ONE':
      return state + 1;  // +1 したり
    case 'MINUS_ONE':
      return state - 1;  // -1 したりする
  }
}

//Reducerから必要なStateを自動判定して、Storeを作る事ができる
let store = createStore(counter);

//store.subscribe(() => console.log(store.getState()));

//Dispatch: 決めた内容に沿って実行いたします。
store.dispatch(plusOne());

store.subscribe(() => console.log(store.getState()));


AppRegistry.registerComponent(appName, () => App);
