import React, { useState }  from "react";

const StateManagement = () => {
    // Initial State
    const[name, setName] = useState("Diego");

    // State to track button click
    const[buttonClicked, setButtonClicked] = useState(false);

    const changeName = () => {
        setName("Diego Noguera");
        setButtonClicked(true);
    };
    
    return (
        <>
            <h1>State Management using useState</h1>
            <p>The name is: {name}</p>
            <button onClick={changeName}>Change Name</button>
            {buttonClicked && <p>Button has been clicked!</p>}
        </>
    )


}

export default StateManagement;