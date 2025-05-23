import React, { useEffect, useState } from 'react'

const LoadingScreen = ({onComplete}) => {
    const [text,setText] = useState("");
    const fulltext = "<Create Poll · Analyze Votes/>"

    useEffect(()=>{
        let index =0;
        const interval = setInterval(()=>{
            setText(fulltext.substring(0,index));
            index++;
            if(index >fulltext.length){
                clearInterval(interval)
                setTimeout(()=>{
                    onComplete();
                },1000)
            }

        },100);
        return () => clearInterval(interval);
    },[onComplete])

  return (
    <div className='fixed inset-0 z-50 bg-[#6D6B67] dark:bg-black text-gray-100 flex flex-col items-center justify-center'>
        <div className="mb-4 text-5xl font-mono font-bold">{text}
            <span className='animate-blink ml-1' >|</span></div>
    </div>
  
  )
}

export default LoadingScreen;
