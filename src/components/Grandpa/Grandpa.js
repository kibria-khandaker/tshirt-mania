import React, { createContext, useState } from 'react';
import Aunty from './../Aunty/Aunty';
import Father from './../Father/Father';
import Uncle from './../Uncle/Uncle';
import './Grandpa.css';

export const RingContext = createContext('ball');

const Grandpa = () => {
    const [house, setHouse] = useState(1);

    const ornament = 'Diamond Ring';
    const taka = '5 luck';

    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }

    return (
        // <RingContext.Provider value='alur ring'>
        // <RingContext.Provider value={house}>
        // <RingContext.Provider value={taka}>
        // <RingContext.Provider value={[taka,house ]}>
        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa'>
                <section style={{ marginLeft: '15px' }} >
                    <h4>Grandpa</h4>
                    <p> House: {house} </p>
                    <button onClick={handleBuyAHouse} > Buy A House </button>
                </section>
                <section className='grandpa-child' style={{ display: 'flex' }} >
                    <Father house={house} ornament={ornament}></Father>
                    <Uncle house={house} ></Uncle>
                    <Aunty house={house} ></Aunty>
                </section>
            </div>
        </RingContext.Provider>

    );
};

export default Grandpa;