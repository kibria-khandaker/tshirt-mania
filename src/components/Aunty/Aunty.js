import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [house, setHouse] = useContext(RingContext)
    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <div>
            <h4> Aunty </h4>
            <p> House {house}</p>
            <button onClick={handleBuyAHouse} > Aunty Click </button>
        </div>
    );
};
export default Aunty;