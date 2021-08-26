/**
 *
 * @class App
 * this all are class componenet
 */

// import { Component } from "react";
// import "./App.css";
// import { Header } from "./components/Header/Header";

// class App extends Component {
//   state = {
//     headerName: "Header Component",
//   };

//   render() {
//     return (
//       <div className="App">
//         <Header name={this.state.headerName} />
//       </div>
//     );
//   }
// }

// export default App;

/**
 *
 * @header Component
 * in this component we will create a component as props component
 */

// import { useState } from "react";
// import { Header } from "./components/Header/Header";
// import { AppService } from "./services/app.service";
// import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

// const App = () => {
//   const [headerName, setHeaderName] = useState<string>("Header Component");

//   const appservice = new AppService();

//   return (
//     <div className="App">
//       <Header name={headerName} />
//       <p>{appservice.sampleData()}</p>
//       <p>{appservice.sampleFunction()}</p>
//     </div>
//   );
// };

// export default App;


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header/Header';
import CreateUser from './components/CreateUser/CreateUser';
import DisplayBoard from './components/DisplayBoard/DisplayBoard';
import { AppService } from './services/app.service';
import { Users } from './components/Users/Users';
import { useState } from 'react';

const App = () =>  {

  const [user, setUser] = useState<any>();
  const [users, setUsers] = useState<any>([]);
  const [numberOfUsers, setNumberOfUsers] = useState<number>(0);

  const appService = new AppService();

  const createUser = (e: any) => {
    const response = appService.addUser(user);
    console.log(response);
    setNumberOfUsers(numberOfUsers + 1);
  }

  const getAllUsers = () => {
    const users = appService.getUsers();
    setUsers(users);
    setNumberOfUsers(users.length);
  }

  const onChangeForm = (e: any) => {
    let userClone = {...user}
    if (e.target.name === 'firstname') {
      userClone.firstName = e.target.value;
    } else if (e.target.name === 'lastname') {
      userClone.lastName = e.target.value;
    } else if (e.target.name === 'email') {
      userClone.email = e.target.value;
    }
    setUser(userClone);
 }
    
  return (
    <div className="App">
        <Header />
        <div className="container mrgnbtm">
        <div className="row">
          <div className="col-md-8">
              <CreateUser 
                user={user}
                onChangeForm={onChangeForm}
                createUser={createUser}
              />
          </div>
          <div className="col-md-4">
              <DisplayBoard 
                numberOfUsers={numberOfUsers}
                getAllUsers={getAllUsers}
              />
          </div>
        </div>
        <div className="row mrgnbtm">
          <Users users={users}></Users>
        </div>
      </div>
    </div>
  );
  
}

export default App;