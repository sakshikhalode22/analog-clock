import React, { useState, useEffect } from 'react';
import './Clock.css';

function Clock() {
 const [time, setTime] = useState(new Date());

 useEffect(()=>{
    const interval=setInterval(()=>
        setTimeout(setTime(new Date()),1000)
    )

    let ampm='';
    const min=time.getMinutes().toLocaleString('en-US',{minimumIntegerDigits:2,useGrouping:false})
    const sec=time.getSeconds();

    const hour12=()=>{
        let hour=time.getHours();
        if(hour<12){
            ampm='AM';
        }
        if(hour>=12){
            hour=hour-12;
            ampm='PM';
        }
        if(hour===12){
            hour=12;
        }
        return hour;
    }

    let hr=hour12();

    const hourHand =document.getElementById('hourHand');
    const minuteHand =document.getElementById('minuteHand');
    const secondHand =document.getElementById('secondHand');
    const digitalClock = document.getElementById('digital')

    hourHand.style.transform=`rotate(${hr*30+min*0.5-180}deg)`;
    minuteHand.style.transform=`rotate(${min*6-180}deg)`;
    secondHand.style.transform=`rotate(${sec*6-180}deg)`;
    digitalClock.innerHTML=hr+":"+min+" "+ampm

    return ()=>{
        clearInterval(interval)
    }
 },[time])

 return (
    
    <div>
        
        <div className='clock'>
            <div className='face'>
                <div id='secondHand' className='hand secondhand'></div>
                <div id='minuteHand' className='hand minutehand'></div>
                <div id='hourHand' className='hand hourhand'></div>
                <div className='hand center'></div>
                <div id='digital' className='digital'></div>
            </div>
        </div>
    </div>
 );
}

export default Clock;