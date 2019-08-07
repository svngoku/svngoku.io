import React, {useState, useEffect} from "react";

export default function Blogs(){
    const [blogs, useBlogs] = useState(
        { 
            id: 1,
            title: 'Blog 1',
            picture: "https://raw.githubusercontent.com/svngoku/Pyline-App/master/pp.png",
            date: Date.

        }
    )
    useEffect(() => {
        document.title = 'Articles | Svngoku.io '
    });

   return (
       <div className="wrapper">
       <h3>Blogs pages</h3>
        <div className="box">
            <span>{ blogs.title }</span>
        </div>

        <div className="box">
        </div>
       </div>    
   );
}

