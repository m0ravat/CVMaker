import PropTypes from 'prop-types';

function Education({ education, setEducation }) {
  // Handle changes to the title
  const handleTitleChange = (index, newTitle) => {
    const updatedEducation = education.map((edu, i) =>
      i === index ? { ...edu, title: newTitle } : edu
    );
    setEducation(updatedEducation);
  };

  // Handle changes to the description
  const handleDescriptionChange = (index, newDescription) => {
    const updatedEducation = education.map((edu, i) =>
      i === index ? { ...edu, description: newDescription } : edu
    );
    setEducation(updatedEducation);
  };

  return (
    <>
      <h2>Education History</h2>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            <input 
              type="text" 
              required={edu.required} // Mark input as required only for secondary school
              placeholder={edu.title}
              onChange={(event) => handleTitleChange(index, event.target.value)}
            />
            <input 
              type="text" 
              required={edu.required} // Mark input as required only for secondary school
              placeholder={edu.description}
              onChange={(event) => handleDescriptionChange(index, event.target.value)}
              style={{ width: '750px' }}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

Education.propTypes = {
  education: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      required: PropTypes.bool,
    })
  ).isRequired,
  setEducation: PropTypes.func.isRequired,
};

export default Education;
