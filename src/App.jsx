import College from "./College"

function App() {

  const collegeData = [
    {
      name: "IET Alwar",
      city: "Alwar",
      webiste: "www.iet.com",
      student: [
        {
          name: "Chirag Ranpise",
          age: '29',
          email: "chirag@gmail.com"
        },
        {
          name: "Karan Ranpise",
          age: '19',
          email: "chirag@gmail.com"
        },
        {
          name: "Chhirag",
          age: '20',
          email: "chirag@gmail.com"
        },
        {
          name: "Kkaran",
          age: '15',
          email: "kkaran@gmail.com"
        }
      ]
    },
    {
      name: "IIT Delhi",
      city: "Delhi",
      webiste: "www.iit.com"

    },
    {
      name: "KCIET Hisar",
      city: "Hisar",
      webiste: "www.kciet.com"

    }
  ]

  return (
    <div>
      <h1>Nested Looping with Component</h1>
      {
        collegeData.map((college, index) => (
          <div key={index}>
            <College  college={college}/>
          </div>
        ))
      }
    </div>
  )
}

export default App