import React from 'react';
import AppCounter from './components/AppCounter';
import AppCounterDisplay from './components/AppCounterDisplay';


function App() {
  return (
    <div style={{ margin: '100px' }}>
      <AppCounter title="Counter" />
      <AppCounterDisplay />
    </div>
  );
}

export default App;
