// import React, {useState} from 'react'
// import { Link } from 'react-router-dom';
//
// class Finance extends React.Component ({setToken}){
//
//   render() {
//       const [preferredVehicle, setPreferredVehicle] = useState();
//       const [prefferedFeatues, setPreferredFeatures] = useState();
//       const [creditScore, setCreditScore] = useState();
//       const [yearlyIncome, setyearlyIncome] = useState();
//       const [monthlyBudget, setMonthlyBudget] = useState();
//     return (
//       <div className="Finance">
//         <h1> Get started with Senso Education</h1>
//           <form>
//               <label>
//               <p>Preferred Vehicles</p>
//               <select name = "dropdown">
//                   <option value = "Ford">Ford</option>
//                   <option value = "Mercedes">Mercedes</option>
//                   <option value = "Kia">Kia</option>
//               </select>
//               </label>
//               <label>
//                   <p>Preffered Features</p>
//                   <select name = "dropdown">
//                       <option value = "Rust Proofing">Rust Proofing</option>
//                       <option value = "Proofing Rust">Proofing Rust</option>
//                       <option value = "Rust Preventer">Rust Preventer</option>
//                   </select>
//               </label>
//               <label>
//                   <p>Credit score</p>
//                   <input type="text" onChange={e => setCreditScore(e.target.value)}/>
//               </label>
//               <label>
//                   <p>Yearly income</p>
//                   <input type="text" onChange={e => setyearlyIncome(e.target.value)}/>
//               </label>
//               <label>
//                   <p>Monthly budget</p>
//                   <input type="text" onChange={e => setMonthlyBudget(e.target.value)}/>
//               </label>
//               <div>
//                   <button type="submit">Get Breakdown</button>
//               </div>
//           </form>
//         <Link to='/features'>
//           <button>Show me the features!</button>
//         </Link>
//       </div>
//     );
//   }
// }
//
// export default Finance;