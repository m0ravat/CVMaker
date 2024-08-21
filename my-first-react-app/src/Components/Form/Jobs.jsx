import PropTypes from 'prop-types';

function Jobs({ jobs, setJobs }) {
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
    <>
      <br />
      <h2>Jobs/Work related Experience</h2>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            <input 
              type="text" 
              placeholder={job.title}
              onChange={(event) => handleTitleChange(index, event.target.value)}
            />
            <input 
              type="text" 
              placeholder={job.date}
              onChange={(event) => handleDateChange(index, event.target.value)}
              style={{ width: '300px' }} // Adjust width as needed
            />
            <textarea 
              placeholder={job.description}
              maxLength={300}
              onChange={(event) => handleDescriptionChange(index, event.target.value)}
              style={{ width: '850px', height: '100px', resize: 'none' }} // Adjust height for multiline input
            />
            <textarea 
              placeholder={job.skills}
              maxLength={300}
              onChange={(event) => handleSkillsChange(index, event.target.value)}
              style={{ width: '850px', height: '50px', resize: 'none' }} // Adjust height for multiline input
            />
          </li>
        ))}
      </ul>
    </>
  );
}

Jobs.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      date: PropTypes.string,
      description: PropTypes.string,
      skills: PropTypes.string,
    })
  ).isRequired,
  setJobs: PropTypes.func.isRequired,
};

export default Jobs;
