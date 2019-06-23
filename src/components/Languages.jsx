import React from "react";

export default function Languages({className, link , name, stars, language,resume, example}){
    return (
        <div>
            <div className={className}>
                    <p><b><a href={link}>{name}</a></b> <Star number={stars}/> </p>
                    <pre>
                    <code className={"request " + language}>
                        {resume}
                    </code>             
                    <ShowCode link={example} />     
                </pre>
            </div>
        </div>
    );
}

// function Star({number}) {
//     const imgStar = "https://dumielauxepices.net/sites/default/files/stars-clipart-explosion-779070-6341730.png";
    
//     for(var i = 0; i < number.length; i++ ) {
//         return  <img className="star" src={imgStar} width="35" height="35" alt="" />
//     } 
// }

function Star({number}) {
    const imgStar = "https://dumielauxepices.net/sites/default/files/stars-clipart-explosion-779070-6341730.png"
    var component = <img className="star" src={imgStar} width="35" height="35" alt="" />;
     for(var i = 0; i < number.length; i++) {
        return component;
     } 
}


function ShowCode({link}) {
    return (
        <code>
            <script src={link}></script> 
        </code>
    )
}   




