import React from 'react';



export default function Item(props) {
    return (
        <div className="">
            <img src={props.image}></img>
            <p>{props.title}</p>
            {props.author}
            <p>{props.description}</p>
            <p></p>
        </div>
    )
}