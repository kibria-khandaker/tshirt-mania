import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ornament}) => {
    // const ring = useContext(RingContext);
    // const [taka,house] = useContext(RingContext);
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h4>Special</h4>
            <p> <small>Ornament : {ornament}</small> </p>
            {/* <p> <small>Taka : {taka}</small> </p> */}
            <p> <small>House : {house}</small> </p>
            <p> <button onClick={()=>setHouse(house + 1)}> add buy a house</button> </p>

        </div>
    );
};

export default Special;