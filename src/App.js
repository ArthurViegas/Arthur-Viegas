import React from 'react';
import MyProvider from './context/MyProvider';
import Routes from './routes/Routes';
import './assets/css/app.css'
function App() {
  return (
    <MyProvider>
      <Routes />
    </MyProvider>  
  );
}

export default App;
