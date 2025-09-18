import{useState} from 'react'
const FlagImage =({src,alt})=>{
    const [load,setLoad] = useState(true)
    return(
        <>
        {load && <strong>Loading image...</strong>}
        <img src= {src} alt = {alt} onLoad={()=> setLoad(false)} />    
        </>
        
        
        
    )
}
export default FlagImage