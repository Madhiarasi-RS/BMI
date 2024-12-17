import React from 'react';
import '../App.css'; 
import bmiImage from '../assets/bmi.avif';// Ensure you import your CSS file

const Home = () => (
  <div className="home-container">
    <div className="box"  style={{ backgroundImage: `url(${bmiImage})` }} />
    <h1>Welcome to the BMI Calculator App</h1>
    <p> 
      Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.
    </p>
  </div>
);

export default Home;
