import React from 'react';

function Timer({time,onTick}) {
    const [ seconds, setSeconds ] = React.useState(time);
    const [ timerActive, setTimerActive ] = React.useState(false);
  
    React.useEffect(() => {
      if (seconds > 0 && timerActive) {
        setTimeout(setSeconds, 1000, seconds - 1);
      } else {
        setTimerActive(false);
      }
    }, [ seconds, timerActive ]);

    onTick(seconds);
  
    return (
      <div>
              <button onClick={() => setTimerActive(!timerActive)}>
                {timerActive ? 'stop' : 'start'}
              </button>
              <div>{seconds}</div>
           <button onClick={() => setSeconds(time)}>Reset</button>
        
      </div>
    );
  }

  export default Timer;