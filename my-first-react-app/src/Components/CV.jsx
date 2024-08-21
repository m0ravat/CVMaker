import '../CSS/CV.css'
import About from './CV/AboutMe'
import Skills from './CV/Skills'
import Work from './CV/work'
import Start from './CV/Start'
import Education from './CV/Education'
function CV( ){
    return(
        <div className="CV">
            <Start/>
            <About />
            <Skills />
            <Work />
            <Education />
        </div>
    )
}
export default CV