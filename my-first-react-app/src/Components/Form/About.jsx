import PropTypes from 'prop-types';

function AboutME({ opener, setOpener, help, setHelp, end, setEnd }) {
  return (
    <>
      <br />
      <br />
      <h2>About Me</h2>
      <input 
        type="text" 
        placeholder="I am a (2-3 adjectives to describe yourself), with experience as a _______."
        value={opener}
        required
        onChange={(event) => setOpener(event.target.value)}
        style={{ width: '550px'}}
      /> <br />
      <input 
        type="text" 
        placeholder="This helped me develop my skills by (list main and relevant responsibilities)."
        value={help}
        required
        onChange={(event) => setHelp(event.target.value)}
        style={{ width: '750px'}}
      />  <br />
      <input 
        type="text" 
        placeholder="I am keen to pursue part/full time employment/internship etc to (list reason you want to work)."
        value={end}
        required
        onChange={(event) => setEnd(event.target.value)}
        style={{ width: '550px'}}
      /> 
    </>
  );
}

AboutME.propTypes = {
  opener: PropTypes.string,
  setOpener: PropTypes.func.isRequired,
  help: PropTypes.string,
  setHelp: PropTypes.func.isRequired,
  end: PropTypes.string,
  setEnd: PropTypes.func.isRequired,
};

export default AboutME;
