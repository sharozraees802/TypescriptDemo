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

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header/Header";
import CreateUser from "./components/CreateUser/CreateUser";
import DisplayBoard from "./components/DisplayBoard/DisplayBoard";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container mrgnbtm">
        <div className="row">
          <div className="col-md-8">
            <CreateUser />
          </div>

          <div className="col-md-4">
            <DisplayBoard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
