// import React from 'react';
// import CipherFactory from '../../ui/EncryptDecrypt';

// export default function GrayCodeCipher({ ongetInfo }) {

//     // Function to encode a string using the Gray Code cipher
//     function encode(str) {
//         let encodedChars = '';

//         for (let i = 0; i < str.length; i++) {
//             let char = str[i];
//             let charCode = char.charCodeAt(0);

//             // Convert the character to its binary representation
//             let binaryChar = charCode.toString(2);

//             // Convert the binary representation to Gray Code
//             let grayCode = (charCode >> 1) ^ charCode;

//             // Append the Gray Code representation of the character to the result
//             encodedChars += String.fromCharCode(grayCode);
//         }

//         return encodedChars;
//     }

//     // Function to decode a string using the Gray Code cipher
//     function decode(str) {
//         let decodedChars = '';

//         for (let i = 0; i < str.length; i++) {
//             let char = str[i];
//             let charCode = char.charCodeAt(0);

//             // Convert the Gray Code representation to binary
//             let binaryChar = 0;
//             for (let j = 7; j >= 0; j--) {
//                 binaryChar += ((charCode >> j) ^ binaryChar) << j;
//             }

//             // Convert the binary representation to ASCII
//             decodedChars += String.fromCharCode(binaryChar);
//         }

//         return decodedChars;
//     }

//     // Function to display information about the Gray Code cipher
//     const showInformation = () => {
//         const info = (
//             <>
//                 <p>
//                     The Gray Code cipher is an encoding scheme where each character is represented by its Gray Code equivalent.
//                 </p>
//                 <p>To encrypt using the Gray Code cipher, simply convert each character to its Gray Code representation.</p>
//                 <p>To decrypt, convert the Gray Code representation back to ASCII.</p>
//             </>
//         );
//         ongetInfo(info);
//     };

//     React.useEffect(() => {
//         showInformation();
//     }, []);

//     return (
//         <>
//             <CipherFactory encode={encode} decode={decode} />
//         </>
//     );
// };


import React from 'react';
import CipherFactory from '../../ui/EncryptDecrypt';

export default function GrayCodeCipher({ ongetInfo }) {

    // Function to encode a string using the Gray Code cipher
    function encode(str) {
        let encodedChars = '';

        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            let charCode = char.charCodeAt(0);

            // Convert the character to its binary representation
            let binaryChar = charCode.toString(2);

            // Convert the binary representation to Gray Code
            let grayCode = (charCode >> 1) ^ charCode;

            // Append the Gray Code representation of the character to the result
            encodedChars += String.fromCharCode(grayCode);

            // Append the binary representation of the character to the result
            encodedChars += ` (${binaryChar})`;
        }

        return encodedChars;
    }

    // Function to decode a string using the Gray Code cipher
    function decode(str) {
        let decodedChars = '';

        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            let charCode = char.charCodeAt(0);

            // Convert the Gray Code representation to binary
            let binaryChar = 0;
            for (let j = 7; j >= 0; j--) {
                binaryChar += ((charCode >> j) ^ binaryChar) << j;
            }

            // Convert the binary representation to ASCII
            decodedChars += String.fromCharCode(binaryChar);
        }

        return decodedChars;
    }

    // Function to display information about the Gray Code cipher
    const showInformation = () => {
        const info = (
            <>
                <p>Gray Code, also known as Reflected Binary Code, is a binary numeral system where two successive values differ in only one bit.</p>
            <p>Developed by Frank Gray in 1947, it is primarily used in error correction in digital communications and to prevent errors in mechanical encoders.</p>
            <p>Gray Code is particularly useful in situations where changes between successive values should be minimized, reducing the risk of errors during transitions.</p>
            <p>While not commonly used as a traditional cipher, Gray Code can be adapted for cryptographic purposes by leveraging its unique properties.</p>
            <ul>
               
                <li>Gray Code can be used to encode numerical data to reduce error rates during transmission.</li>
                <li>To encrypt: Convert the numerical data into Gray Code, which can then be transmitted or stored.</li>
                <li>To decrypt: Convert the Gray Code back to its original binary or numerical form to retrieve the plaintext data.</li>
               
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
            <CipherFactory encode={encode} decode={decode} />
        </>
    );
};
