import React, { useState, useEffect } from 'react';
import './Clock.css';

function Clock() {
 const [time, setTime] = useState(new Date());

 useEffect(()=>{
    const interval=setInterval(()=>
        setTimeout(setTime(new Date()),1000)
    )
    let hr=time.getHours();
    const min=time.getMinutes();
    const sec=time.getSeconds();

    const hourHand =document.getElementById('hourHand')
    const minuteHand =document.getElementById('minuteHand')
    const secondHand =document.getElementById('secondHand')

    hourHand.style.transform=`rotate(${hr*30+min*0.5-180}deg)`
    minuteHand.style.transform=`rotate(${min*6-180}deg)`
    secondHand.style.transform=`rotate(${sec*6-180}deg)`

    return ()=>{
        clearInterval(interval)
    }
 },[time])

 return (
    
    <div>
        <div className='clock'>
            <div className='face'>
                <div id="secondHand" className='hand secondhand'></div>
                <div id="minuteHand" className='hand minutehand'></div>
                <div id="hourHand" className='hand hourhand'></div>
                <div className='hand center'></div>
            </div>
        </div>
    </div>
 );
}

export default Clock;