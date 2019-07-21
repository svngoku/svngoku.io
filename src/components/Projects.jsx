import React from "react";

function Projects(){
    return (
        <div>
            <h3 className="project">Projects</h3>
            <p>In 3 years in the world of computer development, I realized some projects as part of my studies, internships and staff.</p>
            <pre>        
                <Project className="request python" title="Script about Keywords arguments in python 3" source="https://github.com/svngoku/Keywords_arguments" name="Keyword arguments"  />
                <Project className="request php" title="Application of expense management and tax refund of the M2L" source="https://gitlab.com/Svngoku/fredi-m2l" name="Laravel : Maison des ligues de Lorraines |  FREDI"  />
                <Project className="request javascript" title="Ce cours à été mis en place par ma personne suite aux cours concacré à nodejs suivi sur Lynda.com . Vous y retrouverez des morceaux de code compris dans des fichiers portant pour chacun d'eux le nom ou titre du module utiliser ." source="https://github.com/svngoku/Nodejs-Advanced" name="NodeJs advanced courses" />
                <Project className="request javascript" title="Setting up a Panoramic visualization system like Google Map Street View" source="https://github.com/svngoku/360-vue-with-ThreeJS" name="360 Panoramic visualization" />
            </pre>
        </div>
    );
}


function Project({className , title, source , name}) {
    return (
        <div>
            <code className={className}>
                <a title={title} href={source}>
                    {name}
                </a>
                <br>
                </br>
            </code>
        </div>
    );
}

export default Projects;