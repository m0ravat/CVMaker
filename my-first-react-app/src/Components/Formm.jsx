import '../CSS/App.css';
import { useState } from 'react';
import AboutME from './Form/About';
import Details from './Form/Details';
import Education from './Form/Education';
import Jobs from './Form/Jobs'
import Name from './Form/Name'
import Skills from './Form/Skills'
function Formm(){
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [phone, setPhone] = useState("");
  const [email,setEmail] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [opener, setOpener] = useState("");
  const [help, setHelp] = useState("");
  const [end, setEnd] = useState("");


  const handleSubmit = (event) =>{
    event.preventDefault();

  }
    return(
      <form onSubmit={handleSubmit}>
        <Name 
          firstName={firstName} setFirstName={setFirstName} 
          surName={surName} setSurName={setSurName} 
        />
        <Details 
          phone={phone} setPhone={setPhone} 
          email={email} setEmail={setEmail} 
          linkedIn={linkedIn} setLinkedIn={setLinkedIn} 
        />
        <AboutME
          opener={opener} setOpener ={setOpener}
          help={help} setHelp={setHelp}
          end={end} setEnd={setEnd}
         />
        <Skills
         />
        <Jobs
         />
        <Education
        /> <br />
        <button type='submit'>Create CV</button>
      </form>
    )
  }
  export default Formm