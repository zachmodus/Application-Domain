import React, { useState } from 'react';
import AdminUser from './AdminUser';
import CreateAcc from './CreateAcc.jsx';
import EmailForm from './emailform';
import ReactDOM from 'react-dom/client';
import FileUpload from './fileupload';
import JournalEntryForm from './JournalEntryForm';
import AccountingApp from './AccountingApp';
import JournalEntry from './JournalEntry';

function Navbar() {

  const [isActive, setIsActive] = useState(false);
  const [activeComponent, setActiveComponent] = useState(null);
  const [showComponent, setShowComponent] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  const handleComponentChange = (component, event) => {
    event.preventDefault();
    setActiveComponent(component);
    setShowComponent(true);
  }

  const handleClear = () => {
    setActiveComponent(null);
    setShowComponent(false);
  }

  const gotoemail = (event) => {
    event.preventDefault(); // prevent the page from refreshing
  
    // render the EmailForm component
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <EmailForm />
      </React.StrictMode>
    );
  }
  

  const uppydocs = (event) => {
    event.preventDefault(); // prevent the page from refreshing
  
    // render the EmailForm component
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <FileUpload />
      </React.StrictMode>
    );
  }

  const uppydocs2 = (event) => {
    event.preventDefault(); // prevent the page from refreshing
  
    // render the EmailForm component
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <JournalEntry />
      </React.StrictMode>
    );
  }




  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
        </a>
        <button
          className={`navbar-burger ${isActive ? 'is-active' : ''}`}
          onClick={toggleNavbar}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-end">
          <a className="navbar-item" href="/">Accounts</a>
          <a className="navbar-item" href="/" style={{marginLeft: '20px'}} onClick={gotoemail}>Email</a>
          <a className="navbar-item" href="/" style={{marginLeft: '20px'}} onClick={uppydocs}>Upload Docs</a>
          <a className="navbar-item" href="/" style={{marginLeft: '20px'}} onClick={uppydocs2}>Journal</a>

          <a className="navbar-item" href="/create-user" style={{marginLeft: '20px'}} onClick={(event) => handleComponentChange('createUser', event)}>Create User</a>
        </div>
      </div>
      { showComponent ? (
        <div>
          { activeComponent === 'createUser' ? <CreateAcc /> : null }
          <button onClick={handleClear}>Clear</button>
        </div>
      ) : null }
    </nav>
  );
}

export default Navbar;
