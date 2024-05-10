import Authenticate from "./components/Authenticate.jsx";
import Nav from "./components/Nav.jsx";
import SignUpForm from "./components/SignUpForm.jsx";
import { useState } from "react";

function App() {

const [token, setToken] = useState(null);

console.log(token)

    return (
        //   <> empty elements you wont see
        <>
            <Nav/>
            <SignUpForm token = {token} setToken={setToken}/>
            <Authenticate token = {token} setToken={setToken}/>

        </>

    )
}


export default App
