
import { useState } from 'react';
import './App.css';
import Footer from './Footer';
import Marque from './Marque';
// import Modal from './Modal';
// import Nav from './Nav';
import Section1 from './Section1';
import Section2 from './Section2';
import logo2 from './assets/xrologo.svg';


const App = () => {

  // const activeColor = '#111827';
  const [visible, setvisible] = useState(false)
  const [stake , setStake] = useState(0);
  const [profit , setProfit] = useState(0);
  const close = (e) => {
      e.preventDefault();
      setvisible(false);
    }

  const open = (e) => {
    e.preventDefault();
    setvisible(true);
  }

  const btnclick = (e) => {
    e.preventDefault();
    setStake(e.target.innerText);
    setProfit( e.target.innerText * 3 );
  }


  const calculate = (e) => {
    setStake(e.target.value);
    setProfit( e.target.value * 3 );
  }

  return (
    <div className='w-full bg-[#F5F5F7]'>
      <Marque />
      <div className="w-full flex justify-between lg:px-12 px-2 py-8">
           <img src={logo2} className='h-8' alt="xrplogo" />
           <button onClick={(e)=>{open(e)}} className='bg-[#7269E1] px-7 py-2 text-white rounded-md text-sm font-semibold'> Join Airdrop </button>
        </div>
      <section className='w-full lg:px-20 px-2 flex flex-col lg:flex-row gap-[10px] lg:gap-[25px]'>
        <Section1 />
        <Section2/>
      </section>
      
      <section style={{ display : visible ? 'flex' : 'none' }} className='h-screen w-screen fixed z-10 lg:p-0 p-2 text-white top-0 left-0 bg-[rgba(0,0,0,0.8)] flex flex-col justify-center items-center'>
            <span onClick={(e)=>{close(e)}} className="inline-flex closeModal justify-center items-center h-10 w-10 rounded-full mb-5 mx-auto lg:mb-0 p-4 bg-[rgba(255,255,255,0.2)]"> <i className="fas text-2xl fa-xmark"></i> </span>  
              <form className='lg:w-1/2 lg:h-full w-full bg-[#7269E1] rounded-[20px] lg:p-10 p-7 text-center' action="">
                    <h1 className='text-lg font-semibold'>Select or Enter amount to stake</h1>
                    <div className="btn-group lg:p-5 p-0 w-full flex flex-wrap justify-center lg:gap-[30px] gap-[15px] text-wrap">
                          <button onClick={(e)=>{btnclick(e)}} className="lg:btn h-10 w-14 lg:w-20 px-10 py-5 text-black flex justify-center items-center rounded font-semibold lg:px-10 bg-white"> 1500 </button>
                          <button onClick={(e)=>{btnclick(e)}} className="lg:btn h-10 w-14 lg:w-20 px-10 py-5 text-black flex justify-center items-center rounded font-semibold lg:px-10 bg-white"> 2500 </button>
                          <button onClick={(e)=>{btnclick(e)}} className="lg:btn h-10 w-14 lg:w-20 px-10 py-5 text-black flex justify-center items-center rounded font-semibold lg:px-10 bg-white"> 4000 </button>
                          <button onClick={(e)=>{btnclick(e)}} className="lg:btn h-10 w-14 lg:w-20 px-10 py-5 text-black flex justify-center items-center rounded font-semibold lg:px-10 bg-white"> 5000 </button>
                          <button onClick={(e)=>{btnclick(e)}} className="lg:btn h-10 w-14 lg:w-20 px-10 py-5 text-black flex justify-center items-center rounded font-semibold lg:px-10 bg-white"> 10000 </button>
                          <button onClick={(e)=>{btnclick(e)}} className="lg:btn h-10 w-14 lg:w-20 px-10 py-5 text-black flex justify-center items-center rounded font-semibold lg:px-10 bg-white"> 15000 </button>
                          <button onClick={(e)=>{btnclick(e)}} className="lg:btn h-10 w-14 lg:w-20 px-10 py-5 text-black flex justify-center items-center rounded font-semibold lg:px-10 bg-white"> 20000 </button>
                          <button onClick={(e)=>{btnclick(e)}} className="lg:btn h-10 w-14 lg:w-20 px-10 py-5 text-black flex justify-center items-center rounded font-semibold lg:px-10 bg-white"> 30000 </button>
                          <button onClick={(e)=>{btnclick(e)}} className="lg:btn h-10 w-14 lg:w-20 px-10 py-5 text-black flex justify-center items-center rounded font-semibold lg:px-10 bg-white"> 40000 </button>
                          <button onClick={(e)=>{btnclick(e)}} className="lg:btn h-10 w-14 lg:w-20 px-10 py-5 text-black flex justify-center items-center rounded font-semibold lg:px-10 bg-white"> 50000 </button>
                    </div>


                    <div className="inp-group flex gap-[10px] w-full">
                            <div  className='w-1/2 my-2 inline-block text-left'>
                                <label htmlFor="" className='w-full'>Stake</label>
                                <input type="number"  className='w-full bg-transparent p-2 border-2 border-black rounded' onChange={(e)=>calculate(e)} value={stake} name="" id="" />
                            </div>

                            <div  className='w-1/2 my-2 inline-block text-left'>
                                <label htmlFor="" className='w-full'>Bonus</label>
                                <input type="number"  className='w-full bg-transparent p-2 border-2 border-black rounded' value={profit} name="" id="" />
                            </div>
                    </div>

                    <div  className='w-full inline-block text-left'>
                            <label htmlFor="" className='w-full text-left'>Address</label>
                            <input type="text"  className='w-full placeholder-white bg-transparent p-2 border-2 border-black rounded' placeholder='Enter your sending or recieving address' name="" id="" />
                            <label htmlFor="" className='w-full text-center text-sm'>Enter your sending or recieving address</label>
                    </div>

                    <button className="w-full py-3 mt-2 bg-[#111827] rounded">Generate Address</button>

                    
              </form>
      </section>
      <Footer/>
    </div>
  )
}

export default App
