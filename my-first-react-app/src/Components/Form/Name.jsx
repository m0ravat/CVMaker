import PropTypes from 'prop-types';

function Name({ firstName, setFirstName, surName, setSurName }) {
  return (
    <>
      <h2 className='Padd'>Name</h2>
      <input 
        type="text" 
        required
        placeholder="First Name"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <br />
      <input 
        type="text" 
        required
        placeholder="Second Name"
        value={surName}
        onChange={(event) => setSurName(event.target.value)}
      />
    </>
  );
}
Name.propTypes = {
  firstName: PropTypes.string.isRequired,
  setFirstName: PropTypes.func.isRequired,
  surName: PropTypes.string.isRequired,
  setSurName: PropTypes.func.isRequired,
};
export default Name;

