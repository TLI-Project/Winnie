import React, { Component } from "react";

class UserData extends Component {

    componentDidMount() {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "loanAmount": 10000,
                "creditScore": 780,
                "pytBudget": 800,
                "vehicleMake": "Honda",
                "vehicleModel": "Civic",
                "vehicleYear": 2021,
                "vehicleKms": 1000,
                "listPrice": 10000,
                "downpayment": 10000
            })
        };

        fetch('http://localhost:8080/userInputs', requestOptions)
            .then(response => console.log(response.json()))
    }

    render(){
        return <div>
        </div>;
    }
}
export default UserData


//     constructor(props) {
//         super(props)
//
//         this.state = {
//             userId: '',
//             title: '',
//             body: ''
//         }
//     }
//
//     changeHandler = (e) => {
//         this.setState({[e.target.name]: e.target.value})
//     }
//
//     submitHandler = e => {
//         e.preventDefault()
//     }
//
//
//     render() {
//         const { userId, title, body } = this.state
//         return (
//             <div>
//                 <form onSubmit={this.submitHandler}>
//                     <div>
//                         <input type="text" name="userId" value={userId} onChange={this.changeHandler}/>
//                     </div>
//                     <div>
//                         <input type="text" name="title" value={title} onChange={this.changeHandler}/>
//                     </div>
//                     <div>
//                         <input  type="text" name="body" value={body} onChange={this.changeHandler}/>
//                     </div>
//                     <button type="submit"> Submit </button>
//                 </form>
//             </div>
//         )
//     }
// }

