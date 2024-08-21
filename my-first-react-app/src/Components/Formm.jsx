import { useState } from 'react';
import Name from './Form/Name';
import Details from './Form/Details';
import AboutME from './Form/About';
import Skills from './Form/Skills';
import Jobs from './Form/Jobs';
import Education from './Form/Education';
import CV from './CV';

function Formm() {
  // State to manage form inputs
  const [firstName, setFirstName] = useState('');
  const [surName, setSurName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [opener, setOpener] = useState('');
  const [help, setHelp] = useState('');
  const [end, setEnd] = useState('');
  const [education, setEducation] = useState([
    { title: "Secondary School", description: "10 GCSE's with English Language (7), Maths (2), Main subject of interest (2)", required: true },
    { title: "College", description: "A level/Btec in ... with grades: ", required: false },
    { title: "University", description: "Degree in ... - Predicted/Achieved : First Class Honours", required: false },
  ]);
  const [jobs, setJobs] = useState([
    { title: "Job Title 1", date: "January 2022 - Present", description: "Job Description 1", skills: "Relevant Skills 1" },
    { title: "Job Title 2", date: "July 2021 - December 2021", description: "Job Description 2", skills: "Relevant Skills 2" },
    { title: "Job Title 3", date: "March 2020 - February 2021", description: "Job Description 3", skills: "Relevant Skills 3" },
  ]);
  const [skills, setSkills] = useState([
    { text: "Skill 1", description: "Description of how you carried out this task." },
    { text: "Skill 2", description: "Description of how you carried out this task." },
    { text: "Skill 3", description: "Description of how you carried out this task." },
    { text: "Skill 4", description: "Description of how you carried out this task." },
    { text: "Skill 5", description: "Description of how you carried out this task." }
  ]);

  // State to manage CV visibility
  const [cvData, setCvData] = useState(null);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Create CV data object
    const newCvData = {
      firstName,
      surName,
      phone,
      email,
      linkedIn,
      opener,
      help,
      end,
      education,
      jobs,
      skills
    };

    // Update CV data state
    setCvData(newCvData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Name 
          firstName={firstName} 
          setFirstName={setFirstName} 
          surName={surName} 
          setSurName={setSurName} 
        />
        <Details 
          phone={phone} 
          setPhone={setPhone} 
          email={email} 
          setEmail={setEmail} 
          linkedIn={linkedIn} 
          setLinkedIn={setLinkedIn} 
        />
        <AboutME
          opener={opener} 
          setOpener={setOpener}
          help={help} 
          setHelp={setHelp}
          end={end} 
          setEnd={setEnd}
        />
        <Skills
          skills={skills}
          setSkills={setSkills}
        />
        <Jobs
          jobs={jobs}
          setJobs={setJobs}
        />
        <Education
          education={education}
          setEducation={setEducation}
        />
        <br />
        <button type='submit'>Create CV</button>
      </form>
      {cvData && <CV {...cvData} />}
    </>
  );
}

export default Formm;



