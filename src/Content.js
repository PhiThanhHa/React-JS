import {useEffect, useState } from "react";
import React from "react";


// 1.useEffect(callback)
//  - Gọi callback mỗi khi component re-render
//  - Gọi callback sau khi component thêm element vào DOM
// 2.useEffect(callback,[])
//  - chỉ gọi callback một lần khi component mounted
// 3.useEffect(callback,[deps])
//===============================
// 1.callback luôn được gọi sau khi component mount
    
function Content(){
    const [title,setTitle] = useState('')
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        document.title = title
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts  => setPosts(posts))
    },[]
)
    
    return (
        <div>
            <input
            value={title}
            onChange = {e => setTitle(e.target.value)}
            />
            <ul>
               {posts.map(post => (
                   <li key = {post.id}>{post.title}</li>
               ))
               }
            </ul>
        </div>
    )
}

export default Content


// 1.useEffect(callback)
 // - Gọi callback mỗi khi component re-render 
 // - Gọi callback sau khi component thêm element vào DOM 
 
 // 2.useEffect(callback,[])
 //- Chỉ gọi callback 1 lần sau khi component mounted 
  
  // 3.useEffect(callback,[deps]) 
  // - Call back sẽ được gọi lại mỗi khi deps thay đổi
  
  //=============================== 
  
  // 1.callback luôn được gọi sau khi component mount 
  // 2. Clean up function luôn được gọi trước khi component unmount 
  // 3. Clean up function luôn được gọi trước khi callback được gọi ( trừ lần mounted đầu tiên)

// const tabs = ['posts','comments','albums','photos','todos','users'] 
// function Content2(){ const [countDown,setCountDown] = useState(180)

// useEffect(()=>{
//   const timerID =  setInterval(()=>{
//     setCountDown(prevState => prevState - 1)
//     console.log(countDown)
//   },1000)
//     return () => clearInterval(timerID)
// },[])

// return (
//   <h1>
//     {countDown}
//   </h1>
// )
// } export default Content2



// function ContentN() {
//   const titles = ["posts", "comments", "albums", "photos", "todos", "users"];
//   const [name, setName] = useState("");
//   const [posts, setPosts] = useState([]);
//   const [showScrollBtn, setShowScrollBtn] = useState(false);
//   const [screenWidth, setScreenWidth] = useState(window.innerWidth);
//   const [time, setTime] = useState(10);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime((prevTime) => prevTime - 1);
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${name}`)
//       .then((res) => res.json())
//       .then((jsonRes) => setPosts(jsonRes));
//   }, [name]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollBtn((prev) => window.scrollY > 200);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const changeWidth = () => {
//       setScreenWidth((prev) => window.innerWidth);
//     };
//     window.addEventListener("resize", changeWidth);
//     return () => {
//       window.removeEventListener("resize", changeWidth);
//     };
//   }, []);
//   return (
//     <React.Fragment>
//       <h1>Screen width: {screenWidth}</h1>
//       <h1>Time interval: {time}</h1>
//       {time === 0 && <p>đã hết giờ</p>}
//       {titles.map((title) => {
//         return (
//           <React.Fragment key={title}>
//             <br />
//             <input
//               type="radio"
//               value={title}
//               onChange={(e) => {
//                 setName((prevName) => e.target.value);
//               }}
//               checked={title === name}
//             />
//             <label>{title}</label>
//           </React.Fragment>
//         );
//       })}
//       <ul>
//         {posts.map((post) => {
//           return (
//             <li key={post.id}>{post.title || post.name || post.username}</li>
//           );
//         })}
//       </ul>
//       {showScrollBtn && (
//         <button
//           style={{
//             position: "fixed",
//             right: "30px",
//             bottom: "30px"
//           }}
//         >
//           Go To Top
//         </button>
//       )}
//     </React.Fragment>
//   );
// }
// export default ContentN;