const Course = ({course}) => {

    return(
        <div>
            {course.map(c=>{
                return(
                    <div key={c.id}>
                        <h1>{c.name}</h1>
                        <ul>
                            {c.parts.map( part =>{
                                return <li key={part.id} >{part.name} {part.exercises} </li>
                            })}
                            <li>
                                Total of exercises = {c.parts.reduce((total , part)=> total + part.exercises , 0)}
                            </li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default Course