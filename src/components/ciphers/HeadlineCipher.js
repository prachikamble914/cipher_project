// import React, { useState } from 'react';
// import CipherFactory from '../../ui/EncryptDecrypt';

// // Function to remove duplicate letters from a string
// function removeDuplicates(str) {
//     return str.split('').filter((char, index, self) => self.indexOf(char) === index && char !== ' ').join('');
// }

// // Function to generate the keyword from a headline
// function generateKeyword(headline) {
//     const cleanedHeadline = removeDuplicates(headline.toUpperCase());
//     return cleanedHeadline.replace(/[^A-Z]/g, ''); // Remove non-alphabetic characters
// }

// // Function to generate the combined key sequence from headlines
// function generateCombinedKeySequence(headlines, messageLength) {
//     const keywords = headlines.map(headline => generateKeyword(headline)).join('');
//     const repetitionCount = keywords.length > 0 ? Math.ceil(messageLength / keywords.length) : 0;
//     return keywords.repeat(repetitionCount).substring(0, messageLength);
// }

// // Function to encrypt a message using the Headline Cipher
// function encryptHeadline(message, headlines) {
//     const combinedKeySequence = generateCombinedKeySequence(headlines, message.length);
//     let encryptedMessage = '';

//     for (let i = 0; i < message.length; i++) {
//         const char = message[i];
//         const keyChar = combinedKeySequence[i];
//         const shift = keyChar.charCodeAt(0) - 65;

//         let encryptedChar = char;

//         if (char.match(/[a-zA-Z]/)) {
//             const baseCharCode = char.toUpperCase() === char ? 65 : 97;
//             encryptedChar = String.fromCharCode(((char.charCodeAt(0) - baseCharCode + shift) % 26) + baseCharCode);
//         }

//         encryptedMessage += encryptedChar;
//     }

//     return encryptedMessage;
// }

// // Function to decrypt a message using the Headline Cipher
// function decryptHeadline(encryptedMessage, headlines) {
//     const combinedKeySequence = generateCombinedKeySequence(headlines, encryptedMessage.length);
//     let decryptedMessage = '';

//     for (let i = 0; i < encryptedMessage.length; i++) {
//         const char = encryptedMessage[i];
//         const keyChar = combinedKeySequence[i];
//         const shift = keyChar.charCodeAt(0) - 65;

//         let decryptedChar = char;

//         if (char.match(/[a-zA-Z]/)) {
//             const baseCharCode = char.toUpperCase() === char ? 65 : 97;
//             decryptedChar = String.fromCharCode(((char.charCodeAt(0) - baseCharCode - shift + 26) % 26) + baseCharCode);
//         }

//         decryptedMessage += decryptedChar;
//     }

//     return decryptedMessage;
// }

// // export default function HeadlineCipher({ ongetInfo }) {
// //     const [keyword, setKeyword] = useState('');
// export default function HeadlineCipher({ ongetInfo }) {
//     const [keyword, setKeyword] = useState('');
//     const [headlines, setHeadlines] = useState([]);

//     const showInformation = () => {
//         const info = (
//             <>
//                 <p>
//                     The Headline Cipher is a substitution cipher where each letter is replaced with a specific symbol or character.
//                 </p>
//                 <p>
//                     To use the Headline Cipher, enter your text and apply the encoding or decoding operation.
//                 </p>
//             </>
//         );
//         ongetInfo(info);
//     };

//     React.useEffect(() => {
//         showInformation();
//     }, []);

//     return (
//         <>
//             <div>
//                 <label>
//                     Keyword:
//                     <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
//                 </label>
//             </div>
//             <CipherFactory encode={(message) => encryptHeadline(message, keyword)} decode={(ciphertext) => decryptHeadline(ciphertext, keyword)} />
//         </>
//     );
// }


import React, { useState, useEffect } from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

// Function to remove duplicate letters from a string
function removeDuplicates(str) {
    return str.split('').filter((char, index, self) => self.indexOf(char) === index && char !== ' ').join('');
}

// Function to generate the keyword from a headline
function generateKeyword(headline) {
    const cleanedHeadline = removeDuplicates(headline.toUpperCase());
    return cleanedHeadline.replace(/[^A-Z]/g, ''); // Remove non-alphabetic characters
}

// Function to generate the combined key sequence from headlines
function generateCombinedKeySequence(headlines, messageLength) {
    const keywords = headlines.map(headline => generateKeyword(headline)).join('');
    const repetitionCount = keywords.length > 0 ? Math.ceil(messageLength / keywords.length) : 0;
    return keywords.repeat(repetitionCount).substring(0, messageLength);
}

// Function to encrypt a message using the Headline Cipher
function encryptHeadline(message, headlines) {
    const combinedKeySequence = generateCombinedKeySequence(headlines, message.length);
    let encryptedMessage = '';

    for (let i = 0; i < message.length; i++) {
        const char = message[i];
        const keyChar = combinedKeySequence[i];
        const shift = keyChar.charCodeAt(0) - 65;

        let encryptedChar = char;

        if (char.match(/[a-zA-Z]/)) {
            const baseCharCode = char.toUpperCase() === char ? 65 : 97;
            encryptedChar = String.fromCharCode(((char.charCodeAt(0) - baseCharCode + shift) % 26) + baseCharCode);
        }

        encryptedMessage += encryptedChar;
    }

    return encryptedMessage;
}

// Function to decrypt a message using the Headline Cipher
function decryptHeadline(encryptedMessage, headlines) {
    const combinedKeySequence = generateCombinedKeySequence(headlines, encryptedMessage.length);
    let decryptedMessage = '';

    for (let i = 0; i < encryptedMessage.length; i++) {
        const char = encryptedMessage[i];
        const keyChar = combinedKeySequence[i];
        const shift = keyChar.charCodeAt(0) - 65;

        let decryptedChar = char;

        if (char.match(/[a-zA-Z]/)) {
            const baseCharCode = char.toUpperCase() === char ? 65 : 97;
            decryptedChar = String.fromCharCode(((char.charCodeAt(0) - baseCharCode - shift + 26) % 26) + baseCharCode);
        }

        decryptedMessage += decryptedChar;
    }

    return decryptedMessage;
}

export default function HeadlineCipher({ onGetInfo }) {
    const [keyword, setKeyword] = useState('');
    const [headlines, setHeadlines] = useState([]);

    const showInformation = () => {
        const info = (
            <>
                <p>
                    The Headline Cipher is a substitution cipher where each letter is replaced with a specific symbol or character.
                </p>
                <p>
                    To use the Headline Cipher, enter your text and apply the encoding or decoding operation.
                </p>
            </>
        );
        onGetInfo(info);
    };

    useEffect(() => {
        showInformation();
    }, []);

    return (
        <>
            <div>
                <label>
                    Keyword:
                    <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
                </label>
            </div>
            <CipherFactory encode={(message) => encryptHeadline(message, keyword)} decode={(ciphertext) => decryptHeadline(ciphertext, keyword)} />
        </>
    );
}
