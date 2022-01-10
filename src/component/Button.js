import React from "react";
import { useState } from "react";



function Button({ nowCount, setnowCount }) {
    [nowCount, setnowCount] = useState(0)
    const countUp = () => {
        setnowCount(nowCount => nowCount + 1)
    }
    return (
        <button>countUp</button>
    );
}

export default Button;

