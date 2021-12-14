import React from 'react';
import myProvider from './context/myProvider';
import Routes from './routes/Routes';

function App() {
  return (
    <myProvider>
      <Routes />
    </myProvider>  
  );
}

export default App;
