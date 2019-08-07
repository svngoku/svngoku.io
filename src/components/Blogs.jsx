import React, {useState, useEffect} from "react";



export default function Blogs(){
    const styleImg = {
        position:'relative',
        overflow:'hidden',
        display:'inline-block',
        width:'150px',
        height:'150px'
    }
    const [blogs, setBlogs] = useState(
        { 
            id: 1,
            title: 'Blog 1',
            picture: "https://www.taniarascia.com/static/958cb5fcf40d0196ffc68166b4dc1522/4148e/js.png",
            date: Date.now(),
            link: ''
        }
    )
    // apply effect
    useEffect(() => {
        document.title = 'Articles | Svngoku.io '
    });

   return (
       <div className="wrapper">
       <h3>Blogs pages</h3>
        <a className="posts" href="/blog">
            <div className="each box">
                <div className="gatsby-image-wrapper" style={styleImg} >
                    <img className="logo-image" alt='' src={blogs.picture} />
                </div>
                <div>
                    <h2>{blogs.title}</h2>
                </div>
            </div>
        </a>

       </div>    
   );
}

