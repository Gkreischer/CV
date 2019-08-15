import React from 'react';
import './App.scss';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './Components/MainComponent';

function App() {

  console.log('Obrigado por visitar meu Currículo');
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
