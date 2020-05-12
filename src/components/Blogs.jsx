import React, {useState, useEffect} from "react";

const Blogs = () => {
    // apply effect
    useEffect(() => {
        document.title = 'Blogs | Svngoku.io '
    });

    const styleImg = {
        position:'relative',
        overflow:'hidden',
        display:'inline-block',
        width:'150px',
        height:'150px'
    }
   return (
       <div className="wrapper">
           <h1> Subjects </h1>
       </div>    
   );
}

export default Blogs;
