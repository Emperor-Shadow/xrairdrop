import React from 'react';

const MarqueCard = () => {
    return (
        <div className="flex gap-[5px] p-2 items-center justify-center">
            <img src={coin.img} className="h-5" alt="" />
            <h1>{coin.name}</h1>
            <p>{coin.price}</p>
        </div>
    );
}

export default MarqueCard;
