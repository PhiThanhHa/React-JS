import {useEffect, useState } from "react";
import Content from "./Content";
import React from "react";



// function App() {

//   const [counter, setCounter] = useState(1)
//   const handleIcrease = () => {
//     setCounter(counter + 1)
//   }

//   return (
//     <div className="App" style={{padding : 20}}>
//      <h1>{counter}</h1>
//      <button onClick = {handleIcrease}>Increase</button>
//     </div>
//   );
// }

// export default App;


// function App2() {
//     const [cars, setCars] = useState(['Bugatti', 'Roll-Royce', 'Maybach']);
    
//     const handleUpdate = () => {
//          setCars((prevState) => {
//               return [...prevState, 'Lamborghini']
//          })
//     }

//     console.log(cars) // Output: ?

//     return (
//         <div>
//             <h1>ReactJS</h1>
//             <button onClick={handleUpdate}>Update</button>
//         </div>
//     )
// }

// export default App2;

// const gifts = [ 
//  ' ha',
//   'b',
//   'c',
// ]

// function App3() {
//     const [gift, setGift] = useState();
    
//     const randomGift = () => {
//       const index = Math.floor(Math.random() * gifts.length)
//       setGift(gifts[index]) // Output: ?
//     }

//     return (
//         <div>
//             <h1>{gift || "chua co phan thuong"}</h1>
//             <button onClick={randomGift}>Nhận thưởng</button>
//         </div>
//     )
// }

// export default App3;

// const courses = [
//   {
//     id: 1,
//     name: "HTML, CSS"
//   },
//   {
//     id: 2,
//     name: "Javascript"
//   },
//   {
//     id: 3,
//     name: "ReactJS"
//   }
// ];
// export default function App4() {
//   const [checked, setChecked] = useState([]);
//   // const [checked, setChecked] = useState(1);

//   const handleSubmit = () => {
//     // call API
//     console.log({ ids: checked });
//   };

//   const handleCheck = (id) => {
//     setChecked((prev) => {
//       const isChecked = checked.includes(id)
//       if(isChecked) {
//         return checked.filter((item) => item !== id)
//       } 
//       else {
//         return [...prev, id]
//       }
//     })
//   }

//   return (
//     <div className="App4" style={{ padding: 32 }}>
//       {/* {courses.map((course)=>(<ul>
//         <div>
//         <li>{course.name}</li>
//         </div>

//       </ul>))} */}
//       {courses.map((course) => (
//         <div key={course.id}>
//           <input

//             type="checkbox"
//             checked={checked.includes(course.id)}
//             onChange={() => handleCheck(course.id)}

//             // type="radio"
//             // checked={checked === course.id}
//             // onChange={() => setChecked(course.id)}
//           />
//           {course.name}
//         </div>
//       ))}
//       <button onClick={handleSubmit}>Register</button>
//     </div>
//   );
// }


// export default function App5() {
//   const [job, setJob] = useState("");
//   const [jobs, setJobs] = useState(() => {
//     const storgeJobs = JSON.parse(localStorage.getItem("jobs"))
//     console.log(storgeJobs);
//     return storgeJobs
//   }
//     // JSON.parse(localStorage.getItem("jobs")) || []
//   );
//   const handleSubmit = () => {
//     setJobs((prevjobs) => {
//       const newJob = [...prevjobs, job];

//       //save to local storage
//       const jsonJob = JSON.stringify(newJob);
//       localStorage.setItem("jobs", jsonJob);

//       return newJob;
//     });
//     setJob((prevjob) => "");
//   };

//   return (
//     <div>
//       <input value={job} onChange={(e) => setJob(e.target.value)} />
//       <button onClick={handleSubmit}>Add</button>
//       <div>
//         <ul>
//           {jobs.map((job, value) => {
//             return <li key={value}>{job}</li>;
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// }


export default function App6() {
  const [show, setShow] = useState(false)

  return (
    <div className="App4" style={{ padding: 32 }}>
      <button onClick = {() => setShow(!show)}>Toggle</button>
     {show && <Content/>}
      </div>
  );
  }


