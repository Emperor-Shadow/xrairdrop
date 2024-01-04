import logo from './assets/xrplogo.png';
import xrvideo from './assets/airdrop.mp4';
import Card from './Card';
const Section1 = () => {
    const cardInfo = [
        { head: 'Token' , body : 'XRP (XRP)' },
        { head: 'Type' , body : 'Multi-Chain' },
        { head: 'Total Supply' , body : '99,988,100,379 XRP' },
        { head: 'Market Cap' , body : '$31,447,996,967' },
        { head: 'Total Volume' , body : '1,305,219,630 XRP' },
    ];
    return (
        <div className='lg:flex-grow w-full p-5 rounded-[20px] bg-white shadow-lg'>
                <header className="flex w-full justify-between items-center">
                        <div className='flex gap-[10px] w-48 p-2 items-center'>
                            <img src={logo} alt="logo" className='h-10' />
                            <div>
                                <h1 className='text-[16px] font-semibold'>XRP</h1>
                                <div className='flex gap-[5px]'>
                                <i className="fab text-lg lg:text-2xl fa-facebook"></i>
                                <i className="fab text-lg lg:text-2xl fa-youtube"></i>
                                <i className="fab text-lg lg:text-2xl fa-twitter"></i>
                                </div>
                            </div>
                        </div>

                        <button className='bg-[#7269E1] text-white lg:text-md text-xs px-5 py-2 rounded-[30px] flex gap-[15px] items-center'>
                            <i className="fas fa-lock"></i>
                            Airdrop live 
                        </button>
                </header>

                <main className='lg:mt-10 mt-6'>
                        <p className='leading-loose lg:text-md text-sm text-justify'> The XRP Ledger (XRPL) is a decentralized, public blockchain led by a global developer community. It's fast, energy efficient, and reliable. With ease of development, low transaction costs, and a knowledgeable community, it provides developers with a strong open-source foundation for executing on the most demanding projects—without hurting the environment.</p>
                        <p className='leading-loose lg:text-md text-sm text-justify'> To commemorate the progress made by XRPL in the advancement of the XRP LEDGER community, we have committed a total of 10,000,000 $XRP for airdrop to fans worldwide. Every person can participate. In order to be eligible, participants should have a minimum of 1500 $XRP during the competition period. All Qualifying users will split a pool of 10,000,000 $XRP </p>
                <video className='lg:my-16 my-10' controls autoPlay width="100%">
                <source src={xrvideo} type="video/mp4" />
                </video>

                { cardInfo.map((card , index)=> ( <Card key={index} info = {card} /> )) }
                </main>
        </div>
    );
}

export default Section1;
