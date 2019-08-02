import React from 'react';
import AppCounter from './components/AppCounter';
import AppCounterDisplay from './components/AppCounterDisplay';
import { withBackgroundColorState } from './redux/containers';


function App(props) {
  return (
    <div style={{ margin: '100px', backgroundColor: props.backgroundColor }}>
      <AppCounter title="Counter" />
      <AppCounterDisplay />
    </div>
  );
}

export default withBackgroundColorState(App);
