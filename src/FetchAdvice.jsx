import React, { useState, useEffect } from 'react';
import img1 from './assets/images/pattern-divider-desktop.svg';
import img3 from './assets/images/icon-dice.svg';
import './App.css';

const FetchAdvice = () => {
  // State to store the advice and advice number
  const [adviceText, setAdvice] = useState('Loading..');
  const [adviceNumber, setAdviceNumber] = useState('');

  // Function to fetch advice from the API
  const fetchAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip.advice);
        setAdviceNumber(data.slip.id);
      })
      .catch((error) => {
        console.error(`Error fetching advice: ${error}`);
      });
  };

  // Use useEffect to fetch advice after the component mounts
  useEffect(() => {
    // Wait for 3 seconds before fetching advice
    const timeoutId = setTimeout(() => {
      fetchAdvice();
    }, 1000);

    // Clear the timeout if the component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
  }, []); // Empty dependency array means this effect runs once after mounting

  return (
    <>
    <main>
      <div className="advice-container">
        <p className="advice-id">Advice #{adviceNumber}</p>
        <p className="advice-text">{adviceText}</p>
      </div>
      <img src={img1} alt="" className="divider" />
      <button id="dice" onClick={fetchAdvice}>
        <img src={img3} alt="Dice to generate new advice" />
      </button>
    </main>
    <div className="attribution" >
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"> Frontend Mentor</a>. 
      Coded by  <a href="https://github.com/01kingdahvid/"> King Dahvid</a>
      </div>
    </>
    
  );
};

export default FetchAdvice;
