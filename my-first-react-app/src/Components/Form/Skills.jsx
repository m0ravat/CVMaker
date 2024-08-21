import { useState } from "react";
function Skills() {
    // Initialize the state with the same structure as the skills array
      // Function to handle changes to skill text
      const [skills, setSkills] = useState([
        { text: "Skill 1", description: "Description of how you carried out this task." },
        { text: "Skill 2", description: "Description of how you carried out this task." },
        { text: "Skill 3", description: "Description of how you carried out this task." },
        { text: "Skill 4", description: "Description of how you carried out this task." },
        { text: "Skill 5", description: "Description of how you carried out this task." }
      ]);
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
      <> <br /> <br />
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
                style={{ width: '850px'}}
              />
            </li>
          ))}
        </ul>
      </>
    );
  }
  export default Skills