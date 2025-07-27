const College=({college})=>{
    return (
        <div>
            <h2>Name: {college.name}</h2>
            <ul>
              <li>
                <h3>City: {college.city}</h3>
              </li>
              <li>
                <h3>webiste: {college.webiste}</h3>
              </li>
            </ul>
        </div>
    )
}

export default College