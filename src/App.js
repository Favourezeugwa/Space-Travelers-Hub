import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import RocketContainer from './Components/Rocket/RocketContainer';
import Mission from './Components/Mission/Mission';
import MyProfile from './Components/Profile/myProfile';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<RocketContainer />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/myProfile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
