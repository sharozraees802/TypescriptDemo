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

import { useState } from "react";
import { Header } from "./components/Header/Header";
import { AppService } from "./services/app.service";
import "./App.css";

const App = () => {
  const [headerName, setHeaderName] = useState<string>("Header Component");

  const appservice = new AppService();

  return (
    <div className="App">
      <Header name={headerName} />
      <p>{appservice.sampleData()}</p>
      <p>{appservice.sampleFunction()}</p>
    </div>
  );
};

export default App;
