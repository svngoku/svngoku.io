import React, {useEffect} from "react";
import Profile from "../components/Profile.jsx";
import Languages from '../components/Languages.jsx'
import Projects from "../components/Projects.jsx";
import BooksLinks from "../components/BooksLinks.jsx";
import Tools from "../components/Tools.jsx";
import Footer from "../components/Footer.jsx";

export default function HomePage() {
    useEffect(() => {
        document.title = 'Home | Svngoku.io '
    });
    return (
        <div>
            <div className="wrapper">
                {/* Profile Component */}
                <Profile title="Marty NIONGOLO | Svngoku" />
                
                {/* Languages Component */}
                <Languages/>

                {/* Project Component */}
                <Projects />

                {/* Books&Links Component */}
                <BooksLinks />
                
                {/* Tools component */}
                <Tools />

                {/* Footer Component */}
                <Footer />
            </div>  
        </div>
    );
}
