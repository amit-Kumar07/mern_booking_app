import * as React from 'react'
import {BrowserRouter as Router, Route,  Routes , Navigate} from '../node_modules/react-router-dom/dist/index';

import Layout from './layouts/Layout';
import Register from './pages/Register';
function App() {
 

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <p>Home Page</p>
            </Layout>
          }
        />
          <Route
          path="/search"
          element={
            <Layout>
              <p>Search Page</p>
            </Layout>
          }
        />
        <Route 
        path="/register" 
        element={
          <Layout>
           <Register/>
        </Layout>
        } />
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </Router>
  );
}

export default App
