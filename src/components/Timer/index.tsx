import React from 'react';
import { useState, useEffect } from "react";
import './style.css'

export const Timer = () => {
    const [mins, setMinutes] = useState(3);
    const [secs, setSeconds] = useState(0);
    useEffect(() => {
        let sampleInterval = setInterval(() => {
            if (secs > 0) {
                setSeconds(secs - 1);
            }
            if (secs === 0) {
                if (mins === 0) {
                    clearInterval(sampleInterval);
                } else {
                    setMinutes(mins - 1);
                    setSeconds(59);
                }
            }
        }, 1000);
        return () => {
            clearInterval(sampleInterval);
        };
    });

    return (
        <div className='Timer'>
            {!(mins && secs) ? "" : (
                <p>
                    Declined in {"0"}
                    {mins}:{secs < 10 ? `0${secs}` : secs}
                </p>
            )}
        </div>
    );
}

export default Timer;
