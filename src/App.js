import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Destinations from "./components/destinations";
// import GreenBox from "./components/box1";
import NavBar from "./components/services_nav_bar";
import Body from "./components/services_body";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Body></Body>
    </div>
  );
}

export default App;

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <GreenBox></GreenBox>
//       </div>
//     );
//   }
// }

// <header className="App-header">
//         <h1 class="page-title">My Favorite Destinations</h1>
//         <ul className="destination-list">
//           <Destinations
//             image={"sapa.jpg"}
//             name={"Sapa"}
//             link={
//               "https://https://www.google.com/maps/place/Sa+Pa,+Lao+Cai,+Vietnam/@22.3476867,103.7819187,13z/data=!3m1!4b1!4m5!3m4!1s0x36cd416833ee9ad5:0xe1f42da2bbc76727!8m2!3d22.3363608!4d103.8437852.google.com/maps/@22.3476867,103.7819187,13z"
//             }
//             click="Sapa on Google Maps"
//           ></Destinations>
//           <Destinations
//             image={"malcesine.jpg"}
//             name={"Malcesine"}
//             link={
//               "https://https://www.google.com/maps/place/37018+Malcesine,+VR,+Italy/@45.7694664,10.7553462,12z/data=!3m1!4b1!4m5!3m4!1s0x47821c0294a0ef6b:0xb945f552f951e76d!8m2!3d45.752032!4d10.8304126.google.com/maps/@22.3476867,103.7819187,13z"
//             }
//             click="Malcesine on Google Maps"
//           ></Destinations>
//           <Destinations
//             image={"coron.jpg"}
//             name={"Coron"}
//             link={
//               "https://https://www.google.com/maps/place/Coron,+Palawan,+Philippines/@12.0186065,119.https://www.google.com/maps/place/Coron,+Palawan,+Philippines/@12.0186065,119.9344315,10z/data=!3m1!4b1!4m5!3m4!1s0x33ba1ef225b0d675:0x68841ab9a85e968e!8m2!3d12.0489179!4d120.1519011,10z/data=!3m1!4b1!4m5!3m4!1s0x33ba1ef225b0d675:0x68841ab9a85e968e!8m2!3d12.0489179!4d120.1519011.google.com/maps/@22.3476867,103.7819187,13z"
//             }
//             click="Coron on Google Maps"
//           ></Destinations>
//         </ul>
//       </header>
