
const Search = ({filter, setFilter, loading}) => {
    console.log(filter)
    
    return (
        <div>
            Find countries <input value={filter} onChange ={(e)=>setFilter(e.target.value)}/>
            {loading && filter!=='' && <p>Loading countries...(Sometimes it takes a while due to API response times)</p>}
        </div>
    )
}
export default Search