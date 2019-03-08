import React from 'react';
import { Provider } from 'react-redux';

import Timeline from './TimelineContainer'


const App = ({ store }) => (
  <Provider store={ store }>
    <Timeline /> 
  </Provider>
);

export default App;