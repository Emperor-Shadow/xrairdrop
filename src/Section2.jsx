import logo from './assets/xrplogo.png';
import { useState, useEffect } from 'react';


const Section2 = () => {


  const storedTargetDate = localStorage.getItem('targetDate');
  const initialTargetDate = storedTargetDate ? new Date(storedTargetDate) : new Date();

    const targetDate = new Date(initialTargetDate);
   
  
    const calculateTimeRemaining = () => {
      const now = new Date();
      const difference = targetDate - now;
  
      if (difference <= 0) {
        // Timer has reached the target date
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }
  
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
      return {
        days,
        hours,
        minutes,
        seconds,
      };
    };
  
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  
    useEffect(() => {
      localStorage.setItem('targetDate', targetDate.toISOString());
      const timerId = setInterval(() => {
        setTimeRemaining(calculateTimeRemaining());
      }, 1000);
  
      // Clear the interval when the component is unmounted
      return () => clearInterval(timerId);
    }, []);


    return (
        <div className='lg:w-80 w-full text-white inline-block p-5 lg:h-[50rem] bg-[#7269E1] rounded-[20px]'>
           <header className="flex w-full justify-between items-center">
                        <div className='flex gap-[10px] w-48 p-2 items-center'>
                            <img src={logo} alt="logo" className='h-10' />
                            <div>
                                <h1 className='text-[24px] text-white font-semibold'>XRP</h1>
                            </div>
                        </div>
                </header>
                <main>
                    <h1 className='text-center'>Airdrop is live</h1>
                    <div className='flex w-full justify-center items-center gap-[10px] py-5'>
                            <section className='h-12 w-12 relative rounded flex justify-center items-center bg-[#242B35]'>
                                {timeRemaining.days}
                                <p className='text-xs absolute bottom-[-20px]'>Days</p>
                            </section>
                            <section className='h-12 w-12 relative rounded flex justify-center items-center bg-[#242B35]'>
                                {timeRemaining.hours}
                                <p className='text-xs absolute bottom-[-20px]'>Hours</p>
                            </section>
                            <section className='h-12 w-12 rounded relative flex justify-center items-center bg-[#242B35]'>
                                {timeRemaining.minutes}
                                <p className='text-xs absolute bottom-[-20px]'>Minutes</p>
                            </section>
                            <section className='h-12 w-12 rounded relative flex justify-center items-center bg-[#242B35]'>
                                {timeRemaining.seconds}
                                <p className='text-xs absolute bottom-[-20px]'>Seconds</p>
                            </section>
                    </div>

                    <div className="skeleton bg-[#000000] w-[280px] text-center mx-auto mt-5 h-5"></div>
                    <div className="w-[280px] text-xs text-center mx-auto mt-2 h-5 flex justify-between items-center">
                        <p>-9922671</p>
                        <p>10,000,000 XRP</p>
                    </div>

                    <h1 className='text-lg text-center text-black my-5 font-bold'> How to participate in the airdrop </h1>
                    <p className='px-2 text-sm leading-relaxed my-3'>1. To participate Click "JOIN" button, Enter the amount of $XRP you want to send and specify your receiving address,then Click "Generate address" to generate airdrop address and you can make the transaction using any Wallet or Exchange.</p>
                    <p className='px-2 text-sm leading-relaxed my-3'>2. Once your transaction is received, an outgoing transaction will be sent to your recieving address, Chargeback time from 30 seconds to 24 hours.</p>
                    <p className='px-2 text-sm leading-relaxed my-3'>3. You can participate in the competition until all allocated $XRP tokens for airdrop are completely distributed.</p>
                    <p className='px-2 text-sm leading-relaxed my-3'>4. All users can ONLY participate and claim airdrop once. Don't forget to invite your friends.</p>

                    <button className="w-full py-3 bg-black rounded">Join Airdrop</button>
                </main>
        </div>
    );
}

export default Section2;
