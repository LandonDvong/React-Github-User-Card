import React from 'react';
import UserList from './Components/UserList';

class App extends React.Component {
    constructor() {
        super();
        this.state = {

            userData: {},
           
        };
    }


    componentDidMount() {
        console.log("hello???")
        fetch('https://api.github.com/users/LandonDvong')
        .then(res => res.json())
        .then(res => this.setState({userData: res.data}))
        .catch(err => console.log(err))
    }
   
    render() {

        return (

            <div> 
               <h2>{this.state.userData.login}</h2> 
              <UserList userData={this.state.userData}/>
             </div>

        );
    }
}


export default App;