import './App.css';
import Hello from './Hello';


// function App(props) {
//   return <div>Hello from app.js updated {props.name} age = {props.age - 5}
//   <div>
//     Another Tree
//   </div>
//   </div>
// }

function App({name, age}) {
  return <div>
  Hello from app.js updated {name} age = {age - 10}
  <br />
  <Hello my firstName={name}> </Hello>
  </div>
}

export default App;
