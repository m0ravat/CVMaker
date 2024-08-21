function About(opener = "", help = "", end=""){
    return(
        <>
            <h1 className='head'>About Me</h1>
            <div className='text'>{opener}  {help} {end}</div> <br />
        </>
    )
}
export default About