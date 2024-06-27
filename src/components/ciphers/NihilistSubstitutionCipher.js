import React from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

// Function to generate a key square from a keyword
const generateKeySquare = (keyword) => {
    const alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ"; // Skipping 'J' as per Nihilist Cipher convention
    const key = Array.from(new Set(keyword.toUpperCase().replace(/J/g, 'I') + alphabet)); // Combine keyword and remaining alphabet, removing duplicates
    const keySquare = [];
    
    // Create a 5x5 matrix (key square)
    for (let i = 0; i < 5; i++) {
        keySquare.push(key.slice(i * 5, (i + 1) * 5));
    }
    
    return keySquare;
}

// Function to generate a numerical key for a given message
const generateNumericKey = (keySquare, message) => {
    const numericKey = [];
    
    // Convert each letter of the message to its corresponding row and column numbers in the key square
    for (let i = 0; i < message.length; i++) {
        let char = message[i].toUpperCase();
        if (char === 'J') char = 'I'; // Convert 'J' to 'I' as per Nihilist Cipher convention
        if (char === ' ') continue; // Ignore spaces
        for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 5; col++) {
                if (keySquare[row][col] === char) {
                    numericKey.push((row + 1) * 10 + (col + 1)); // Concatenate row and column numbers
                }
            }
        }
    }
    
    return numericKey;
}

// Function to encrypt a message using the Nihilist Substitution Cipher
const encryptNihilist = (message, keyword) => {
    if (typeof message !== 'string' || typeof keyword !== 'string') {
        throw new TypeError('Both message and keyword must be strings');
    }

    const keySquare = generateKeySquare(keyword);
    const numericKey = generateNumericKey(keySquare, message);
    return numericKey.join(' ');
}

// Function to decrypt a message using the Nihilist Substitution Cipher
const decryptNihilist = (encodedMessage, keyword) => {
    if (typeof encodedMessage !== 'string' || typeof keyword !== 'string') {
        throw new TypeError('Both encoded message and keyword must be strings');
    }

    const keySquare = generateKeySquare(keyword);
    const numericKey = encodedMessage.split(' ').map(Number);
    let decryptedMessage = '';
    
    // Convert each numeric key to its corresponding letter in the key square
    for (let i = 0; i < numericKey.length; i++) {
        const row = Math.floor((numericKey[i] - 1) / 10);
        const col = (numericKey[i] - 1) % 10;
        decryptedMessage += keySquare[row][col];
    }
    
    return decryptedMessage;
}

export default function NihilistCipher({ ongetInfo }) {
    const keyword = "CIPHER KEY A"; // Fixed keyword

    // Function to display information about the Nihilist cipher
    const showInformation = () => {
        const info = (
            <>
                <p>The Nihilist Substitution Cipher is a variation of the Nihilist Cipher that combines aspects of polyalphabetic substitution and transposition to create a secure method of encryption.</p>
            <p>Developed during the late 19th century by Russian nihilists, it was used for clandestine communication during revolutionary activities.</p>
            <p>It uses a Polybius square to convert letters into numbers and a keyword to perform numerical substitution, followed by a transposition step to further obfuscate the message.</p>
            <p>The Nihilist Substitution Cipher is valued for its ability to add layers of complexity to the encrypted message, making it challenging to break without the key.</p>
            <ul>
               
                <li>The Nihilist Substitution Cipher combines Polybius square substitution with a keyword-based numerical substitution and transposition.</li>
                <li>To encrypt: Convert the plaintext into numbers using the Polybius square, add a numerical key derived from a keyword, and then transpose the resulting numbers based on another keyword or pattern.</li>
                <li>To decrypt: Reverse the transposition process, subtract the numerical key, and use the Polybius square to convert the numbers back into plaintext letters.</li>
               
            </ul>
            </>
        );
        ongetInfo(info);
    };

    // Display information when the component mounts
    React.useEffect(() => {
        showInformation();
    }, []);

    // Render the CipherFactory component with encode and decode functions
    return (
        <>
            <CipherFactory encode={encryptNihilist} decode={decryptNihilist} keyComponentA="STR" />
        </>
    );
}
