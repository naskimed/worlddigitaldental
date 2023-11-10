import React, { useEffect, useState } from 'react';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

const Aligneurs = () => {
  // Set the launch date in the following format: 'Month Day, Year, Hour, Minute, Second'
  const launchDate = new Date('January 1, 2024 00:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  function getTimeRemaining() {
    const now = new Date().getTime();
    const timeRemaining = launchDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <>
    <IndexNavbar fixed />
    <section className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 relative pt-16 items-center flex flex-col h-screen max-h-1000-px" id="index-cover">
      <div className="container max-w-xs text-center " style={{marginTop:"15rem"}}>
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg " style={{backgroundColor:"#ffffffcb", }}>
        <h2 className="text-5xl font-semibold text-blueGray-800 mb-4">
          Coming Soon
        </h2>
        <p className="text-2xl text-blueGray-800 mb-8">
          Our website is under construction.
        </p>
        <div className="text-3xl text-blueGray-800 mb-8">
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </div>
        <p className="text-blueGray-800">
          We're launching soon! Stay tuned for exciting updates.
        </p>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Aligneurs;