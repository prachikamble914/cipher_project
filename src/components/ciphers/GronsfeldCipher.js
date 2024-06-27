// import React, { useState } from 'react';
// import CipherFactory from '../../ui/EncryptDecrypt';

// export default function GronsfeldCipher({ ongetInfo }) {
//     const [key, setKey] = useState('');

//     // Function to encode a string using the Gronsfeld Cipher
//     function encode(str) {
//         return processText(str, key, false);
//     }

//     // Function to decode a string using the Gronsfeld Cipher
//     function decode(str) {
//         return processText(str, key, true);
//     }

//     // Function to process text for encryption or decryption
//     function processText(str, key, isDecoding) {
//         const keyLength = key.length;
//         const offset = isDecoding ? -1 : 1;
//         return str.split('').map((char, index) => {
//             const charCode = char.charCodeAt(0);
//             if (/[a-zA-Z]/.test(char)) {
//                 const shift = parseInt(key[index % keyLength]);
//                 const shiftedCharCode = charCode + shift * offset;
//                 if ((charCode >= 65 && charCode <= 90 && shiftedCharCode > 90) || (charCode >= 97 && charCode <= 122 && shiftedCharCode > 122)) {
//                     return String.fromCharCode(shiftedCharCode - 26);
//                 } else if ((charCode >= 65 && charCode <= 90 && shiftedCharCode < 65) || (charCode >= 97 && charCode <= 122 && shiftedCharCode < 97)) {
//                     return String.fromCharCode(shiftedCharCode + 26);
//                 } else {
//                     return String.fromCharCode(shiftedCharCode);
//                 }
//             } else {
//                 return char;
//             }
//         }).join('');
//     }

//     const showInformation = () => {
//         const info = (
//             <>
//                 <p>
//                     The Gronsfeld Cipher is a variant of the Vigenère Cipher, where the key is numeric and shifts the letters in the plaintext.
//                 </p>
//                 <p>To encrypt using the Gronsfeld Cipher, specify a numeric key and enter your text.</p>
//                 <ul>
//                     <li>Variant of Vigenère Cipher: Uses a numeric key instead of a keyword.</li>
//                     <li>Key: The numeric key determines the shift for each letter in the plaintext.</li>
//                     <li>Encryption: Each letter in the plaintext is shifted by the corresponding digit in the key.</li>
//                     <li>Decryption: To decrypt, use the inverse of the key to shift the letters back.</li>
//                 </ul>
//             </>
//         );
//         ongetInfo(info);
//     };

//     React.useEffect(() => {
//         showInformation();
//     }, []);

//     // return (
//     //     <>
//     //         <div>
//     //             <label>
//     //                 Key:
//     //                 <input type="text" value={key} onChange={(e) => setKey(e.target.value)} />
//     //             </label>
//     //         </div>
//     //         <CipherFactory encode={encode} decode={decode} />
//     //     </>
//     // );

//     return (
//         <>
//                    <div>
//                 <label>
                  
//                      {/* <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} /> */}
//                 </label>
//             </div>
         
    
//         <CipherFactory encode={encode} decode={decode} keyComponentA={1} />
//         </>
//       );
// }



// import React, { useState } from 'react';
// import CipherFactory from '../../ui/EncryptDecrypt';

// export default function GronsfeldCipher({ ongetInfo }) {
//     const [key, setKey] = useState('');

//     // Function to encode a string using the Gronsfeld Cipher
//     function encode(str) {
//         return processText(str, key, false);
//     }

//     // Function to decode a string using the Gronsfeld Cipher
//     function decode(str) {
//         return processText(str, key, true);
//     }

//     // Function to process text for encryption or decryption
//     function processText(str, key, isDecoding) {
//         const keyLength = key.length;
//         const offset = isDecoding ? -1 : 1;
//         return str.split('').map((char, index) => {
//             const charCode = char.charCodeAt(0);
//             if (/[a-zA-Z]/.test(char)) {
//                 const shift = parseInt(key[index % keyLength]);
//                 const shiftedCharCode = charCode + shift * offset;
//                 if ((charCode >= 65 && charCode <= 90 && shiftedCharCode > 90) || (charCode >= 97 && charCode <= 122 && shiftedCharCode > 122)) {
//                     return String.fromCharCode(shiftedCharCode - 26);
//                 } else if ((charCode >= 65 && charCode <= 90 && shiftedCharCode < 65) || (charCode >= 97 && charCode <= 122 && shiftedCharCode < 97)) {
//                     return String.fromCharCode(shiftedCharCode + 26);
//                 } else {
//                     return String.fromCharCode(shiftedCharCode);
//                 }
//             } else {
//                 return char;
//             }
//         }).join('');
//     }

//     const showInformation = () => {
//         const info = (
//             <>
//                 <p>
//                     The Gronsfeld Cipher is a variant of the Vigenère Cipher, where the key is numeric and shifts the letters in the plaintext.
//                 </p>
//                 <p>To encrypt using the Gronsfeld Cipher, specify a numeric key and enter your text.</p>
//                 <ul>
//                     <li>Variant of Vigenère Cipher: Uses a numeric key instead of a keyword.</li>
//                     <li>Key: The numeric key determines the shift for each letter in the plaintext.</li>
//                     <li>Encryption: Each letter in the plaintext is shifted by the corresponding digit in the key.</li>
//                     <li>Decryption: To decrypt, use the inverse of the key to shift the letters back.</li>
//                 </ul>
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
//                                 {/* <input type="text" value={key} onChange={(e) => setKey(e.target.value)} /> */}
//                 </label>
//             </div>
//             <CipherFactory encode={encode} decode={decode} 
//             keyComponentA={
//                 <input
//                     type="text"
//                     value={key}
//                     onChange={(e) => setKey(e.target.value)}
//                 />
//             }/>
            
//         </>
//     );

    
// }

// import React, { useState } from 'react';
// import CipherFactory from '../../ui/EncryptDecrypt';

// export default function GronsfeldCipher({ ongetInfo }) {
//     const [key, setKey] = useState('');

//     // Function to encode a string using the Gronsfeld Cipher
//     function encode(str) {
//         return processText(str, key, false);
//     }

//     // Function to decode a string using the Gronsfeld Cipher
//     function decode(str) {
//         return processText(str, key, true);
//     }

//     // Function to process text for encryption or decryption
//     function processText(str, key, isDecoding) {
//         const keyLength = key.length;
//         const offset = isDecoding ? -1 : 1;
//         return str.split('').map((char, index) => {
//             const charCode = char.charCodeAt(0);
//             if (/[a-zA-Z]/.test(char)) {
//                 const shift = parseInt(key[index % keyLength]);
//                 const shiftedCharCode = charCode + shift * offset;
//                 if ((charCode >= 65 && charCode <= 90 && shiftedCharCode > 90) || (charCode >= 97 && charCode <= 122 && shiftedCharCode > 122)) {
//                     return String.fromCharCode(shiftedCharCode - 26);
//                 } else if ((charCode >= 65 && charCode <= 90 && shiftedCharCode < 65) || (charCode >= 97 && charCode <= 122 && shiftedCharCode < 97)) {
//                     return String.fromCharCode(shiftedCharCode + 26);
//                 } else {
//                     return String.fromCharCode(shiftedCharCode);
//                 }
//             } else {
//                 return char;
//             }
//         }).join('');
//     }

//     const showInformation = () => {
//         const info = (
//             <>
//                 <p>
//                     The Gronsfeld Cipher is a variant of the Vigenère Cipher, where the key is numeric and shifts the letters in the plaintext.
//                 </p>
//                 <p>To encrypt using the Gronsfeld Cipher, specify a numeric key and enter your text.</p>
//                 <ul>
//                     <li>Variant of Vigenère Cipher: Uses a numeric key instead of a keyword.</li>
//                     <li>Key: The numeric key determines the shift for each letter in the plaintext.</li>
//                     <li>Encryption: Each letter in the plaintext is shifted by the corresponding digit in the key.</li>
//                     <li>Decryption: To decrypt, use the inverse of the key to shift the letters back.</li>
//                 </ul>
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
//                 Key A:
//                     <input
//                         type="text"
//                         value={key}
//                         onChange={(e) => setKey(e.target.value)}
//                     />
//                 </label>
//             </div>
//             <CipherFactory encode={encode} decode={decode} keyComponentA={'Key A'}/>
//         </>
//     );
// }


// import React, { useState, useEffect } from 'react';
// import CipherFactory from '../../ui/EncryptDecrypt';

// export default function GronsfeldCipher({ ongetInfo }) {
//     const [key, setKey] = useState('');

//     // Function to encode a string using the Gronsfeld Cipher
//     function encode(str) {
//         return processText(str, key, false);
//     }

//     // Function to decode a string using the Gronsfeld Cipher
//     function decode(str) {
//         return processText(str, key, true);
//     }

//     // Function to process text for encryption or decryption
//     function processText(str, key, isDecoding) {
//         const keyLength = key.length;
//         const offset = isDecoding ? -1 : 1;
//         return str.split('').map((char, index) => {
//             const charCode = char.charCodeAt(0);
//             if (/[a-zA-Z]/.test(char)) {
//                 const shift = parseInt(key[index % keyLength]);
//                 const shiftedCharCode = charCode + shift * offset;
//                 if ((charCode >= 65 && charCode <= 90 && shiftedCharCode > 90) || (charCode >= 97 && charCode <= 122 && shiftedCharCode > 122)) {
//                     return String.fromCharCode(shiftedCharCode - 26);
//                 } else if ((charCode >= 65 && charCode <= 90 && shiftedCharCode < 65) || (charCode >= 97 && charCode <= 122 && shiftedCharCode < 97)) {
//                     return String.fromCharCode(shiftedCharCode + 26);
//                 } else {
//                     return String.fromCharCode(shiftedCharCode);
//                 }
//             } else {
//                 return char;
//             }
//         }).join('');
//     }

//     const handleKeyChange = (e) => {
//         const value = e.target.value;
//         setKey(value.replace(/[^0-9]/g, '')); // Remove non-numeric characters
//     };

//     const showInformation = () => {
//         const info = (
//             <>
//                 <p>The Gronsfeld Cipher is a variant of the Vigenère Cipher, named after its inventor, Julius Caesar Gronsfeld.</p>
//                 <p>It is a polyalphabetic substitution cipher that uses a keyword and a numeric key to encrypt messages.</p>
//                 <p>Similar to the Vigenère Cipher, the Gronsfeld Cipher shifts each letter of the plaintext by a number of positions based on the numeric key.</p>
//                 <p>While less secure than some modern encryption techniques, it was historically used for diplomatic and military communication.</p>
//                 <ul>
//                     <li>The Gronsfeld Cipher is a polyalphabetic substitution cipher that uses a numeric key to encrypt messages.</li>
//                     <li>To encrypt: Shift each letter of the plaintext by a number of positions based on the numeric key, repeating the key if necessary.</li>
//                     <li>To decrypt: Reverse the encryption process by shifting each letter of the ciphertext in the opposite direction based on the numeric key.</li>
//                 </ul>
//             </>
//         );
//         ongetInfo(info);
//     };

//     useEffect(() => {
//         showInformation();
//     }, []);

//     return (
//         <>
//             <CipherFactory encode={(message) => encode(message)} decode={(ciphertext) => decode(ciphertext)} keyComponentA={'Key A'} />
//         </>
//     );
// }

import React from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

export default function GronsfeldCipher({ ongetInfo }) {
    // Function to encrypt plaintext using the Gronsfeld cipher
    function encode(plaintext, keyword) {
        let ciphertext = '';
        for (let i = 0; i < plaintext.length; i++) {
            let plainChar = plaintext.charAt(i).toUpperCase();
            let keyChar = String(keyword).charAt(i % String(keyword).length);
            let shift = (parseInt(keyChar) || 0); // Convert to integer, default to 0 if not a number
            let cipherChar = String.fromCharCode(((plainChar.charCodeAt(0) - 65 + shift) % 26) + 65);
            ciphertext += cipherChar;
        }
        return ciphertext;
    }

    // Function to decrypt the ciphertext using the Gronsfeld cipher
    function decode(ciphertext, keyword) {
        let plaintext = '';
        for (let i = 0; i < ciphertext.length; i++) {
            let cipherChar = ciphertext.charAt(i).toUpperCase();
            let keyChar = String(keyword).charAt(i % String(keyword).length);
            let shift = (parseInt(keyChar) || 0); // Convert to integer, default to 0 if not a number
            let plainChar = String.fromCharCode(((cipherChar.charCodeAt(0) - 65 - shift + 26) % 26) + 65);
            plaintext += plainChar;
        }
        return plaintext;
    }

    // Function to generate the key for the Gronsfeld cipher
    function generateKey(length) {
        let key = '';
        for (let i = 0; i < length; i++) {
            let randomDigit = Math.floor(Math.random() * 10);
            key += randomDigit;
        }
        return key;
    }

    const showInformation = () => {
        const info = (
            <>
                <p>
                    The Gronsfeld Cipher is a variant of the Vigenère cipher, using numeric keys instead of alphabetic keys.
                </p>
                <p>
                    Numeric Key Substitution: In the Gronsfeld Cipher, each plaintext character is combined with a numeric key to produce the ciphertext.
                </p>
                <ul>
                    <li>Substitution Cipher: The Gronsfeld Cipher substitutes each plaintext character with a character determined by the plaintext and the key.</li>
                    <li>Key Length: The key length in the Gronsfeld Cipher matches the length of the plaintext.</li>
                    <li>Encryption: Each character in the plaintext is combined with a numeric key using a mathematical operation, typically modular addition.</li>
                    <li>Decryption: Decryption involves reversing the encryption process by subtracting the key character from the ciphertext character to retrieve the plaintext character.</li>
                    <li>Example: Using a key '123', if 'H' in the plaintext is combined with '1' from the key, the resulting ciphertext character might be 'I'.</li>
                </ul>
            </>
        );
        ongetInfo(info);
    };

    React.useEffect(() => {
        showInformation();
    }, []);

    return <CipherFactory encode={encode} decode={decode} keyComponentA={generateKey(5)} />
};
