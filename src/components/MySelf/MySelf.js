import React from 'react';
import Special from './../Special/Special';

const MySelf = ({house,ornament}) => {
    return (
        <div>
            <h4> My-Self </h4>
            <p>House {house} </p>
            <Special house={house} ornament={ornament}></Special>
        </div>
    );
};

export default MySelf;