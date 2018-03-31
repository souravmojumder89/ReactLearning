import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CustomComponent from './CustomComponent.jsx';
import ComponentLifeCycle from './ComponentLifeCycle.jsx';

const App = () => (
  <MuiThemeProvider>
    <CustomComponent />
    <ComponentLifeCycle/>
  </MuiThemeProvider>
);

ReactDOM.render(<App/>,document.getElementById('content'));