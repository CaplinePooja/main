import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import Router and Routes
import Post from './components/post';
import Profile from './components/profile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile />} /> 
        <Route path="/post/:id" element={<Post />} /> 
      </Routes>
    </Router>
  );
};

export default App;
