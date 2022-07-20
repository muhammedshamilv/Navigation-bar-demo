import React, { useState } from 'react';
import About from './components/About';
import Profile from './components/Profile';
import { Routes, Route, useNavigate } from 'react-router-dom';
function App() {
  const [state, setState] = useState('');
  const navigate = useNavigate();
  return (
    <div className='App'>
      <button onClick={() => navigate('/about')}>About</button>
      <button onClick={() => navigate('/profile')}>Profile</button>

      <Routes>
        <Route element={<About />} path='/about' />
        <Route element={<Profile />} path='/profile' />
      </Routes>
    </div>
  );
}

export default App;
