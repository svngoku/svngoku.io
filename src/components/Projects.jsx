import React from "react";


export default function Projects(){
    return (
        <div>
        <h3 className="project">Projects</h3>
          <p>In 3 years in the world of computer development, I realized some projects as part of my studies, internships and staff.</p>
          <pre>
          <Project className="request python"  />
            <code className="request python"><a title="Script about Keywords arguments in python 3" href="https://github.com/svngoku/Keywords_arguments">Keyword arguments</a></code>
            <br />
            <code className="request javascript"><a title="Ce cours à été mis en place par ma personne suite aux cours concacré à nodejs suivi sur Lynda.com . Vous y retrouverez des morceaux de code compris dans des fichiers portant pour chacun d'eux le nom ou titre du module utiliser ." href="https://github.com/svngoku/Nodejs-Advanced">NodeJs advanced courses</a></code>
            <br />
            <code className="request php"><a title="Simple messaging system with Laravel and Bootstrap" href="https://github.com/svngoku/Laravel-Messagerie-System">Laravel : system messagerie</a></code>
            <br />
            <code className="request javascript"><a title="Setting up a Panoramic visualization system like Google Map Street View" href="https://github.com/svngoku/360-vue-with-ThreeJS">360 Panoramic visualization </a></code>
            <br />
            <code className="request php"><a title="Application of expense management and tax refund of the M2L" href="https://gitlab.com/Svngoku/fredi-m2l">Laravel : Maison des ligues de Lorraines |  FREDI</a></code>
          </pre>
      </div>
    );
}


function Project({className , title, source , name}) {
    return (
        <code className={className}>
            <a title={title} src={source}>
                {name}
            </a>
        </code>
    );
}