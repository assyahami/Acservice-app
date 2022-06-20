import {Routes,BrowserRouter,Route} from "react-router-dom"
import Booking from "../components/Booking"
import Home from '../components/home';
const RootApp=({show,
setShow})=>{
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home show={show} setShow={setShow} />}
          ></Route>
          <Route
            path="/Booking"
            element={<Booking show={show} setShow={setShow} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    );
}
export default RootApp;