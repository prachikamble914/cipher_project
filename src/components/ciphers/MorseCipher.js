import React, { useState } from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

export default function MorseCipher({ ongetInfo }) {
    const [text, setText] = useState('');

    // Morse code dictionary
    const morseCode = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
        'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
        'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
        'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
        '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', ' ': '/'
    };

    // Function to encode plaintext to Morse code
    function encode(str) {
        return str.toUpperCase().split('').map(char => morseCode[char] || char).join(' ');
    }

    // Function to decode Morse code to plaintext
    function decode(str) {
        const words = str.split('   ');
        const decoded = words.map(word => word.split(' ').map(code => Object.keys(morseCode).find(key => morseCode[key] === code)).join('')).join(' ');
        return decoded;
    }

    const showInformation = () => {
        const info = (
            <>
                <p>Morse Code is a method of encoding text characters as sequences of dots and dashes, representing short and long signals.</p>
            <p>Developed by Samuel Morse and Alfred Vail in the 1830s, it was initially used for long-distance communication via telegraph.</p>
            <p>Each letter of the alphabet and each numeral is represented by a unique sequence of dots (short signals) and dashes (long signals).</p>
            <p>Morse Code is still used in various forms of communication, including aviation, amateur radio, and emergency signaling, due to its simplicity and effectiveness.</p>
            <ul>
               
                <li>Morse Code can be used as a cipher by encoding messages into sequences of dots and dashes.</li>
                <li>To encrypt: Convert each letter and numeral of the plaintext into its corresponding Morse Code sequence.</li>
                <li>To decrypt: Translate the Morse Code sequences back into their original text characters to retrieve the plaintext.</li>
               
            </ul>
            </>
        );
        ongetInfo(info);
    };

    React.useEffect(() => {
        showInformation();
    }, []);

    return (
        <>
            {/* <div>
                <label>
                    Text:
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                </label>
            </div> */}
            <CipherFactory encode={encode} decode={decode} />
        </>
    );
}