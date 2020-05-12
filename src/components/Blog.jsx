import React from "react";
import RenderGist from "react-render-gist";

const Blog = () => {

function Header() {
    return (
        <div className="header">
        </div>
    )
}

const BlogContent = ()  => {
    return (
       <div className="container">
         <div className="main">
            {/* <ReactMarkdown source={SAP} /> */}
            <RenderGist gist="d5cbf6738d402b5ef00d4bcf5ac26ca9" />
        </div>
       </div>
    );
}
   return (
    <div>
        <Header />
        <BlogContent />
    </div>
    
   );
}


export default Blog;

