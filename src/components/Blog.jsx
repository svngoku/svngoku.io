import React from "react";
export default function Blog(){
   return (
    <div>
        <Header />
        <BlogContent />
    </div>
    
   );
}

function Header() {
    return (
        <div className="header">
            <h1 className="text-center">Blog Page</h1>            
        </div>
    )
}



function BlogContent() {
    const date = Date();
    return (
       <div className="container">
         <div className="main">
            <div className="row">
               <h1>TITLE HEADING</h1><small>{ date }</small>
                <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
           </div>
        </div>
       </div>
    );
}