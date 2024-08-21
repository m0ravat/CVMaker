import PropTypes from 'prop-types';
import '../CSS/CV.css';

function CV({ firstName, surName, phone, email, linkedIn, opener, help, end, skills, jobs, education }) {
  return (
    <div className="CV">
      <div className='title'>{firstName} {surName}</div>
      <div className='Details'>
        {phone} {email} {linkedIn}
      </div> 
      <br />
      <div className='AboutMe'>
        <h2 className="head">About Me</h2>
        <div className='text'>{opener}</div>
        <div className='text'>{help}</div>
        <div className='text'>{end}</div>
      </div> 
      <br />
      <div className="Skills">
        <h2 className="head">Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              <strong>{skill.text}</strong>: {skill.description}
            </li>
          ))}
        </ul>
      </div> 
      <br />
      <div className="Jobs">
        <h2 className="head">Work Related Experience</h2>
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>
              <strong>{job.title}</strong> ({job.date})<br />
              {job.description}<br />
              <em>Skills: {job.skills}</em>
            </li>
          ))}
        </ul>
      </div>
      <br />
      <div className="Education">
        <h2 className="head">Education History</h2>
        <ul>
          {education.map((edu, index) => (
            <li key={index}>
              <strong>{edu.title}</strong><br />
              {edu.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

CV.propTypes = {
  firstName: PropTypes.string.isRequired,
  surName: PropTypes.string.isRequired,
  phone: PropTypes.string,
  email: PropTypes.string,
  linkedIn: PropTypes.string,
  opener: PropTypes.string,
  help: PropTypes.string,
  end: PropTypes.string,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      skills: PropTypes.string.isRequired,
    })
  ).isRequired,
  education: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      required: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default CV;


