import React from 'react';
import RatioCharts from './Ratiocharts';
import ReactDOM from 'react-dom/client';

function HomeButton() {
  function handleClick() {
  
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <RatioCharts/>
      </React.StrictMode>
    );
  }

  return (
    <button onClick={handleClick}>
      Go to homepage
    </button>
  );
}

export default HomeButton;
