import React, { useState } from 'react'
import Output from './Output'

let timeOutID;
const Input = () => {
    const [time, setTime] = useState(0)
    const [start, setStart] = useState(false)
    const [displayBox, setDisplayBox] = useState(false)
    const handleInput = (e) => {
        setTime(e.target.value)
    }

    const handleStart = () => {
        setDisplayBox(true)
        timeOutID = setTimeout(() => {
            // console.log("clicked")
            setStart(true);
        }, time * 1000)
    }

    const handlePause = () => {
        
    }

    const handleReset = () => {
        setStart(false)
        setTime(0);
        clearTimeout(timeOutID);
    }

    return (
        <>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                <button className='start' onClick={handleStart}>Start</button>
                <button className='stop' onClick={handlePause}>Pause</button>
                <button className='reset' onClick={handleReset}>Reset</button>
                <input
                    className='inputTime'
                    type='text'
                    value={time}
                    onChange={(e) => handleInput(e)}
                />
            </div>
            <div style={{ height: "400px", width: "400px", border: "1px solid black", position: "relative", marginTop: "20px" }}>
                {displayBox && <div onClick={handleReset} style={{ height: "30px", width: "30px", border: "1px solid Red", backgroundColor: "red", position: "absolute", top: start ? "20px" : "180px", right: "130px" }}></div>}
            </div>
            <Output time={time}/>
        </>
    )
}

export default Input
