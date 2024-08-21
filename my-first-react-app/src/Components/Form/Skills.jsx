import PropTypes from 'prop-types';

function Skills({ skills, setSkills }) {
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
    <>
      <br /> <br />
      <h2>Skills</h2>
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
              style={{ width: '850px' }}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
  setSkills: PropTypes.func.isRequired,
};

export default Skills;
