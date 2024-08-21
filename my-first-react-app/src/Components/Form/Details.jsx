
import PropTypes from 'prop-types';

function Details({  setPhone,  setEmail, setLinkedIn }) {
  return (
    <>
      <br />
      <br />
      <h2>Personal Details</h2>
      <input 
        type="text" 
        maxLength={20}
        required
        placeholder="Phone Number"
        onChange={(event) => setPhone(event.target.value)}
      />
      <br />
      <input 
        type='email' 
        required
        style={{width:'350px'}}
        placeholder="Email"
        onChange={(event) => setEmail(event.target.value)}
      /> 
      <br />
      <input 
        type="url" 
        style={{width:"450px"}}
        placeholder="LinkedIn Link"
        onChange={(event) => setLinkedIn(event.target.value)}
      />
    </>
  );
}

Details.propTypes = {
  phone: PropTypes.string,
  setPhone: PropTypes.func.isRequired,
  email: PropTypes.string,
  setEmail: PropTypes.func.isRequired,
  linkedIn: PropTypes.string,
  setLinkedIn: PropTypes.func.isRequired,
};

export default Details;
