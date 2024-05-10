import { useState } from "react"


export default function Authenticate({token}) {

    const [error, setError] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)


    const handleClick = async() => {
        try {
            
            const response = await fetch(
                "https://fsa-jwt-practice.herokuapp.com/authenticate",
                {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
            )

            const result = await response.json();
            console.log(result.success)
            console.log(token)

            
            result.success ? setSuccessMessage(result.message) : setError("Please enter a valid email / password before you authenticate.")


        } catch(error){
            setError("Please enter a valid email / password before you authenticate.")
        }
    }




    return (
        <>
            {/* <h2>Authenticate:</h2> */}
            <button onClick={handleClick}>Authenticate token</button>
            {successMessage && <p>{successMessage}</p>}
             {error && <p>{error}</p>}
        
        </>
    )
}