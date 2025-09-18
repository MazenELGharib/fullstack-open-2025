const Filter = ({filter,setFilter})=>{
    return(
            <div>
                Search: <input value={filter} onChange={(e)=>setFilter(e.target.value)}/>
            </div>
    )
}

export default Filter