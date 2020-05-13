import React, {useState, useEffect} from "react";
import axios from "axios"

const Blogs = () => {
    const [gists, setGists] = useState([])
    // apply effect
    useEffect(() => {
        document.title = 'Blogs | Svngoku.io ';

        // API call
        axios.get(`https://api.github.com/users/svngoku/gists`, {
            headers: { Authorization: "f910739549334dd00e407db640c407076b4c6c98" }
        }).then(res => {
            const gist = res.data;
            console.log(gist)
            setGists(gist);
        })
    }, []);

    const renderGists = (gist) => {
        const { id, description, files } = gist;
        console.log({...files});
        return (
            <div className="each" key={id}>

                <p>{description}</p>
            </div>
        );
    }

    const styleImg = {
        position:'relative',
        overflow:'hidden',
        display:'inline-block',
        width:'150px',
        height:'150px'
    }
   return (
       <div className="wrapper">
           <h1> Blog posts </h1>
           <div className="project">
               {
                    (gists && gists.length > 0) ?
                    ( gists.map(gist => renderGists(gist))) : (
                        <span className="center" role="img" aria-label="failed men">No gist found 😵</span>
                    )
               }
           </div>
       </div>    
   );
}

export default Blogs;
