import React from 'react';
import myProvider from './context/myProvider';
import Routes from './routes/Routes';
import './assets/css/app.css'
function App() {
  return (
    <myProvider>
      <Routes />
    </myProvider>  
  );
}

export default App;
