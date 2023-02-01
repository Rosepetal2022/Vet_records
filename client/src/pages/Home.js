import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from '../components/Modal/Login';
import SignUp from '../components/Modal/SignUp';

const Home = () => {
  return (
    <>
    <header className="header">
      <div className="home-text-box">
        <h1 className="home-primary">
          <span className="home-main">Pawprint</span>
          <span className="home-sub">keep track of your pets every need</span>
          <div className="d-flex justify-content-center">
          <Login />
          <SignUp />
          </div>
        </h1>
      </div>
    </header>
    <div className="app-text">
      <span className="app-text-main">Paw Print is desigend with your pet in mind.</span>
    
      <span className="app-text-sub">
        This app will allow you to track medications, food allergies, age, weight and so much more.
        with features being added everyday, let Paw Print do the work for you.
      </span>
    </div>
    </>
  );
};

export default Home;