// import { useState } from "react";


// function ControlledForm(){
//     // 1. input-iin utgiig hadgalah state
//     const [name , setName]= useState("");


//     // 2. input oorchlogdoh vyd ajillah func
//     const HandleChange = (e) =>{
//         setName(e.target.value);
//     };


//     // 3.form submit hiih vyd
//     const HandleSubmit = (e) =>{
//         e.preventDefault(); //page refresh zogsoono
//         alert(name);
//     }
//     return(
//         <form onSubmit={HandleSubmit}>
//             <input type="text" value={name} onChange={HandleChange} />
//             <button type="submit">send</button>
//         </form>
//     )
// };

// export default ControlledForm


// import { useRef } from "react";

// function UncontrolledForm(){
//     // 1. inpout refrence vvsgej baigaa
//     const inputRef = useRef(null);
//     // 2. handler submit
//     const Handlesubmit = (e) =>{
//         e.preventDefault();
//         // 3.Dom-oos valueg awn
//         alert(inputRef.current.value);
//     };

//     return(
//         <form onSubmit={Handlesubmit}>
//             <input type="text" ref={inputRef}/>
//             <button type="submits">send</button>
//         </form>
//     )
// };

// export default UncontrolledForm;


// MULTIPLE input example

// import { useState } from "react";
// // 1.react-iin state hadgalah hookiig oruulj irj baina
//  function Form(){

//     const [formData , setformData] = useState({
//         email: "",
//         passwornd: "",
//     });
//     // 2.formData state vvsgeh

//     const HandleChange = (e) =>{
//     // 3. Bvh inputd ashiglah neg l handler (e)=> event object
//         const {name , value} = e.target;
//     // 4.name value zadlah
//         setformData({
//             ...formData,
//             [name]: value
//         }); 
//         // 5. ...formdata huuchin state-g huulj awch baina
//         // 6.[name]: value dynamic key update hiij baina
//     };
//     return(
//         <form>
//             <input name="email" placeholder="Email" onChange={HandleChange} />
//             <input name="password" placeholder="Password" type="password" onChange={HandleChange} />

//         </form>
//     )
//  }

//  export default Form;