import logo2 from './assets/xrologo.svg';

const Nav = () => {
    return (
        <div className="w-full flex justify-between lg:px-12 px-2 py-8">
           <img src={logo2} className='h-8' alt="xrplogo" />
           <button className='bg-[#7269E1] px-7 py-2 text-white rounded-md text-sm font-semibold'> Join Airdrop </button>
        </div>
    );
}

export default Nav;
