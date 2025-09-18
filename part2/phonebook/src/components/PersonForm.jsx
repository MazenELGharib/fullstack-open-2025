const PersonForm =({name ,handleAdd,number,setName,setNumber})=>{
    return(
        <div>
            <form onSubmit={(handleAdd)}>
                <div>
                    Name: <input value ={name} onChange={(e)=> setName(e.target.value)}/>
                </div>
                <div>
                    Number: <input value={number} onChange={(e)=> setNumber(e.target.value)}/>
                </div>
                <button type ="submit">Add</button>
            </form>
        </div>
    )
}

export default PersonForm