import {useState} from "react"
import './App.css';
import RootApp from "./router/router";
function App() {
  const [show, setShow] = useState(false);

  return (
   <>
    <RootApp show={show} setShow={setShow}></RootApp>   
   </>
  );
}

export default App;
