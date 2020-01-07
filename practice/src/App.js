import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactCard from './Components/ContactCard'

function App() {
  return (
    <div className="App">
        <div className="Contact-Cards">
          <ContactCard
            name={'Jessica'}
            mobileNumber={'123-456-7890'}
            workNumber={'243-233-3225'}
            email={'jessica@email.net'}    
          />
          <ContactCard
            name={'Tom'}
            mobileNumber={'123-456-7890'}
            workNumber={'678-901-2345'}
            email={'tom@email.com'}    
          />
          <ContactCard
            name={'Robert'}
            mobileNumber={'123-532-1233'}
            workNumber={'124-233-5435'}
            email={'rob@gmail.com'}    
          />
        </div>
    </div>
  );
}

export default App;
