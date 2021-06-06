import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function Buttons() {
    const [emotion, setEmotion] = useState('happy');

    return(
        <>
            <h1>Current emotion is {emotion}.</h1>
            <button onClick={() => setEmotion('happy')}>
                happy
            </button>
            <button onClick={() => setEmotion('triggered')}>
                triggerized
            </button>
            <button onClick={() => setEmotion('upset')}>
                upset
            </button>
        </>
    );
}

export default Buttons;
