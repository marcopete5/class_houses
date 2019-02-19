import React from 'react';

const House = (props) => {
    const displayMembers = props.members.map(member => <li>{member}</li>)
    return (
        <div className="house" id={props.name} style={{backgroundColor: props.colors[0], color: props.colors[1], textShadow: '1px 1px 1px ' + props.colors[2]}}>
            <h1>{props.name}</h1>
            <h1>{props.points}</h1>
            <span onClick={() => props.add(-10, props.name)}>-10</span><span onClick={() => props.add(-1, props.name)}>-</span><span onClick={() => props.add(1, props.name)}>+</span><span onClick={() => props.add(10, props.name)}>+10</span>
            <ul>
                {displayMembers}
            </ul>
        </div>
    );
};

export default House;