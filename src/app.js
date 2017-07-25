import React from 'react';
import ReactDOM from 'react-dom';

import Todos from './class/Todos.js';

class App extends React.Component {
  render() {
    return (
      <Todos/>
    )
  }
};

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

if(module.hot){
  module.hot.accept();
}