import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import Rocket from './Components/Rocket/Rocket';
import Mission from './Components/Mission/Mission';
import MyProfile from './Components/Profile/myProfile';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route exact path="/" component={<Rocket />} />
        <Route path="/mission" component={<Mission />} />
        <Route path="/myProfile" component={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
