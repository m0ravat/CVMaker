import { useState } from "react";
function Education() {
    // Initialize the state with education objects
    const [education, setEducation] = useState([
      { title: "Secondary School", description: "10 GCSE's with English Language (7), Maths (2), Main subject of interest (2)", required: true },
      { title: "College", description: "A level/Btec in ... with grades: ", required: false },
      { title: "University", description: "Degree in ... - Predicted/Achieved : First Class Honours", required: false },
    ]);
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
                style={{width:'750px'}}
              />
            </li>
          ))}
        </ul>
      </>
    );
  }
  export default Education