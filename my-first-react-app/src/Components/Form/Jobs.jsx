import { useState } from "react";
function Jobs() {
    const [jobs, setJobs] = useState([
      { title: "Job Title 1", date: "January 2022 - Present", description: "Job Description 1", skills: "Relevant Skills 1" },
      { title: "Job Title 2", date: "July 2021 - December 2021", description: "Job Description 2", skills: "Relevant Skills 2" },
      { title: "Job Title 3", date: "March 2020 - February 2021", description: "Job Description 3", skills: "Relevant Skills 3" },
    ]);
    // Handle changes to job title
    const handleTitleChange = (index, newTitle) => {
      const updatedJobs = jobs.map((job, i) =>
        i === index ? { ...job, title: newTitle } : job
      );
      setJobs(updatedJobs);
    };
  
    // Handle changes to job date
    const handleDateChange = (index, newDate) => {
      const updatedJobs = jobs.map((job, i) =>
        i === index ? { ...job, date: newDate } : job
      );
      setJobs(updatedJobs);
    };
  
    // Handle changes to job description
    const handleDescriptionChange = (index, newDescription) => {
      const updatedJobs = jobs.map((job, i) =>
        i === index ? { ...job, description: newDescription } : job
      );
      setJobs(updatedJobs);
    };
  
    // Handle changes to job skills
    const handleSkillsChange = (index, newSkills) => {
      const updatedJobs = jobs.map((job, i) =>
        i === index ? { ...job, skills: newSkills } : job
      );
      setJobs(updatedJobs);
    };
  
    return (
      <> <br />
        <h2>Jobs/Work related Experience</h2>
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>
              <input 
                type="text" 
                required
                placeholder={job.title}
                onChange={(event) => handleTitleChange(index, event.target.value)}
              />
              <input 
                type="text" 
                required
                placeholder={job.date}
                onChange={(event) => handleDateChange(index, event.target.value)}
                style={{ width: '300px' }} // Adjust width as needed
              />
              <textarea 
                required
                placeholder={job.description}
                maxLength={300}
                onChange={(event) => handleDescriptionChange(index, event.target.value)}
                style={{ width: '850px', height: '100px', resize:'none' }} // Adjust height for multiline input
              />
              <textarea 
                required
                placeholder={job.skills}
                maxLength={300}
                onChange={(event) => handleSkillsChange(index, event.target.value)}
                style={{ width: '850px', height: '50px', resize:'none' }} // Adjust height for multiline input
              />
            </li>
          ))}
        </ul>
      </>
  
    );
  }
  export default Jobs