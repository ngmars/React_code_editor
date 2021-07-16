import React from 'react';
import Dashboard from '../src/Containers/Dashboard';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Dashboard/>
    </div>
    </Provider>
  );
}

export default App;
