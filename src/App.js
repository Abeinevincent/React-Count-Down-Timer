import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  return (
       
        {/* Calculating time left between the current date and the target day of the event */}
        const calculateTimeLeft = () => {
          let year = new Date().getFullYear;

          let difference = +new Date(`10/01/${year}`) - +new Date();
          // The + before the Date object is to tell the JavaScript to cast the object as
          // an interger, which gives you the object's Unix timestamp represented as 
          // microseconds since epoch
          // The template literal is to keep the code reusable and add in the year variable 
          // along with the month and day of the event

          // Formatting the milliseconds to a more readable format i.e Days, Hours, Minutes
          // and Seconds
          let timeLeft = {};
          if (difference > 0) {
            timeLeft = {
              days: Math.floor(difference / (1000 * 60 * 60 * 24)),
              hours: Math.floor(difference / (1000 * 60 * 60) % 24),
              minutes: Math.floor((difference / 60 /60) % 60),
              seconds: Math.floor((difference / 1000) % 60)
            }
          }
          return timeeft;

          {/* Updating the App state with useState and useEffect */}
          const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
          const [year] = useState(new Date().getFullYear());
          useEffect(() => {
            const timer = setTimeout(() => {
              setTimeLeft(calculateTimeLeft());
            }, 1000);

            // clearTimeOut if the component is unmounted
            return () => clearTimeOut(timer)
            const timerComponents = [];

            // use Object.keys() to iterate over the timeLeft object you returned from
            // the the calculateTimeleft function
            Object.keys(timeLeft).forEach((interval) => {
              if (!timeLeft[interval]) {
                return;
              }
              timerComponents.push(
              <span>
                {timeLeft[interval]} {interval}{" "}
              </span>);
              // The empty {" "} are used so that the intervals that display timeLeft do not run into each
              // other when displayed on the screen
              // The {} allow you to use JavaScript inside JSX and the " " add the space

            })

          });
          return (
            <div>
              <h1>Event {year} Countdown</h1>
              <h2>With React Hooks</h2>
              {timerComponets.length ? timerComponets : <span>Time's up</span>}
            </div>
          )

  );
}

export default App;
