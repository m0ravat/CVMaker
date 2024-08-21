function Name(firstName, setFirstName, surName, setSurName) {
    return (
      <>
      <h2 className='Padd'>Name</h2>
        <input 
          type="text" 
          required
          placeholder="First Name"
          onChange={(event) => setFirstName(event.target.value)}
        /> 
        <br />
        <input 
          type="text" 
          required
          placeholder="Second Name"
          onChange={(event) => setSurName(event.target.value)}
        />
      </>
    );
  }
  export default Name