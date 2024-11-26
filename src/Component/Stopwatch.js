import React, { useState } from 'react'
import { PiFlagPennantFill } from "react-icons/pi";



const Stopwatch = () => {
   

    const [time, setTime] = useState({hr:0,min:0,sec:0,millisec:0});
    const [status, SetStatus]= useState();
    const [laps, setLaps] = useState([])
    

    let updateHr = time.hr;
    let updateMin = time.min;
    let updateSec = time.sec;
    let updateMiliSec = time.millisec;
    
    const TimeDescFun = () =>{
      if(updateMiliSec === 100){
        updateMiliSec = 0;
        updateSec++;
      }
      if(updateSec === 60){
        updateSec=0;
        updateMin++
      }
      if(updateMin === 60){
        updateMin=0;
        updateHr++
      }
      updateMiliSec++;
      return setTime({hr:updateHr,min:updateMin,sec:updateSec,millisec:updateMiliSec})
    }


    const start = ()=>{
      TimeDescFun();
      SetStatus(setInterval(TimeDescFun, 10))
      clearInterval(status);
    }

    const stop = () =>{
    clearInterval(status);
    }
    
    const reset = () =>{
      clearInterval(status);
      setTime({hr:0,min:0,sec:0,millisec:0})
      setLaps([])
    }
  

    const handeLaping = ()=>{
    setLaps((prevLap) =>  ([ time, ...prevLap ])); 
    }

    console.log(time);
  return (
    // <div className='h-screen w-screen bg-black'>
    <div className=" w-full h-screen bg-no-repeat bg-center bg-cover bg-[url(https://images.unsplash.com/photo-1600166893106-ee2fad6c50ae?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
     <div className='xl:h-[550px] xl:w-[400px] md:h-[600px] md:w-[400px]  bg-black/90 absolute xl:top-20 xl:left-72 md:top-14 md:left-20 border-4 rounded-xl 2xl:top-28 2xl:left-96 h-[480px] w-[270px] top-20 left-8 border-white/90 text-white '>
        <div className='flex flex-col justify-center items-center  xl:space-y-11 md:space-y-10 space-y-7 '>
          <div className='xl:mt-10 md:mt-5 mt-8 bg-white/90 rounded-xl '>
            <h1 className='xl:text-5xl text-yellow-400 outline-double xl:px-6 xl:py-2 md:px-3 md:py-1 font-serif font-bold md:text-[44px] text-[35px] px-5 py-1 '>Stopwatch</h1>
          </div>
         <div className=''>
            <h1 className='xl:text-6xl font-mono font-bold md:text-6xl text-4xl'>{`0${time.hr}`.slice(-2) + ":" + `0${time.min}`.slice(-2) + ":" + `0${time.sec}`.slice(-2)+ ":" }<span className='xl:text-4xl md:text-4xl text-yellow-100'
            >{`0${time.millisec}`.slice(-2) }</span></h1>
         </div>
         <div className='xl:space-x-5 xl:text-[14px] md:space-x-3 md:text-[20px] text-[12px] space-x-2'>
            <button onClick={start} className='border-2 rounded-xl font-serif font-semibold hover:bg-green-700 xl:px-3 md:px-3 px-2 hover:text-gray-400  xl:py-1 md:py-1 py-1 bg-green-600' >Start</button>
            <button onClick={stop} className='border-2 rounded-xl  font-serif font-semibold hover:bg-red-700 xl:px-3 md:px-3   px-2 hover:text-gray-400 xl:py-1 md:py-1  py-1 bg-red-600 ' >Stop</button>
            <button onClick={reset}  className='border-2 rounded-xl font-serif font-semibold hover:bg-blue-700 xl:px-3 md:px-3 px-2 hover:text-gray-400  xl:py-1 md:py-1 py-1 bg-blue-600 ' >Reset</button>
            <button onClick={handeLaping} className=' rounded-full border xl:py-4 xl:px-4 md:py-3 md:px-3 py-2 px-2 bg-gray-500 hover:bg-slate-400'><PiFlagPennantFill /></button>
         </div>
            <ul className='xl:space-y-4 xl:overflow-auto xl:no-scrollbar xl:h-40 md:overflow-auto md:h-[200px] space-y-2 overflow-auto h-[180px]'>
            {
              laps.map((curLap, i )=>{
                return (
                  <li key={i} className='border-b-[1px] xl:px-6 xl:py-1 xl:space-x-8 md:px-7 md:py-2 md:space-x-4 space-x-3.5'> 
                            <span className=' xl:text-[15px]  md:text-[18px] text-[13px] '> <sapn className=" font-serif text-purple-500">Lap {i+1}</sapn>  </span>
                            <span className=' xl:text-[18px]  md:text-[25px]' > {`0${curLap.hr}`.slice(-2)} </span>
                            <span className=' xl:text-[18px]  md:text-[25px]' > {`0${curLap.min}`.slice(-2)} </span>
                            <span className=' xl:text-[18px]  md:text-[25px]' > {`0${curLap.sec}`.slice(-2)} </span>
                            <span className=' xl:text-[18px]  md:text-[25px]' > {`0${curLap.millisec}`.slice(-2)} </span>
                        
                   </li>
                )
              })
            }
          </ul>
        </div> 
    </div>
    </div>
//  </div>
  )
}

export default Stopwatch
