import React, { useState, useEffect , Suspense, Fragment} from "react";
import Embed from 'react-runkit';



export default function Playground() {
    const [helloSource, setHelloSource] =  useState(`const javastips = require('javastips');
    `)
    
    useEffect( () => {
        document.title = 'Playground | Svngoku.io'
    })

    return (
       <Fragment>
            <div className="wrapper">
            <h1 className="text-center"> Welcome to Playground</h1>
            <pre>Here, you can try my library based on data structure .</pre>
            <Suspense fallback={<h1>Loading ....</h1>}>
                <Embed source={helloSource} />
            </Suspense>
           
        </div>
       </Fragment>
    );
}