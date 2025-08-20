// import College from "./College"

import { useActionState, useEffect, useState } from "react";

// function App() {

//   const collegeData = [
//     {
//       name: "IET Alwar",
//       city: "Alwar",
//       webiste: "www.iet.com",
//       student: [
//         {
//           name: "Chirag Ranpise",
//           age: '29',
//           email: "chirag@gmail.com"
//         },
//         {
//           name: "Karan Ranpise",
//           age: '19',
//           email: "chirag@gmail.com"
//         },
//         {
//           name: "Chhirag",
//           age: '20',
//           email: "chirag@gmail.com"
//         },
//         {
//           name: "Kkaran",
//           age: '15',
//           email: "kkaran@gmail.com"
//         }
//       ]
//     },
//     {
//       name: "IIT Delhi",
//       city: "Delhi",
//       webiste: "www.iit.com"

//     },
//     {
//       name: "KCIET Hisar",
//       city: "Hisar",
//       webiste: "www.kciet.com"

//     }
//   ]

//   return (
//     <div>
//       <h1>Nested Looping with Component</h1>
//       {
//         collegeData.map((college, index) => (
//           <div key={index}>
//             <College  college={college}/>
//           </div>
//         ))
//       }
//     </div>
//   )
// }


// function App() {

//   const [counter, setCounter] = useState(0)

//   useEffect(() => {

//   }, [])
//   function callOnce() {
//     console.log("CallOnce function called");

//   }

//   callOnce()

//   return (
//     <div>
//       <h1>useEffect Hook</h1>
//       <button onClick={() => setCounter(counter + 1)}>Counter {counter}</button>
//     </div>
//   )
// }

function App() {

  const handleSubmit = async (previousData, formData) => {
    let name = formData.get('name');
    let password = formData.get('password');

    // await new Promise(res => setTimeout(res, 2000))

    // console.log("handleSubmit Called", name, password);

    if (name && password) {
      return { message: 'Data Submitted', name, password }
    } else {
      return {
        error: 'Failed to Submit , Enter Proper Data', name, password
      }
    }
  }

  const [data, action, pending] = useActionState(handleSubmit, undefined);
  console.log(data);

  return (
    <div>
      <h1>useActionState Hook in React</h1>
      <form action={action}>
        <input defaultValue={data?.name} type="text" name="name" placeholder="Enter name" />
        <br /> <br />
        <input defaultValue={data?.password} type="password" name="password" placeholder="Enter password" />
        <br /> <br />
        <button disabled={pending}>Submit Data</button>
      </form>

      {
        data?.error && <span>{data?.error}</span>
      }
      {
        data?.message && <span>{data?.message}</span>
      }

      <h3>Name: {data?.name}</h3>
      <h3>Name: {data?.password}</h3>

    </div>
  );
}


export default App