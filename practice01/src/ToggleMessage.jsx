import React, {useState} from "react";

const ToggleMessage = () => {

    // State for hiding and unhiding
    const[isVisible, setIsVisible] = useState(false);

    const toggleIsVisible = () => {
        // Flips value of isVisible
        setIsVisible(!isVisible);
    };

    return (
        <>
            <div>
                <h1>Toggle Message Card</h1>
                <button onClick={toggleIsVisible}>
                    {isVisible ? 'Hide' : 'Unhide'}
                </button>
                {isVisible && <p>This is a hidden message</p>}
            </div>
        </>
    );
};

export default ToggleMessage;