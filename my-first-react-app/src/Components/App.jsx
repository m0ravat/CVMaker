import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import '../CSS/App.css';

function Name() {
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  return (
    <>
    <h2 className='Padd'>Name</h2>
      <input 
        type="text" 
        required
        value={firstName} 
        placeholder="First Name"
        onChange={(event) => setFirstName(event.target.value)}
      /> 
      <br />
      <input 
        type="text" 
        required
        value={surName} 
        placeholder="Second Name"
        onChange={(event) => setSurName(event.target.value)}
      />
    </>
  );
}
function Details(){
  const [phone, setPhone] = useState("");
  const [email,setEmail] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  return (
    <>
      <br />
      <br />
      <h2>Personal Details</h2>
        <input 
          type="text" 
          maxLength={20}
          required
          value={phone} 
          placeholder="Phone Number"
          onChange={(event) => setPhone(event.target.value)}
        />
      <br />
      <input 
        type='email' 
        required
        value={email} 
        style={{width:'350px'}}
        placeholder="Email"
        onChange={(event) => setEmail(event.target.value)}
      /> 
      <br />
      <input 
        type="url" 
        value={linkedIn} 
        style={{width:"450px"}}
        placeholder="LinkedIn Link"
        onChange={(event) => setLinkedIn(event.target.value)}
      />
    </>
  )
}
function AboutME(){
  const [opener, setOpener] = useState("");
  const [help, setHelp] = useState("");
  const [end, setEnd] = useState("");
  return(
    <>
      <br />
      <br />
      <h2>About Me</h2>
      <input 
        type="text" 
        required
        value={opener} 
        placeholder="I am a (2-3 adjectives to describe yourself), with experience as a _______."
        onChange={(event) => setOpener(event.target.value)}
        style={{ width: '550px'}}
      /> <br />
      <input 
        type="text" 
        required
        value={help} 
        placeholder="This helped me develop my skills by (list main and relevant responsibilities)."
        onChange={(event) => setHelp(event.target.value)}
        style={{ width: '750px'}}
      />  <br />
      <input 
        type="text" 
        required
        value={end} 
        placeholder="I am keen to pursue part/full time employment/internship etc to (list reason you want to work)."
        onChange={(event) => setEnd(event.target.value)}
        style={{ width: '550px'}}
      /> 
    </>
  )
}

function Skills() {
  // Initialize the state with the same structure as the skills array
  const [skills, setSkills] = useState([
    { text: "Skill 1", description: "Description of how you carried out this task." },
    { text: "Skill 2", description: "Description of how you carried out this task." },
    { text: "Skill 3", description: "Description of how you carried out this task." },
    { text: "Skill 4", description: "Description of how you carried out this task." },
    { text: "Skill 5", description: "Description of how you carried out this task." }
  ]);

  // Function to handle changes to skill text
  const handleTextChange = (index, newText) => {
    const updatedSkills = skills.map((skill, i) =>
      i === index ? { ...skill, text: newText } : skill
    );
    setSkills(updatedSkills);
  };

  // Function to handle changes to skill description
  const handleDescriptionChange = (index, newDescription) => {
    const updatedSkills = skills.map((skill, i) =>
      i === index ? { ...skill, description: newDescription } : skill
    );
    setSkills(updatedSkills);
  };

  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>
          <input 
            type="text" 
            required
            placeholder={skill.text}
            onChange={(event) => handleTextChange(index, event.target.value)}
          />
          <input 
            type="text" 
            required
            placeholder={skill.description}
            maxLength={200}
            onChange={(event) => handleDescriptionChange(index, event.target.value)}
            style={{ width: '850px'}}
          />
        </li>
      ))}
    </ul>
  );
}

function Form(){
  return(
    <form action="">
      <Name />
      <Details />
      <AboutME />
      <Skills />
    </form>
  )

}
function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Welcome to my first React Project, <br /> This is a CV maker. </h1>
      <Form />
    </>
  )
}

export default App
