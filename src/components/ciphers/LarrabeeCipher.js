// import React from 'react';
// import CipherFactory from '../../ui/EncryptDecrypt';

// // Function to encrypt a message using the Larabee Cipher
// function encryptLarabee(message, key) {
//     if (typeof message !== 'string' || typeof key !== 'number') {
//         throw new TypeError('Message must be a string and key must be a number');
//     }

//     const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const encryptedMessage = [];

//     for (let i = 0; i < message.length; i++) {
//         let char = message[i].toUpperCase();
//         if (char === ' ') {
//             encryptedMessage.push(' ');
//             continue;
//         }
//         let charIndex = alphabet.indexOf(char);
//         let encryptedCharIndex = (charIndex + key) % 26; // Wrap around the alphabet
//         let encryptedChar = alphabet[encryptedCharIndex];
//         encryptedMessage.push(encryptedChar);
//     }

//     return encryptedMessage.join('');
// }

// // Function to decrypt a message using the Larabee Cipher
// function decryptLarabee(encryptedMessage, key) {
//     if (typeof encryptedMessage !== 'string' || typeof key !== 'number') {
//         throw new TypeError('Encrypted message must be a string and key must be a number');
//     }

//     const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const decryptedMessage = [];

//     for (let i = 0; i < encryptedMessage.length; i++) {
//         let char = encryptedMessage[i].toUpperCase();
//         if (char === ' ') {
//             decryptedMessage.push(' ');
//             continue;
//         }
//         let charIndex = alphabet.indexOf(char);
//         let decryptedCharIndex = (charIndex - key + 26) % 26; // Wrap around the alphabet
//         let decryptedChar = alphabet[decryptedCharIndex];
//         decryptedMessage.push(decryptedChar);
//     }

//     return decryptedMessage.join('');
// }

// export default function LarabeeCipher({ ongetInfo }) {
//     // Function to display information about the Larabee cipher
//     const showInformation = () => {
//         const info = (
//             <>
//                 <p>The Larrabee Cipher is a polyalphabetic substitution cipher that uses a set of different Caesar ciphers based on a keyword to encrypt messages.</p>
//             <p>Developed by Augustus De Morgan in the 19th century, it is a method to increase the complexity of simple substitution ciphers, making them more secure against frequency analysis.</p>
//             <p>In the Larrabee Cipher, each letter in the plaintext is shifted according to the corresponding letter in the repeating keyword, creating multiple cipher alphabets.</p>
//             <p>This method ensures that the same plaintext letter can be encrypted differently depending on its position in the message and the keyword used.</p>
//             <ul>
               
//                 <li>The Larrabee Cipher is similar in structure to the Vigenère Cipher.</li>
//                 <li>To encrypt: Each letter of the plaintext is shifted according to the corresponding letter of the keyword, which repeats as necessary.</li>
//                 <li>To decrypt: Reverse the shift using the keyword to map the ciphertext back to the original plaintext.</li>
               
//             </ul>
//             </>
//         );
//         ongetInfo(info);
//     };

//     // Display information when the component mounts
//     React.useEffect(() => {
//         showInformation();
//     }, []);

//     // Render the CipherFactory component with encode and decode functions
//     return (
//         <CipherFactory encode={encryptLarabee} decode={decryptLarabee} keyComponentA="STR"/>
//     );
// }

import React, { useState, useEffect } from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

// Function to encrypt a message using the Larabee Cipher with a keyword
function encryptLarabee(message, keyword) {
    if (typeof message !== 'string' || typeof keyword !== 'string') {
        throw new TypeError('Message and keyword must be strings');
    }

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let encryptedMessage = '';

    for (let i = 0; i < message.length; i++) {
        let char = message[i].toUpperCase();
        if (char === ' ') {
            encryptedMessage += ' ';
            continue;
        }
        let charIndex = alphabet.indexOf(char);
        let keyChar = keyword[i % keyword.length].toUpperCase();
        let keyIndex = alphabet.indexOf(keyChar);
        let encryptedCharIndex = (charIndex + keyIndex) % 26; // Wrap around the alphabet
        let encryptedChar = alphabet[encryptedCharIndex];
        encryptedMessage += encryptedChar;
    }

    return encryptedMessage;
}

// Function to decrypt a message using the Larabee Cipher with a keyword
function decryptLarabee(encryptedMessage, keyword) {
    if (typeof encryptedMessage !== 'string' || typeof keyword !== 'string') {
        throw new TypeError('Encrypted message and keyword must be strings');
    }

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let decryptedMessage = '';

    for (let i = 0; i < encryptedMessage.length; i++) {
        let char = encryptedMessage[i].toUpperCase();
        if (char === ' ') {
            decryptedMessage += ' ';
            continue;
        }
        let charIndex = alphabet.indexOf(char);
        let keyChar = keyword[i % keyword.length].toUpperCase();
        let keyIndex = alphabet.indexOf(keyChar);
        let decryptedCharIndex = (charIndex - keyIndex + 26) % 26; // Wrap around the alphabet
        let decryptedChar = alphabet[decryptedCharIndex];
        decryptedMessage += decryptedChar;
    }

    return decryptedMessage;
}

export default function LarabeeCipher({ ongetInfo }) {
    const [keyword, setKeyword] = useState('');

    // Function to display information about the Larabee cipher
    const showInformation = () => {
        const info = (
            <>
                <p>The Larrabee Cipher is a polyalphabetic substitution cipher that uses a keyword to determine the shifting for each character in the plaintext.</p>
                <p>It enhances security by varying the Caesar cipher shift dynamically based on the keyword, making frequency analysis more difficult.</p>
                <ul>
                    <li>To encrypt: Each letter in the plaintext is shifted according to the corresponding letter of the repeating keyword.</li>
                    <li>To decrypt: Reverse the shift using the keyword to map the ciphertext back to the original plaintext.</li>
                </ul>
            </>
        );
        ongetInfo(info);
    };

    // Display information when the component mounts
    useEffect(() => {
        showInformation();
    }, []);

    // JSX for input component to enter the keyword
    const keyComponent = (
        <div>
            <label>
                Keyword:
                <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value.toUpperCase())} />
            </label>
        </div>
    );
    
   
    // Render the CipherFactory component with encode and decode functions
    return (
        <div>
            {keyComponent}
            <CipherFactory encode={(text) => encryptLarabee(text, keyword)} decode={(text) => decryptLarabee(text, keyword)} />
        </div>
    );
}
