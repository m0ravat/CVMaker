function Start(firstName="",surName="",phone="",email="",linkedIn=""){
    return(
        <>
            <div className='title'>{firstName}  {surName}</div>
            <div className='Details'>{phone}   {email}    {linkedIn}</div> <br /> <br />
        </>
    )
}
export default Start