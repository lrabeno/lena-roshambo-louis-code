import React from 'react';
import Layout from './components/Layout';
import Routers from './components/Routers';

const App = () => {
  return (
    <div className="row container">
      <div>
        <Layout />
        <Routers />
      </div>
    </div>
  );
};

export default App;
