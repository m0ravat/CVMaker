  function AboutME(opener, setOpener, help, setHelp, end,setEnd){
    return(
      <>
        <br />
        <br />
        <h2>About Me</h2>
        <input 
          type="text" 
          required
          placeholder="I am a (2-3 adjectives to describe yourself), with experience as a _______."
          onChange={(event) => setOpener(event.target.value)}
          style={{ width: '550px'}}
        /> <br />
        <input 
          type="text" 
          required
          placeholder="This helped me develop my skills by (list main and relevant responsibilities)."
          onChange={(event) => setHelp(event.target.value)}
          style={{ width: '750px'}}
        />  <br />
        <input 
          type="text" 
          required
          placeholder="I am keen to pursue part/full time employment/internship etc to (list reason you want to work)."
          onChange={(event) => setEnd(event.target.value)}
          style={{ width: '550px'}}
        /> 
      </>
    )
  }
  export default AboutME