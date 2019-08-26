import React, { useState, useEffect } from "react";
import Embed from 'react-runkit';


const [helloSource, setHelloSource] =  useState(`console.log('Hello, world!')`)

useEffect( () => {
    document.title = 'Playground | Svngoku.io'
})


export default function Playground() {
    return (
        <div className="wrapper">
            <h1> Welcome to Playground</h1>

            <Embed source={helloSource} />
        </div>
    );
}