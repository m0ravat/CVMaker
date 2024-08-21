function Details(phone, setPhone, email, setEmail, linkedIn, setLinkedIn){
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
    )
  }
  export default Details