const Notification = ({success,error})=>{
    if(success === null && error === null){
        return null
    }
    return (
        <>
            {success && <div className= 'success'>{success}</div>}
            {error && <div className='error'>{error}</div>}
        </>
    )
}

export default Notification