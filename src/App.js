import React, {useState} from 'react';

import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';

const App = () => {

  const [getNavbarValue, setNavbarValue] = useState("");

  const chngeNavbarValue = () => {
    setNavbarValue("My Contacts");
  };
  
  return (
    <div className='App'>
      <Navigation navValue={getNavbarValue} />
      <button onClick={() => chngeNavbarValue()} >Ubah Navigation</button>        
      <br/>
      <br/>
      <br/>
      <Home/>
    </div>
  )
    
}
export default App;