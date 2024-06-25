// App.js
import React from 'react';
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error404 from "./containers/err/Error404";
import Home from "./containers/pages/Home";
import Login from './containers/auth/Login';
import store from "./store";
import { TabProvider } from './contexts/TabContext';

function App() {
  return (
    <div>
      <ReduxProvider store={store}>
        <Router>
          <TabProvider>
            <Routes>
              <Route path="*" element={<Error404 />} />
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </TabProvider>
        </Router>
      </ReduxProvider>
    </div>
  );
}

export default App;
