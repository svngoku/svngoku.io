import React, {useEffect} from "react";

export default function Blogs(){
    useEffect(() => {
        document.title = 'Articles | Svngoku.io '
    });
   return (
       <div className="wrapper">
       <h3>Blogs pages</h3>
           <div className="box">
                <span>blogs cards</span>
            </div>

            <div className="box">
                <span>blogs cards</span>
            </div>
       </div>    
   );
}
