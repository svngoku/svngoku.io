import React from "react";
// import ReactMarkdown from "react-markdown";
// import SAP from "../../public/markdown/SAP.md"
// import RenderGist from "react-render-gist";



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
    // const input = '# Hello from Venus'
    //const date = Date();
    
    return (
       <div className="container">
         <div className="main">
            <span> Hello World </span>
            {/* <ReactMarkdown source={SAP} /> */}
        </div>
       </div>
    );
}
